package com.example.sistema.inventario.backend.Bienes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;

@RestController
@RequestMapping("/bienes")
@Tag(name = "Controlador Bienes", description = "Tabla bienes")
public class BienesController {
    @Autowired
    private final BienesService bienesService;

    public BienesController(BienesService bienesService) {
        this.bienesService = bienesService;
    }

    // GET todos los bienes
    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @GetMapping("/")
    public List<Bienes> getAllBienes() {
        return bienesService.getAllBienes();
    }

    // GET bien por ID
    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @GetMapping("/{id}")
    public Bienes getBienesById(@PathVariable("id") Long id) {
        return bienesService.getBienesById(id);
    }

    // GET bienes por nombre
    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @GetMapping("/nombre/{nombre}")
    public List<Bienes> findByNombre(@PathVariable("nombre") String nombre) {
        return bienesService.findByNombre(nombre);
    }

    // POST crear nuevo bien
    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @PostMapping("/")
    public Bienes createBienes(@RequestBody Bienes bienes) {
        return bienesService.createBienes(bienes);
    }

    // PUT actualizar bien existente
    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @PutMapping("/{id}")
    public Bienes updateBienes(@PathVariable("id") Long id, @RequestBody Bienes bienes) {
        return bienesService.updateBienes(id, bienes);
    }

    // DELETE bien por ID
    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @DeleteMapping("/{id}")
    public void deleteBienes(@PathVariable("id") Long id) {
        bienesService.deleteBienes(id);
    }
}
