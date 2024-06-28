package com.example.sistema.inventario.backend.DetallesDelBien;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("detalles-del-bien")
public class DetallesDelBienController {
    @Autowired
    private final DetallesDelBienService detallesDelBienService;

    
    public DetallesDelBienController(DetallesDelBienService detallesDelBienService) {
        this.detallesDelBienService = detallesDelBienService;
    }

    // GET todos los detalles del bien
    @GetMapping("/")
    public List<DetallesDelBien> getAllDetallesDelBien() {
        return detallesDelBienService.getAllDetallesDelBien();
    }

    // GET detalles del bien por ID
    @GetMapping("/{id}")
    public DetallesDelBien getDetallesDelBienById(@PathVariable("id") Long id) {
        return detallesDelBienService.getDetallesDelBienById(id);
    }

    // POST crear nuevos detalles del bien
    @PostMapping("/")
    public DetallesDelBien createDetallesDelBien(@RequestBody DetallesDelBien detallesDelBien) {
        return detallesDelBienService.createDetallesDelBien(detallesDelBien);
    }

    // PUT actualizar detalles del bien existente
    @PutMapping("/{id}")
    public DetallesDelBien updateDetallesDelBien(@PathVariable("id") Long id, @RequestBody DetallesDelBien detallesDelBien) {
        return detallesDelBienService.updateDetallesDelBien(id, detallesDelBien);
    }

    // DELETE detalles del bien por ID
    @DeleteMapping("/{id}")
    public void deleteDetallesDelBien(@PathVariable("id") Long id) {
        detallesDelBienService.deleteDetallesDelBien(id);
    }
}
