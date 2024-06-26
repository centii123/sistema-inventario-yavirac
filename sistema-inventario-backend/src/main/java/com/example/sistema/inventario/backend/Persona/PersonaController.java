package com.example.sistema.inventario.backend.Persona;

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
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("persona")
@CrossOrigin({"*"})
public class PersonaController {

    @Autowired
    PersonaService service;

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @GetMapping("/")
    public List<Persona> getAll(){
        return service.getAll();
    }

    //@Operation(summary = "Obtiene una compania por su id, Requiere compania-getOne")
    //@PreAuthorize("hasAuthority('compania-getOne')")
    @GetMapping("/{id}/")
    public Persona findById(@PathVariable long id){
        return service.findById(id);
    }

    //@Operation(summary = "Agrega una conpania, Requiere compania-save")
    //@PreAuthorize("hasAuthority('compania-save')")
    @PostMapping("/")
    public Persona save (@RequestBody Persona entity){
        return service.save(entity);
    }

    //@Operation(summary = "Actualizar campo completo de una compania, el id va en la body, Requiere compania-put")
    //@PreAuthorize("hasAuthority('compania-put')")
    @PutMapping("/")
    public Persona update (@RequestBody Persona entity){
        return service.save(entity);
    }

    //@Operation(summary = "Elimina una compania, el id va en la url, Requiere compania-delete")
    //@PreAuthorize("hasAuthority('compania-delete')")
    @DeleteMapping("/{id}/")
    public void deeteById(@PathVariable long id){
        service.deleteById(id);
    }
    
}
