package com.example.sistema.inventario.backend.EstadoCivil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("estado-civil")
public class EstadoCivilController {

    private final EstadoCivilService estadoCivilService;

    @Autowired
    public EstadoCivilController(EstadoCivilService estadoCivilService) {
        this.estadoCivilService = estadoCivilService;
    }

    // GET todos los estados civiles
    @GetMapping("/")
    public List<EstadoCivil> getAllEstadoCivil() {
        return estadoCivilService.getAllEstadoCivil();
    }

    // GET estado civil por ID
    @GetMapping("/{id}")
    public EstadoCivil getEstadoCivilById(@PathVariable("id") Long id) {
        return estadoCivilService.getEstadoCivilById(id);
    }

    // POST crear nuevo estado civil
    @PostMapping("/")
    public EstadoCivil createEstadoCivil(@RequestBody EstadoCivil estadoCivil) {
        return estadoCivilService.createEstadoCivil(estadoCivil);
    }

    // PUT actualizar estado civil existente
    @PutMapping("/{id}")
    public EstadoCivil updateEstadoCivil(@PathVariable("id") Long id, @RequestBody EstadoCivil estadoCivil) {
        return estadoCivilService.updateEstadoCivil(id, estadoCivil);
    }

    // DELETE estado civil por ID
    @DeleteMapping("/{id}")
    public void deleteEstadoCivil(@PathVariable("id") Long id) {
        estadoCivilService.deleteEstadoCivil(id);
    }
}
