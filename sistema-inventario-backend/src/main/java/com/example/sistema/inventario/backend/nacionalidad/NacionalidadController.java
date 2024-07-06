package com.example.sistema.inventario.backend.nacionalidad;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;

@RestController
@RequestMapping("nacionalidad")
@Tag(name = "Controlador Nacionalidad", description = "Tabla Nacionalidad")
@CrossOrigin("*")
public class NacionalidadController {

    @Autowired
    private NacionalidadService service;

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @GetMapping("/")
    public List<Nacionalidad> getAll() {
        return service.getAll();
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @GetMapping("/{id}/")
    public Nacionalidad findById(@PathVariable long id) {
        return service.findById(id);
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @PostMapping("/")
    public Nacionalidad save(@RequestBody Nacionalidad nacionalidad) {
        return service.save(nacionalidad);
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @PutMapping("/")
    public Nacionalidad update(@RequestBody Nacionalidad nacionalidad) {
        return service.save(nacionalidad);
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @DeleteMapping("/{id}/")
    public void deleteById(@PathVariable long id) {
        service.deleteById(id);
    }
}
