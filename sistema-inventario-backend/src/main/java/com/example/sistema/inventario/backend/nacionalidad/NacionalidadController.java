package com.example.sistema.inventario.backend.nacionalidad;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;

@RestController
@RequestMapping("nacionalidad")
@Tag(name = "Controlador Nacionalidad", description = "Tabla Nacionalidad")
@CrossOrigin("*")
public class NacionalidadController {

    @Autowired
    private NacionalidadService service;

    @Operation(summary = "Obtiene todas las nacionalidad, Requiere nacionalidad-obtener")
    @PreAuthorize("hasAuthority('nacionalidad-obtener')")
    @GetMapping("/")
    public List<Nacionalidad> getAll() {
        return service.getAll();
    }

    @Operation(summary = "Obtiene una nacionalidad, Requiere nacionalidad-obtener-id")
    @PreAuthorize("hasAuthority('nacionalidad-obtener-id')")
    @GetMapping("/{id}/")
    public Nacionalidad findById(@PathVariable long id) {
        return service.findById(id);
    }

    @Operation(summary = "Agrega una nacionalidad, Requiere nacionalidad-agregar")
    @PreAuthorize("hasAuthority('nacionalidad-agregar')")
    @PostMapping("/")
    public Nacionalidad save(@RequestBody Nacionalidad nacionalidad) {
        return service.save(nacionalidad);
    }

    @Operation(summary = "Edita una nacionalidad, Requiere nacionalidad-editar")
    @PreAuthorize("hasAuthority('nacionalidad-editar')")
    @PutMapping("/")
    public Nacionalidad update(@RequestBody Nacionalidad nacionalidad) {
        return service.save(nacionalidad);
    }

    @Operation(summary = "Elimina una nacionalidad, Requiere nacionalidad-eliminar")
    @PreAuthorize("hasAuthority('nacionalidad-eliminar')")
    @DeleteMapping("/{id}/")
    public void deleteById(@PathVariable long id) {
        service.deleteById(id);
    }
}
