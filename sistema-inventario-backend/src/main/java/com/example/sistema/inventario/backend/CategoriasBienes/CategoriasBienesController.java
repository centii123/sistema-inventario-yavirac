package com.example.sistema.inventario.backend.CategoriasBienes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;

@RestController
@RequestMapping("categorias-bienes")
@Tag(name = "Controlador Categoria Bienes", description = "Tabla Categoria Bienes")
@CrossOrigin({ "*" })
public class CategoriasBienesController {

    @Autowired
    CategoriasBienesService service;

    @Operation(summary = "Obtiene todas las categorias del bien, Requiere categorias-bienes-obtener")
    @PreAuthorize("hasAuthority('categorias-bienes-obtener')")
    @GetMapping("/")
    public List<CategoriasBienes> getAll() {
        return service.getAll();
    }

    @Operation(summary = "Obtiene una categoria del bien, Requiere categorias-bienes-obtener-id")
    @PreAuthorize("hasAuthority('categorias-bienes-obtener-id')")
    @GetMapping("/{id}/")
    public CategoriasBienes findById(@PathVariable long id) {
        return service.findById(id);
    }

    @Operation(summary = "Agrega una categoria del bien, Requiere categorias-bienes-agregar")
    @PreAuthorize("hasAuthority('categorias-bienes-agregar')")
    @PostMapping("/")
    public CategoriasBienes save(@RequestBody CategoriasBienes entity) {
        return service.save(entity);
    }

    @Operation(summary = "Edita una categoria del bien, Requiere categorias-bienes-editar")
    @PreAuthorize("hasAuthority('categorias-bienes-editar')")
    @PutMapping("/")
    public CategoriasBienes update(@RequestBody CategoriasBienes entity) {
        return service.save(entity);
    }

    @Operation(summary = "Elimina una categoria del bien, Requiere categorias-bienes-eliminar")
    @PreAuthorize("hasAuthority('categorias-bienes-eliminar')")
    @DeleteMapping("/{id}/")
    public void deleteById(@PathVariable long id) {
        service.deleteById(id);
    }
}
