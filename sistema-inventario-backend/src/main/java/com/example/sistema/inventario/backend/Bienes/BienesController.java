package com.example.sistema.inventario.backend.Bienes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("bienes")
public class BienesController {
    @Autowired
    private final BienesService bienesService;

    public BienesController(BienesService bienesService) {
        this.bienesService = bienesService;
    }

    // GET todos los bienes
    @GetMapping("/")
    public List<Bienes> getAllBienes() {
        return bienesService.getAllBienes();
    }

    // GET bien por ID
    @GetMapping("/{id}")
    public Bienes getBienesById(@PathVariable("id") Long id) {
        return bienesService.getBienesById(id);
    }

    // POST crear nuevo bien
    @PostMapping("/")
    public Bienes createBienes(@RequestBody Bienes bienes) {
        return bienesService.createBienes(bienes);
    }

    // PUT actualizar bien existente
    @PutMapping("/{id}")
    public Bienes updateBienes(@PathVariable("id") Long id, @RequestBody Bienes bienes) {
        return bienesService.updateBienes(id, bienes);
    }

    // DELETE bien por ID
    @DeleteMapping("/{id}")
    public void deleteBienes(@PathVariable("id") Long id) {
        bienesService.deleteBienes(id);
    }
}
