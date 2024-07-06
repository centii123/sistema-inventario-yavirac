package com.example.sistema.inventario.backend.discapacidad;

import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.tags.Tag;

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



@RestController
@RequestMapping("discapacidad")
@Tag(name = "Controlador Discapacidad", description = "Tabla Discapacidad")
@CrossOrigin({"*"})
public class DiscapacidadController {

    @Autowired
    DiscapacidadService service;

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @GetMapping("/")
    public List<Discapacidad> getAll(){
        return service.getAll();
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @GetMapping("/{id}/")
    public Discapacidad findById(@PathVariable long id){
        return service.findByid(id);
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @PostMapping("/")
    public Discapacidad save(@RequestBody Discapacidad entity){
        return service.save(entity);
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @PutMapping("/")
    public Discapacidad update(@RequestBody Discapacidad entity){
        return service.save(entity);
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @DeleteMapping("/{id}/")
    public void deleteById(@PathVariable long id){
        service.deleteById(id);
    }
    
}
