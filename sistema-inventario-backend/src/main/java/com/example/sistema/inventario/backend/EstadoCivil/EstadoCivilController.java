package com.example.sistema.inventario.backend.EstadoCivil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.sistema.inventario.backend.aula.Aula;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;

@RestController
@RequestMapping("estado-civil")
@Tag(name = "Controlador Estado Civil", description = "Tabla Estado Civil")
@CrossOrigin({"*"})
public class EstadoCivilController {
    @Autowired
    private final EstadoCivilService estadoCivilService;


    public EstadoCivilController(EstadoCivilService estadoCivilService) {
        this.estadoCivilService = estadoCivilService;
    }

    // GET todos los estados civiles
    @Operation(summary = "Obtiene todas los Estados Civiles, Requiere estado-civil-obtener")
    @PreAuthorize("hasAuthority('estado-civil-obtener')")
    @GetMapping("/")
    public List<EstadoCivil> getAllEstadoCivil() {
        return estadoCivilService.getAllEstadoCivil();
    }

    // GET estado civil por ID
    @Operation(summary = "Obtiene un Estado Civil, Requiere estado-civil-obtener-id")
    @PreAuthorize("hasAuthority('estado-civil-obtener-id')")
    @GetMapping("/{id}/")
    public EstadoCivil getEstadoCivilById(@PathVariable("id") Long id) {
        return estadoCivilService.getEstadoCivilById(id);
    }

    // POST crear nuevo estado civil
    @Operation(summary = "Agrega un Estado Civil, Requiere estado-civil-agregar")
    @PreAuthorize("hasAuthority('estado-civil-agregar')")
    @PostMapping("/")
    public EstadoCivil createEstadoCivil(@RequestBody EstadoCivil estadoCivil) {
        return estadoCivilService.createEstadoCivil(estadoCivil);
    }

    // PUT actualizar estado civil existente
    @Operation(summary = "Edita un Estado Civil, Requiere estado-civil-editar")
    @PreAuthorize("hasAuthority('estado-civil-editar')")
    @PutMapping("/")
    public EstadoCivil update(@RequestBody EstadoCivil entity){
        return estadoCivilService.createEstadoCivil(entity);
    }

    // DELETE estado civil por ID
    @Operation(summary = "Elimina un Estado Civil, Requiere estado-civil-eliminar")
    @PreAuthorize("hasAuthority('estado-civil-eliminar')")
    @DeleteMapping("/{id}/")
    public void deleteEstadoCivil(@PathVariable("id") Long id) {
        estadoCivilService.deleteEstadoCivil(id);
    }
}
