package com.example.sistema.inventario.backend.CategoriasBienes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("categorias-bienes")
@CrossOrigin({ "*" })
public class CategoriasBienesController {

    @Autowired
    CategoriasBienesService service;

    @GetMapping("/")
    public List<CategoriasBienes> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}/")
    public CategoriasBienes findById(@PathVariable long id) {
        return service.findById(id);
    }

    @PostMapping("/")
    public CategoriasBienes save(@RequestBody CategoriasBienes entity) {
        return service.save(entity);
    }

    @PutMapping("/")
    public CategoriasBienes update(@RequestBody CategoriasBienes entity) {
        return service.save(entity);
    }

    @DeleteMapping("/{id}/")
    public void deleteById(@PathVariable long id) {
        service.deleteById(id);
    }
}
