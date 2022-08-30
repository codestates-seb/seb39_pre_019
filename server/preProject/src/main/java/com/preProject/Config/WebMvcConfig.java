package com.preProject.Config;

<<<<<<< HEAD

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
=======
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.view.MustacheViewResolver;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
>>>>>>> 7ab51b6bab2394f663a5789e5e7c27238b55af47
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
<<<<<<< HEAD
//                .allowCredentials(true)
                .allowedOriginPatterns("*");
//                .exposedHeaders("authorization")
=======
                .allowCredentials(true)
                .allowedOriginPatterns("*");
//                 .exposedHeaders("authorization")
>>>>>>> 7ab51b6bab2394f663a5789e5e7c27238b55af47
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
