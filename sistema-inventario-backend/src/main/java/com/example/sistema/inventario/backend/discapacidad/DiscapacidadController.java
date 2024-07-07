package com.example.sistema.inventario.backend.discapacidad;

import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.tags.Tag;

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



@RestController
@RequestMapping("discapacidad")
@Tag(name = "Controlador Discapacidad", description = "Tabla Discapacidad")
@CrossOrigin({"*"})
public class DiscapacidadController {

    @Autowired
    DiscapacidadService service;

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    @PreAuthorize("hasAuthority('discapacidad-obtener')")
    @GetMapping("/")
    public List<Discapacidad> getAll(){
        return service.getAll();
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    @PreAuthorize("hasAuthority('discapacidad-obtener-id')")
    @GetMapping("/{id}/")
    public Discapacidad findById(@PathVariable long id){
        return service.findByid(id);
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    @PreAuthorize("hasAuthority('discapacidad-agregar')")
    @PostMapping("/")
    public Discapacidad save(@RequestBody Discapacidad entity){
        return service.save(entity);
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    @PreAuthorize("hasAuthority('discapacidad-editar')")
    @PutMapping("/")
    public Discapacidad update(@RequestBody Discapacidad entity){
        return service.save(entity);
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    @PreAuthorize("hasAuthority('discapacidad-eliminar')")
    @DeleteMapping("/{id}/")
    public void deleteById(@PathVariable long id){
        service.deleteById(id);
    }
    
}
