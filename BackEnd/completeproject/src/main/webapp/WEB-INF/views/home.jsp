<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="c" 
       uri="http://java.sun.com/jsp/jstl/core" %>

<%@ taglib prefix="fn" 
       uri="http://java.sun.com/jsp/jstl/functions" %>
       
  <c:set var="contextRoot" value="${pageContext.request.contextPath}" />
  
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
    <h1>Expense Tracker</h1>
    
    <a href="${contextRoot}/addexpense">Add Expense</a>
    
    <c:forEach var="exp" items="${msg}">
       <div>
         <h3>${exp.expensename}</h3>
         <h3>${exp.amount}</h3>
       </div>
    </c:forEach>
</body>
</html>