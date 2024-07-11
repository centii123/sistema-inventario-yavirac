package com.example.sistema.inventario.backend.Genero;

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
@RequestMapping("generos")
@Tag(name = "Controlador Generos", description = "Tabla Generos")
@CrossOrigin({ "*" })
public class GenerosController {

    @Autowired
    GenerosService service;

    @Operation(summary = "Obtiene todas los generos, Requiere generos-obtener")
    @PreAuthorize("hasAuthority('generos-obtener')")
    @GetMapping("/")
    public List<Generos> getAll() {
        return service.getAll();
    }

    @Operation(summary = "Obtiene un genero, Requiere generos-obtener-id")
    @PreAuthorize("hasAuthority('generos-obtener-id')")
    @GetMapping("/{id}/")
    public Generos findById(@PathVariable long id) {
        return service.findById(id);
    }

    @Operation(summary = "Agrega un genero, Requiere generos-agregar")
    @PreAuthorize("hasAuthority('generos-agregar')")
    @PostMapping("/")
    public Generos save(@RequestBody Generos entity) {
        return service.save(entity);
    }

    @Operation(summary = "Edita un genero, Requiere generos-editar")
    @PreAuthorize("hasAuthority('generos-editar')")
    @PutMapping("/")
    public Generos update(@RequestBody Generos entity) {
        return service.save(entity);
    }

    @Operation(summary = "Elimina un genero, Requiere generos-eliminar")
    @PreAuthorize("hasAuthority('generos-eliminar')")
    @DeleteMapping("/{id}/")
    public void deeteById(@PathVariable long id) {
        service.deleteById(id);
    }

}
