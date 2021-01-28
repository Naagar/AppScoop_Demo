package com.brijesh.completeproject.response;

import java.util.List;

public class GetEmployeeResponse {
        private List<GetEmployeeListResponse> employeelist;
        public List<GetEmployeeListResponse> getEmployeelist() {
			return employeelist;
		}
		public void setEmployeelist(List<GetEmployeeListResponse> employeelist) {
			this.employeelist = employeelist;
		}
		public CommonPaginationResponse getTotalpage() {
			return totalpage;
		}
		public void setTotalpage(CommonPaginationResponse totalpage) {
			this.totalpage = totalpage;
		}
		private CommonPaginationResponse totalpage;
}
