package com.example.sistema.inventario.backend.clasePrueba;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class classPrueba {

    @GetMapping("/")
    public String holaMundo() {
        return "Hola mundo";
    }

}

