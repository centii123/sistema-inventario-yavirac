package com.example.sistema.inventario.backend.nacionalidad;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;

@RestController
@RequestMapping("nacionalidad")
@Tag(name = "Controlador Nacionalidad", description = "Tabla Nacionalidad")
@CrossOrigin("*")
public class NacionalidadController {

    @Autowired
    private NacionalidadService service;

    @Operation(summary = "Obtiene todas las nacionalidades, Requiere nacionalidad-obtener")
    @PreAuthorize("hasAuthority('nacionalidad-obtener')")
    @GetMapping("/")
    public List<Nacionalidad> getAll() {
        return service.getAll();
    }

    @Operation(summary = "Obtiene una nacionalidad, Requiere nacionalidad-obtener-id")
    @PreAuthorize("hasAuthority('nacionalidad-obtener-id')")
    @GetMapping("/{id}/")
    public Nacionalidad findById(@PathVariable long id) {
        return service.findById(id);
    }

    @Operation(summary = "Agrega una nacionalidad, Requiere nacionalidad-agregar")
    @PreAuthorize("hasAuthority('nacionalidad-agregar')")
    @PostMapping("/")
    public Nacionalidad save(@RequestBody Nacionalidad nacionalidad) {
        return service.save(nacionalidad);
    }

    @Operation(summary = "Edita una nacionalidad, Requiere nacionalidad-editar")
    @PreAuthorize("hasAuthority('nacionalidad-editar')")
    @PutMapping("/")
    public Nacionalidad update(@RequestBody Nacionalidad nacionalidad) {
        return service.save(nacionalidad);
    }

    @Operation(summary = "Elimina una nacionalidad, Requiere nacionalidad-eliminar")
    @PreAuthorize("hasAuthority('nacionalidad-eliminar')")
    @DeleteMapping("/{id}/")
    public void deleteById(@PathVariable long id) {
        service.deleteById(id);
    }

    @Operation(summary = "Importa nacionalidades desde un archivo Excel, Requiere nacionalidad-importar")
    @PreAuthorize("hasAuthority('nacionalidad-importar')")
    @PostMapping("/import")
    public ResponseEntity<String> importNacionalidades(@RequestBody List<Nacionalidad> nacionalidades) {
        try {
            service.saveAll(nacionalidades);
            return ResponseEntity.ok("Datos importados exitosamente");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al importar datos");
        }
    }
}
