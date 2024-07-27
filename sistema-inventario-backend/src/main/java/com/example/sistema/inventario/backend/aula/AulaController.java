package com.example.sistema.inventario.backend.aula;

import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
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
@RequestMapping("aula")
@Tag(name = "Controlador Aulas", description = "Tabla aulas")
@CrossOrigin({"*"})
public class AulaController {
    
    @Autowired
    AulaService service;

    @Operation(summary = "Obtiene todas las aulas, Requiere aula-optener")
    @PreAuthorize("hasAuthority('aula-obtener')")
    @GetMapping("/")
    public List<Aula> getAll(){
        return service.getAll();
    }

    @Operation(summary = "Obtiene una aula, Requiere aula-optener")
    @PreAuthorize("hasAuthority('aula-obtener-id')")
    @GetMapping("/{id}/")
    public Aula findById(@PathVariable long id){
        return service.findById(id);
    }

    @Operation(summary = "Agrega un aula, Requiere aula-agregar")
    @PreAuthorize("hasAuthority('aula-agregar')")
    @PostMapping("/")
    public Aula save(@RequestBody Aula entity){
        return service.save(entity);
    }

    @Operation(summary = "Edita un aula, Requiere aula-editar")
    @PreAuthorize("hasAuthority('aula-editar')")
    @PutMapping("/")
    public Aula update(@RequestBody Aula entity){
        return service.save(entity);
    }

    @Operation(summary = "Elimina un aula, Requiere aula-eliminar")
    @PreAuthorize("hasAuthority('aula-eliminar')")
    @DeleteMapping("/{id}/")
    public void deleteById(@PathVariable long id){
        
        service.delete(id);
        
    }
    
}
