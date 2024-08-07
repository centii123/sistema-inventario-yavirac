package com.example.sistema.inventario.backend.enfermedadCatastrofica;

import java.util.List;
//import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
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

    @Operation(summary = "Obtiene todas las enfermedades catastroficas, Requiere enfermedad-catastrofica-obtener")
    @PreAuthorize("hasAuthority('enfermedad-catastrofica-obtener')")
    @GetMapping("/")
    public List<EnfermedadCatastrofica> getAll() {
        return service.getAll();
    }

    @Operation(summary = "Obtiene una enfermedad catastrofica, Requiere enfermedad-catastrofica-obtener-id")
    @PreAuthorize("hasAuthority('enfermedad-catastrofica-obtener-id')")
    @GetMapping("/{id}/")
    public EnfermedadCatastrofica findById(@PathVariable long id) {
        return service.findById(id);
    }

    @Operation(summary = "Agregar una enfermedad catastrofica, Requiere enfermedad-catastrofica-agregar")
    @PreAuthorize("hasAuthority('enfermedad-catastrofica-agregar')")
    @PostMapping("/")
    public EnfermedadCatastrofica save(@RequestBody EnfermedadCatastrofica entity) {
        return service.save(entity);
    }

    @Operation(summary = "Editar una enfermedad catastrofica, Requiere enfermedad-catastrofica-editar")
    @PreAuthorize("hasAuthority('enfermedad-catastrofica-editar')")
    @PutMapping("/")
    public EnfermedadCatastrofica update(@RequestBody EnfermedadCatastrofica entity) {
        return service.save(entity);
    }
    
    @Operation(summary = "Eliminar una enfermedad catastrofica, Requiere enfermedad-catastrofica-eliminar")
    @PreAuthorize("hasAuthority('enfermedad-catastrofica-eliminar')")
    @DeleteMapping("/{id}/")
    public void deleteById(@PathVariable long id) {
        service.deleteById(id);
    }

    @Operation(summary = "Eliminar una enfermedad catastrofica fisicamente, Requiere enfermedad-catastrofica-eliminar")
    @PreAuthorize("hasAuthority('enfermedad-catastrofica-eliminar')")
    @DeleteMapping("/fisica/{id}/")
    public void deleteByIdFisical(@PathVariable long id) {
        service.deleteByIdFisical(id);
    }
}
