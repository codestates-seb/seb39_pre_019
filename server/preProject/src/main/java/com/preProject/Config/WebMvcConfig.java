package com.preProject.Config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.view.MustacheViewResolver;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    //    @Value("${config.domain}")
//    private String domain;
//
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
//                .allowedOrigins("http://localhost:3000",
//                        "http://localhost:8080",
//                        "http://localhost:3306",
//                        "http://3.39.158.220:8080",
//                        "http://3.39.158.220:3000")
                .allowedMethods("*")
//                .allowCredentials(true)
                .allowedOriginPatterns("*")
                .exposedHeaders("*");
    }

}
