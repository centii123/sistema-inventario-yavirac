package com.example.sistema.inventario.backend.Institutos;

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
@RequestMapping("institutos")
@Tag(name = "Controlador Institutos", description = "Tabla Institutos")
@CrossOrigin({"*"})
public class InstitutosController {

    @Autowired
    InstitutosService service;

    @Operation(summary = "Obtiene todas los institutos, Requiere institutos-obtener")
    @PreAuthorize("hasAuthority('institutos-obtener')")
    @GetMapping("/")
    public List<Institutos> getAll(){
        return service.getAll();
    }

    @Operation(summary = "Obtiene un instituto, Requiere institutos-obtener-id")
    @PreAuthorize("hasAuthority('institutos-obtener-id')")
    @GetMapping("/{id}/")
    public Institutos findById(@PathVariable long id){
        return service.findById(id);
    }

    @Operation(summary = "Agrega un instituto, Requiere institutos-agregar")
    @PreAuthorize("hasAuthority('institutos-agregar')")
    @PostMapping("/")
    public Institutos save (@RequestBody Institutos entity){
        return service.save(entity);
    }

    @Operation(summary = "Edita un instituto, Requiere institutos-editar")
    @PreAuthorize("hasAuthority('institutos-editar')")
    @PutMapping("/")
    public Institutos update (@RequestBody Institutos entity){
        return service.save(entity);
    }

    @Operation(summary = "Elimina un instituto, Requiere institutos-eliminar")
    @PreAuthorize("hasAuthority('institutos-eliminar')")
    @DeleteMapping("/{id}/")
    public void deeteById(@PathVariable long id){
        service.deleteById(id);
    }
    
}
