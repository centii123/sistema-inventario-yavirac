package com.example.sistema.inventario.backend.EstadoCivil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;

@RestController
@RequestMapping("estado-civil")
@Tag(name = "Controlador Estado Civil", description = "Tabla Estado Civil")
public class EstadoCivilController {
    @Autowired
    private final EstadoCivilService estadoCivilService;


    public EstadoCivilController(EstadoCivilService estadoCivilService) {
        this.estadoCivilService = estadoCivilService;
    }

    // GET todos los estados civiles
    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @GetMapping("/")
    public List<EstadoCivil> getAllEstadoCivil() {
        return estadoCivilService.getAllEstadoCivil();
    }

    // GET estado civil por ID
    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @GetMapping("/{id}")
    public EstadoCivil getEstadoCivilById(@PathVariable("id") Long id) {
        return estadoCivilService.getEstadoCivilById(id);
    }

    // POST crear nuevo estado civil
    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @PostMapping("/")
    public EstadoCivil createEstadoCivil(@RequestBody EstadoCivil estadoCivil) {
        return estadoCivilService.createEstadoCivil(estadoCivil);
    }

    // PUT actualizar estado civil existente
    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @PutMapping("/{id}")
    public EstadoCivil updateEstadoCivil(@PathVariable("id") Long id, @RequestBody EstadoCivil estadoCivil) {
        return estadoCivilService.updateEstadoCivil(id, estadoCivil);
    }

    // DELETE estado civil por ID
    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @DeleteMapping("/{id}")
    public void deleteEstadoCivil(@PathVariable("id") Long id) {
        estadoCivilService.deleteEstadoCivil(id);
    }
}
