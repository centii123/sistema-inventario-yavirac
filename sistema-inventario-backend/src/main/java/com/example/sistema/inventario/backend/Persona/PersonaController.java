package com.example.sistema.inventario.backend.Persona;

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

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("persona")
@Tag(name = "Controlador Persona", description = "Tabla Persona")
@CrossOrigin({"*"})
public class PersonaController {

    @Autowired
    PersonaService service;

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    @PreAuthorize("hasAuthority('persona-obtener')")
    @GetMapping("/")
    public List<Persona> getAll(){
        return service.getAll();
    }

    //@Operation(summary = "Obtiene una compania por su id, Requiere compania-getOne")
    @PreAuthorize("hasAuthority('persona-obtener-id')")
    @GetMapping("/{id}/")
    public Persona findById(@PathVariable long id){
        return service.findById(id);
    }

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    @PreAuthorize("hasAuthority('persona-obtener-dni')")
    @GetMapping("/dni/{dni}/")
    public Persona findByDni(@PathVariable String dni){
        return service.findByDni(dni);
    }

    //@Operation(summary = "Agrega una conpania, Requiere compania-save")
    @PreAuthorize("hasAuthority('persona-agregar')")
    @PostMapping("/")
    public Persona save (@RequestBody Persona entity){
        return service.save(entity);
    }

    //@Operation(summary = "Actualizar campo completo de una compania, el id va en la body, Requiere compania-put")
    @PreAuthorize("hasAuthority('persona-editar')")
    @PutMapping("/")
    public Persona update (@RequestBody Persona entity){
        return service.save(entity);
    }

    //@Operation(summary = "Elimina una compania, el id va en la url, Requiere compania-delete")
    @PreAuthorize("hasAuthority('persona-eliminar')")
    @DeleteMapping("/{id}/")
    public void deeteById(@PathVariable long id){
        service.deleteById(id);
    }
    
}
