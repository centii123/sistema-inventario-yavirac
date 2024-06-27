package com.example.sistema.inventario.backend.aula;

import org.springframework.web.bind.annotation.RestController;

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
@RequestMapping("aula")
@CrossOrigin({"*"})
public class AulaController {
    
    @Autowired
    AulaService service;

    @GetMapping("/")
    public List<Aula> getAll(){
        return service.getAll();
    }

    @GetMapping("/{id}/")
    public Aula findById(@PathVariable long id){
        return service.findById(id);
    }

    @PostMapping("/")
    public Aula save(@RequestBody Aula entity){
        return service.save(entity);
    }

    @PutMapping("/")
    public Aula update(@RequestBody Aula entity){
        return service.save(entity);
    }

    @DeleteMapping("/{id}/")
    public void deleteById(@PathVariable long id){
        service.deleteById(id);
    }
    
}
