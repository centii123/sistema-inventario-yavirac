package com.example.sistema.inventario.backend.CategoriasBienes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;

@RestController
@RequestMapping("categorias-bienes")
@Tag(name = "Controlador Categoria Bienes", description = "Tabla Categoria Bienes")
@CrossOrigin({ "*" })
public class CategoriasBienesController {

    @Autowired
    CategoriasBienesService service;

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @GetMapping("/")
    public List<CategoriasBienes> getAll() {
        return service.getAll();
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @GetMapping("/{id}/")
    public CategoriasBienes findById(@PathVariable long id) {
        return service.findById(id);
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @PostMapping("/")
    public CategoriasBienes save(@RequestBody CategoriasBienes entity) {
        return service.save(entity);
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @PutMapping("/")
    public CategoriasBienes update(@RequestBody CategoriasBienes entity) {
        return service.save(entity);
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @DeleteMapping("/{id}/")
    public void deleteById(@PathVariable long id) {
        service.deleteById(id);
    }
}
