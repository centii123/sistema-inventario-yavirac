package com.example.sistema.inventario.backend.EscalaOcupacional;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("escala-ocupacional")
@Tag(name = "Controlador Escala Ocupacional", description = "Tabla Escala Ocupacional")
@CrossOrigin({ "*" })
public class EscalaOcupacionalesController {

    @Autowired
    EscalaOcupacionalesService service;

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @GetMapping("/")
    public List<EscalaOcupacionales> getAll() {
        return service.getAll();
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @GetMapping("/{id}/")
    public EscalaOcupacionales findById(@PathVariable long id) {
        return service.findById(id);
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @PostMapping("/")
    public EscalaOcupacionales save(@RequestBody EscalaOcupacionales enntity) {
        return service.save(enntity);
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @PutMapping("/")
    public EscalaOcupacionales update(@RequestBody EscalaOcupacionales entity) {
        return service.save(entity);
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @DeleteMapping("/{id}/")
    public void deeteById(@PathVariable long id) {
        service.deeteById(id);
    }

}