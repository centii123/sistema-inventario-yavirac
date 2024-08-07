package com.example.sistema.inventario.backend.Titulos;

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
@RequestMapping("titulos")
@Tag(name = "Controlador Titulos", description = "Tabla Titulos")
@CrossOrigin({ "*" })
public class TitulosController {
    @Autowired
    TitulosService service;

    @Operation(summary = "Obtiene todas los titulos, Requiere titulos-obtener")
    @PreAuthorize("hasAuthority('titulos-obtener')")
    @GetMapping("/")
    public List<Titulos> getAll() {
        return service.getAll();
    }

    @Operation(summary = "Obtiene un titulo por su id, Requiere titulos-obtener-id")
    @PreAuthorize("hasAuthority('titulos-obtener-id')")
    @GetMapping("/{id}/")
    public Titulos findById(@PathVariable long id) {
        return service.findById(id);
    }

    @Operation(summary = "Agrega un titulo, Requiere titulos-agregar")
    @PreAuthorize("hasAuthority('titulos-agregar')")
    @PostMapping("/")
    public Titulos save(@RequestBody Titulos entity) {
        return service.save(entity);
    }

    @Operation(summary = "Actualizar campo completo de un titulo, Requiere titulos-editar")
    @PreAuthorize("hasAuthority('titulos-editar')")
    @PutMapping("/")
    public Titulos update(@RequestBody Titulos entity) {
        return service.save(entity);
    }

    @Operation(summary = "Elimina un titulo, Requiere titulos-eliminar")
    @PreAuthorize("hasAuthority('titulos-eliminar')")
    @DeleteMapping("/{id}/")
    public void deeteById(@PathVariable long id) {
        service.deleteById(id);
    }

    @Operation(summary = "Elimina un titulo fisicamente, Requiere titulos-eliminar")
    @PreAuthorize("hasAuthority('titulos-eliminar')")
    @DeleteMapping("/fisica/{id}/")
    public void deeteByIdFisical(@PathVariable long id) {
        service.deleteByIdFisical(id);
    }

}
