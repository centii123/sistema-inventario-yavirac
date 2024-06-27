package com.example.sistema.inventario.backend.FechaIngresoInstituto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("fecha-ingreso-instituto")
public class FechaIngresoInstitutoController {

    private final FechaIngresoInstitutoService fechaIngresoInstitutoService;

    @Autowired
    public FechaIngresoInstitutoController(FechaIngresoInstitutoService fechaIngresoInstitutoService) {
        this.fechaIngresoInstitutoService = fechaIngresoInstitutoService;
    }

    // GET todos los registros de fecha ingreso instituto
    @GetMapping("/")
    public List<FechaIngresoInstituto> getAllFechaIngresoInstituto() {
        return fechaIngresoInstitutoService.getAllFechaIngresoInstituto();
    }

    // GET registro de fecha ingreso instituto por ID
    @GetMapping("/{id}")
    public FechaIngresoInstituto getFechaIngresoInstitutoById(@PathVariable("id") Long id) {
        return fechaIngresoInstitutoService.getFechaIngresoInstitutoById(id);
    }

    // POST crear nuevo registro de fecha ingreso instituto
    @PostMapping("/")
    public FechaIngresoInstituto createFechaIngresoInstituto(@RequestBody FechaIngresoInstituto fechaIngresoInstituto) {
        return fechaIngresoInstitutoService.createFechaIngresoInstituto(fechaIngresoInstituto);
    }

    // PUT actualizar registro de fecha ingreso instituto existente
    @PutMapping("/{id}")
    public FechaIngresoInstituto updateFechaIngresoInstituto(@PathVariable("id") Long id, @RequestBody FechaIngresoInstituto fechaIngresoInstituto) {
        return fechaIngresoInstitutoService.updateFechaIngresoInstituto(id, fechaIngresoInstituto);
    }

    // DELETE registro de fecha ingreso instituto por ID
    @DeleteMapping("/{id}")
    public void deleteFechaIngresoInstituto(@PathVariable("id") Long id) {
        fechaIngresoInstitutoService.deleteFechaIngresoInstituto(id);
    }
}
