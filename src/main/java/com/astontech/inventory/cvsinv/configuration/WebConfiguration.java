package com.astontech.inventory.cvsinv.configuration;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.h2.server.web.WebServlet;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
/*@ComponentScan("com.astontech.inventory.cvsinv")
@EntityScan("com.astontech.inventory.cvsinv.domain")
@EnableJpaRepositories("com.astontech.inventory.cvsinv.repositories")*/
public class WebConfiguration {

    @Bean
    ServletRegistrationBean h2servletRegistration() {
        ServletRegistrationBean registrationBean = new ServletRegistrationBean(new WebServlet());
        registrationBean.addUrlMappings("/console/*");

        return registrationBean;
    }
}
