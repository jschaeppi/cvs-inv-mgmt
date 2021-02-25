package com.astontech.inventory.cvsinv.configuration;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableAutoConfiguration
@EnableJpaRepositories(basePackages = {"com.astontech.inventory.cvsinv.repositories"})
@EntityScan(basePackages = {"com.astontech.inventory.cvsinv.domain"})
@EnableTransactionManagement
public class RepositoryConfiguration {
}
