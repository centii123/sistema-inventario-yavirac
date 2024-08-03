package com.example.sistema.inventario.backend.FamiliarLaboraotraEntidadPublica;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("familiar-labora-otra-entidad-publica")
@Tag(name = "Controlador familiar-labora-otra-entidad-publica", description = "Tabla familiar-labora-otra-entidad-publica")
@CrossOrigin({ "*" })
public class FamiliarLaboraotraEntidadPublicaController {
    
    @Autowired
    FamiliarLaboraotraEntidadPublicaService service;

    @Operation(summary = "Obtiene todas los Estudios en Curso, Requiere familiar-labora-otra-entidad-publica")
    @PreAuthorize("hasAuthority('familiar-labora-otra-entidad-publica')")
    @GetMapping("/")
    public List<FamiliarLaboraotraEntidadPublica> getAll() {
        return service.getAll();
    }

    @Operation(summary = "Obtiene un Estudio en Curso, Requiere familiar-labora-otra-entidad-publica-id")
    @PreAuthorize("hasAuthority('familiar-labora-otra-entidad-publica-id')")
    @GetMapping("/{id}/")
    public FamiliarLaboraotraEntidadPublica findById(@PathVariable long id) {
        return service.findById(id);
    }

    @Operation(summary = "Agrega un Estudio en Curso, Requiere familiar-labora-otra-entidad-publica-agregar")
    @PreAuthorize("hasAuthority('familiar-labora-otra-entidad-publica-agregar')")
    @PostMapping("/")
    public FamiliarLaboraotraEntidadPublica save(@RequestBody FamiliarLaboraotraEntidadPublica entity) {
        return service.save(entity);
    }

    @Operation(summary = "Edita un Estudio en Curso, Requiere familiar-labora-otra-entidad-publica-editar")
    @PreAuthorize("hasAuthority('familiar-labora-otra-entidad-publica-editar')")
    @PutMapping("/")
    public FamiliarLaboraotraEntidadPublica update(@RequestBody FamiliarLaboraotraEntidadPublica entity) {
        return service.save(entity);
    }

    @Operation(summary = "Elimina un Estudio en Curso, Requiere familiar-labora-otra-entidad-publica-eliminar")
    @PreAuthorize("hasAuthority('familiar-labora-otra-entidad-publica-eliminar')")
    @DeleteMapping("/{id}/")
    public void deeteById(@PathVariable long id) {
        service.deleteById(id);
    }

}
