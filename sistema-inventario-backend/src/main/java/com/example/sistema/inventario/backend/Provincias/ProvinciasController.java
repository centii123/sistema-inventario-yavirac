package com.example.sistema.inventario.backend.Provincias;

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
@RequestMapping("provincias")
@Tag(name = "Controlador Provincias", description = "Tabla Provincias")
@CrossOrigin({"*"})
public class ProvinciasController {
    @Autowired
    ProvinciasService service;

    @Operation(summary = "Obtiene todas las provincias, Requiere provincias-obtener")
    @PreAuthorize("hasAuthority('provincias-obtener')")
    @GetMapping("/")
    public List<Provincias> getAll(){
        return service.getAll();
    }

    @Operation(summary = "Obtiene una provincia, Requiere provincias-obtener-id")
    @PreAuthorize("hasAuthority('provincias-obtener-id')")
    @GetMapping("/{id}/")
    public Provincias findById(@PathVariable long id){
        return service.findById(id);
    }

    @Operation(summary = "Agrega una provincia, Requiere provincias-agregar")
    @PreAuthorize("hasAuthority('provincias-agregar')")
    @PostMapping("/")
    public Provincias save (@RequestBody Provincias entity){
        return service.save(entity);
    }

    @Operation(summary = "Edita una provincia, Requiere provincias-editar")
    @PreAuthorize("hasAuthority('provincias-editar')")
    @PutMapping("/")
    public Provincias update (@RequestBody Provincias entity){
        return service.save(entity);
    }

    @Operation(summary = "Elimina una provincia, Requiere provincias-eliminar")
    @PreAuthorize("hasAuthority('provincias-eliminar')")
    @DeleteMapping("/{id}/")
    public void deeteById(@PathVariable long id){
        service.deleteById(id);
    }
}
