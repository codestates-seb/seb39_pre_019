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
//                .allowedOrigins("*")
                .allowedMethods("*")
//                .allowCredentials(true)
                .allowedOriginPatterns("*");
//                .exposedHeaders("authorization")
    }

//    @Override
//    public void configureViewResolvers(ViewResolverRegistry registry) {
//        MustacheViewResolver resolver = new MustacheViewResolver();
//        resolver.setCharset("UTF-8");
//        resolver.setContentType("text/html; charset=UTF-8");
//        resolver.setPrefix("classpath:/templates/");
//        resolver.setSuffix(".html");
//
//        registry.viewResolver(resolver);
//    }
}
