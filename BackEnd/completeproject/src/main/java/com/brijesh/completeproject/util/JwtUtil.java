package com.brijesh.completeproject.util;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class JwtUtil {

	private String SECRET_KEY="secret";
	
	public String extractUsername(String token) {
		return extractClaim(token, Claims::getSubject);
	}
		//retrieve expiration date from jwt token
		public Date extractExpiration(String token) {
		return extractClaim(token, Claims::getExpiration);
		}
		
		
		public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = extraxtAllClaims(token);
		return claimsResolver.apply(claims);
		}
		    //for retrieveing any information from token we will need the secret key
		private Claims extraxtAllClaims(String token) {
		return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
		}
		//check if the token has expired
		private Boolean isTokenExpired(String token) {
		final Date expiration =extractExpiration(token);
		return expiration.before(new Date());
		}
		//generate token for user
		public String generateToken(UserDetails userDetails) {
		Map<String, Object> claims = new HashMap<>();
		return doGenerateToken(claims, userDetails.getUsername());
		}
		//while creating the token -
		//1. Define  claims of the token, like Issuer, Expiration, Subject, and the ID
		//2. Sign the JWT using the HS512 algorithm and secret key.
		//3. According to JWS Compact Serialization(https://tools.ietf.org/html/draft-ietf-jose-json-web-signature-41#section-3.1)
		//   compaction of the JWT to a URL-safe string 
		private String doGenerateToken(Map<String, Object> claims, String subject) {
		return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
		.setExpiration(new Date(System.currentTimeMillis() +1000*60*60*10))
		.signWith(SignatureAlgorithm.HS512, SECRET_KEY).compact();
		}
		//validate token
		public Boolean validateToken(String token, UserDetails userDetails) {
		final String username = extractUsername(token);
		return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
		}
}
