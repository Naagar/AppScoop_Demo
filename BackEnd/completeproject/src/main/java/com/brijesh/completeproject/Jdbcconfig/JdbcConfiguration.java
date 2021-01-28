package com.brijesh.completeproject.Jdbcconfig;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

@Configuration
@ComponentScan(basePackages= {"com.brijesh.completeproject.Dao"})
public class JdbcConfiguration {
	@Bean("ds")
	public DataSource getDataSource() {
		DriverManagerDataSource dmds=new DriverManagerDataSource();
		dmds.setDriverClassName("com.mysql.cj.jdbc.Driver");
		dmds.setUrl("jdbc:mysql://localhost:3306/appscoop");
		dmds.setUsername("root");
		dmds.setPassword("Dabbu@172");
		return dmds;
	}
	@Bean("template")
	public JdbcTemplate getTemplate() {
		JdbcTemplate jt=new JdbcTemplate();
		jt.setDataSource(getDataSource());
		return jt;
	}
//	@Bean("jdbcTemp")
//	public CourseDao getStudentDao() {
//		CourseDaoImpl cdi=new CourseDaoImpl();
//		cdi.setJdbcTemp(getTemplate());
//		return cdi;
//	}

}
