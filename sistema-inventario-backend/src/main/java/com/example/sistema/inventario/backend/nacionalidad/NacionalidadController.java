package com.example.sistema.inventario.backend.nacionalidad;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("nacionalidad")
@CrossOrigin("*")
public class NacionalidadController {

    @Autowired
    private NacionalidadService service;

    @GetMapping("/")
    public List<Nacionalidad> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}/")
    public Nacionalidad findById(@PathVariable long id) {
        return service.findById(id);
    }

    @PostMapping("/")
    public Nacionalidad save(@RequestBody Nacionalidad nacionalidad) {
        return service.save(nacionalidad);
    }

    @PutMapping("/")
    public Nacionalidad update(@RequestBody Nacionalidad nacionalidad) {
        return service.save(nacionalidad);
    }

    @DeleteMapping("/{id}/")
    public void deleteById(@PathVariable long id) {
        service.deleteById(id);
    }
}
