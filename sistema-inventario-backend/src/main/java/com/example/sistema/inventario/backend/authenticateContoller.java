package com.example.sistema.inventario.backend;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.tags.Tag;


@RestController
@RequestMapping("autenticacion-login")
@Tag(name = "Autenticacion", description = "verificacion de token")
@CrossOrigin({"*"})
public class authenticateContoller {
    
    @GetMapping("/")
    public ResponseEntity<Object> getAll() { 
        Map<String, String> respuesta = new HashMap<>();
        respuesta.put("status", "ok");
        return ResponseEntity.ok(respuesta);
    }
}
