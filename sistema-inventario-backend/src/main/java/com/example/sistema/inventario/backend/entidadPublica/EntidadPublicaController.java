package com.example.sistema.inventario.backend.entidadPublica;

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
@RequestMapping("/entidadPublica") // Agregar "/" al inicio del mapeo
@CrossOrigin({"*"})
public class EntidadPublicaController {

    @Autowired
    private EntidadPublicaService service; // Inyectar el servicio en lugar de la entidad

    @GetMapping("/")
    public List<EntidadPublica> getAll(){
        return service.getAll();
    }

    @GetMapping("/{id}/")
    public EntidadPublica findById(@PathVariable long id){
        return service.findById(id);
    }

    @PostMapping("/")
    public EntidadPublica save(@RequestBody EntidadPublica entity){
        return service.save(entity);
    }

    @PutMapping("/")
    public EntidadPublica update(@RequestBody EntidadPublica entity){
        return service.save(entity);
    }

    @DeleteMapping("/{id}/")
    public void deleteById(@PathVariable long id){
        service.deleteById(id);
    }
}
