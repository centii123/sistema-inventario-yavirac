package com.example.sistema.inventario.backend.Infraestructura;

import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
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
@RequestMapping("infraestructura")
@Tag(name = "Controlador Aulas", description = "Tabla aulas")
@CrossOrigin({"*"})
public class InfraestructuraController {
    
    @Autowired
    InfraestructuraService service;

    @Operation(summary = "Obtiene todas las infraestructuras, Requiere infraestructura-optener")
    @PreAuthorize("hasAuthority('infraestructura-obtener')")
    @GetMapping("/")
    public List<Infraestructura> getAll(){
        return service.getAll();
    }

    @Operation(summary = "Obtiene una infraestructura, Requiere infraestructura-optener")
    @PreAuthorize("hasAuthority('infraestructura-obtener-id')")
    @GetMapping("/{id}/")
    public Infraestructura findById(@PathVariable long id){
        return service.findById(id);
    }

    @Operation(summary = "Agrega una infraestructura, Requiere infraestructura-agregar")
    @PreAuthorize("hasAuthority('infraestructura-agregar')")
    @PostMapping("/")
    public Infraestructura save(@RequestBody Infraestructura entity){
        return service.save(entity);
    }

    @Operation(summary = "Edita una infraestructura, Requiere infraestructura-editar")
    @PreAuthorize("hasAuthority('infraestructura-editar')")
    @PutMapping("/")
    public Infraestructura update(@RequestBody Infraestructura entity){
        return service.save(entity);
    }

    @Operation(summary = "Elimina un aula, Requiere infraestructura-eliminar")
    @PreAuthorize("hasAuthority('infraestructura-eliminar')")
    @DeleteMapping("/{id}/")
    public void deleteById(@PathVariable long id){
        
        service.delete(id);
        
    }
    
}
