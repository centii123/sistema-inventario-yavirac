package com.example.sistema.inventario.backend.authz.conf;

import java.util.Arrays;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.example.sistema.inventario.backend.authz.service.UserService;


@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration{

	@Autowired
	private UserService userService;
	
	@Bean                                                     
	public SecurityFilterChain apiFilterChain(HttpSecurity http) throws Exception {

		http
		.csrf().disable()
		.cors()
		.and()
		.authorizeHttpRequests((authorize) -> authorize
				.requestMatchers("/login").permitAll()
				.requestMatchers("/swagger-ui/*").permitAll()
				.requestMatchers("/v3/api-docs").permitAll()
				.requestMatchers("/v3/api-docs/*").permitAll()
				.requestMatchers("/v3/*").permitAll()
				.anyRequest().authenticated()
		);
		http.addFilterBefore(new JWTAuthenticationFilter(userService), BasicAuthenticationFilter.class);
		http.addFilterAfter(new JWTAuthorizationFilter(userService),BasicAuthenticationFilter.class);
		return http.build();

	}

	@Bean
    protected CorsConfigurationSource corsConfigurationSource() {
        final CorsConfiguration configuration = new CorsConfiguration();

        configuration.setAllowedOrigins(Collections.singletonList("*"));
        configuration.setAllowedMethods(Arrays.asList("HEAD", "GET", "POST", "PUT", "DELETE", "PATCH"));

        // NOTE: setAllowCredentials(true) is important,
        // otherwise, the value of the 'Access-Control-Allow-Origin' header in the response
        // must not be the wildcard '*' when the request's credentials mode is 'include'.
        //configuration.setAllowCredentials(true);

        // NOTE: setAllowedHeaders is important!
        // Without it, OPTIONS preflight request will fail with 403 Invalid CORS request
        configuration.setAllowedHeaders(Arrays.asList(
                "Authorization",
                "Accept",
                "Cache-Control",
                "Content-Type",
                "Origin",
                "x-csrf-token",
                "x-requested-with"
        ));

        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
