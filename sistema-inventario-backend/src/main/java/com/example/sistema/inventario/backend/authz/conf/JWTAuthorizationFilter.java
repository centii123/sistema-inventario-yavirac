package com.example.sistema.inventario.backend.authz.conf;

import java.io.IOException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;

import com.example.sistema.inventario.backend.authz.entity.User;
import com.example.sistema.inventario.backend.authz.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;



public class JWTAuthorizationFilter  extends HttpFilter {

    UserService userService;

    public JWTAuthorizationFilter(UserService userService) {
        this.userService = userService;
    }
    @Override
    protected void doFilter(HttpServletRequest request,
                                    HttpServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        String header=request.getHeader(JWTUtil.TOKEN_HEADER);
        System.out.println(request.getMethod());
        if(header==null||!header.startsWith(JWTUtil.TOKEN_PREFIX)){
            chain.doFilter(request,response);
            return;
        }
        UsernamePasswordAuthenticationToken authentication = null;
        try {
            authentication = getAuthentication(header);
        }catch (RuntimeException ex ) {
            response.setCharacterEncoding("UTF-8");
            response.setContentType("application/json; charset=utf-8");
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            response.getWriter().write(new ObjectMapper().writeValueAsString("No access, "+ex.getMessage()));
            return;
        }
        SecurityContextHolder.getContext().setAuthentication(authentication);
        chain.doFilter(request, response);
    }

    private UsernamePasswordAuthenticationToken getAuthentication(String header) {
        String token = header.replace(JWTUtil.TOKEN_PREFIX, "");
        
        String username = JWTUtil.getUsername(token);

        if (JWTUtil.isExpiered(token))
            return null;
        
        User usuario = userService.getUserWithAuthoritiesByUsername(username);
        
        if (username != null) {
            return new UsernamePasswordAuthenticationToken(username, null,usuario.getAuthorities()
            );
        }
        return null;
    }
}
