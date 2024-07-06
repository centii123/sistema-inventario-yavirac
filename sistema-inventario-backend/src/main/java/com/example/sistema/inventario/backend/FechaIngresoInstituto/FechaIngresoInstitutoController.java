package com.example.sistema.inventario.backend.FechaIngresoInstituto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;

@RestController
@RequestMapping("fecha-ingreso-instituto")
@Tag(name = "Controlador Fecha Ingreso Instituto", description = "Tabla Fecha Ingreso Instituto")
@CrossOrigin({"*"})
public class FechaIngresoInstitutoController {
    @Autowired
    private final FechaIngresoInstitutoService fechaIngresoInstitutoService;


    public FechaIngresoInstitutoController(FechaIngresoInstitutoService fechaIngresoInstitutoService) {
        this.fechaIngresoInstitutoService = fechaIngresoInstitutoService;
    }

    // GET todos los registros de fecha ingreso instituto
    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @GetMapping("/")
    public List<FechaIngresoInstituto> getAllFechaIngresoInstituto() {
        return fechaIngresoInstitutoService.getAllFechaIngresoInstituto();
    }

    // GET registro de fecha ingreso instituto por ID
    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @GetMapping("/{id}")
    public FechaIngresoInstituto getFechaIngresoInstitutoById(@PathVariable("id") Long id) {
        return fechaIngresoInstitutoService.getFechaIngresoInstitutoById(id);
    }

    // POST crear nuevo registro de fecha ingreso instituto
    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @PostMapping("/")
    public FechaIngresoInstituto createFechaIngresoInstituto(@RequestBody FechaIngresoInstituto fechaIngresoInstituto) {
        return fechaIngresoInstitutoService.createFechaIngresoInstituto(fechaIngresoInstituto);
    }

    // PUT actualizar registro de fecha ingreso instituto existente
    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @PutMapping("/{id}")
    public FechaIngresoInstituto updateFechaIngresoInstituto(@PathVariable("id") Long id, @RequestBody FechaIngresoInstituto fechaIngresoInstituto) {
        return fechaIngresoInstitutoService.updateFechaIngresoInstituto(id, fechaIngresoInstituto);
    }

    // DELETE registro de fecha ingreso instituto por ID
    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    //@PreAuthorize("hasAuthority('compania-getAll')")
    @DeleteMapping("/{id}")
    public void deleteFechaIngresoInstituto(@PathVariable("id") Long id) {
        fechaIngresoInstitutoService.deleteFechaIngresoInstituto(id);
    }
}
