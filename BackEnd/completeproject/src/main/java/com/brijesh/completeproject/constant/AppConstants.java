package com.brijesh.completeproject.constant;

public class AppConstants {


	public interface Common{

		String ID = "id";
		String TOKEN = "token";
		String TOKEN_HEADER = "Authorization";
		String BLANK_STRING_VALUE = "";
		boolean TRUE_VALUE = true;
		boolean FALSE_VALUE = false;
		String SYSTEM_VALUE = "system";
		String PAGE_NUMBER = "page";
		String PAGE_LIMIT = "limit";
		String PAGE_DEFAULT_VALUE = "0";
		String PAGE_LIMIT_VALUE = "10";


	}

	public interface StatusCodes {
		int SUCCESS = 0;
		int FAILURE = 1;
	}

	public interface Exception {



		public interface Types {

			String USER_NOT_EXIST = "User Not exist";
			String INVALID_TOKEN = "Invalid Token";
			String ENTITY_NOT_FOUND = "Entity Not Found";
			String DATE_PARSE_EXCEPTION = "Invalid Date Format";
			String EMAIL_ERROR = "Error Sending Invite";
            String INVALID_SUBMISSION_LINK = "Invalid submission link";
            String USER_ALREADY_EXIST = "User already exists";
        }
		public interface Codes {

			String USER_NOT_EXIST = "101";
			String INVALID_TOKEN = "102";
			String ENTITY_NOT_FOUND = "103" ;
			String DATE_PARSE_EXCEPTION = "104";
			String EMAIL_ERROR = "105";
			String INVALID_SUBMISSION_LINK = "106";
			String USER_ALREADY_EXIST = "107";
		}
		public interface Messages {

			String USER_NOT_EXIST = "User does not exist";
			String INVALID_TOKEN = "Invalid  Security Token";
			String FORM_NOT_FOUND = "Form not found.";
			String DATE_PARSE_EXCEPTION = "Please send date in correct Format";
			String EMAIL_ERROR = "Error Sending Invite";
			String INVALID_SUBMISSION_LINK = "Link is not valid";
			String PARTNER_ALREADY_EXIST = "Partner already exists";
            String FORM_ALREADY_SUBMITTED = "Form already submitted";
        }
	}

	public interface Config {

		String APPLICATION_PROPERTY_SOURCE_PATH = "file:///mnt/jit/properties/";
		String SERVER_BASE_PATH = "/mnt/jitHiring/";
	}



}
