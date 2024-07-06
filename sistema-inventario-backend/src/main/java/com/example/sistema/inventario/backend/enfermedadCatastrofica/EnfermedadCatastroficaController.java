package com.example.sistema.inventario.backend.enfermedadCatastrofica;

import java.util.List;
//import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("enfermedadCatastrofica")
@Tag(name = "Controlador Enfermedades Catastroficas", description = "Tabla Enfermedades Catastroficas")
@CrossOrigin({"*"})
public class EnfermedadCatastroficaController {

    @Autowired
    EnfermedadCatastroficaService service;

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @GetMapping("/")
    public List<EnfermedadCatastrofica> getAll() {
        return service.getAll();
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @GetMapping("/{id}/")
    public EnfermedadCatastrofica findById(@PathVariable long id) {
        return service.findById(id);
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @PostMapping("/")
    public EnfermedadCatastrofica save(@RequestBody EnfermedadCatastrofica entity) {
        return service.save(entity);
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @PutMapping("/")
    public EnfermedadCatastrofica update(@RequestBody EnfermedadCatastrofica entity) {
        return service.save(entity);
    }
    
    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @DeleteMapping("/{id}/")
    public void deleteById(@PathVariable long id) {
        service.deleteById(id);
    }
}
