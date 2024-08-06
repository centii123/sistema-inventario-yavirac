package com.example.sistema.inventario.backend.Bienes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;

@RestController
@RequestMapping("/bienes")
@Tag(name = "Controlador Bienes", description = "Tabla bienes")
@CrossOrigin({"*"})
public class BienesController {

    @Autowired
    private final BienesService bienesService;

    public BienesController(BienesService bienesService) {
        this.bienesService = bienesService;
    }

    // GET todos los bienes
    @Operation(summary = "Obtiene todas los bienes, Requiere bienes-obtener")
    @PreAuthorize("hasAuthority('bienes-obtener')")
    @GetMapping("/")
    public List<Bienes> getAllBienes() {
        return bienesService.getAllBienes();
    }

    // GET bien por ID
    @Operation(summary = "Obtiene una aula, Requiere bienes-obtener-id")
    @PreAuthorize("hasAuthority('bienes-obtener-id')")
    @GetMapping("/{id}")
    public Bienes getBienesById(@PathVariable("id") Long id) {
        return bienesService.getBienesById(id);
    }

    // GET bienes por nombre
    @Operation(summary = "Obtiene una bien por el nombre, Requiere bienes-obtener-nombre")
    @PreAuthorize("hasAuthority('bienes-obtener-nombre')")
    @GetMapping("/nombre/{nombre}")
    public List<Bienes> findByNombre(@PathVariable("nombre") String nombre) {
        return bienesService.findByNombre(nombre);
    }

    // GET bienes por ID de infraestructura
    @Operation(summary = "Obtiene bienes por ID de infraestructura, Requiere bienes-obtener-infraestructura")
    @PreAuthorize("hasAuthority('bienes-obtener-infraestructura')")
    @GetMapping("/infraestructura/{infraestructuraId}")
    public List<Bienes> findByInfraestructuraId(@PathVariable("infraestructuraId") Long infraestructuraId) {
        return bienesService.findByInfraestructuraId(infraestructuraId);
    }

    // POST crear nuevo bien
    @Operation(summary = "Agrega un bien, Requiere bienes-agregar")
    @PreAuthorize("hasAuthority('bienes-agregar')")
    @PostMapping("/")
    public Bienes createBienes(@RequestBody Bienes bienes) {
        return bienesService.createBienes(bienes);
    }

    // PUT actualizar bien existente
    @Operation(summary = "Edita un bien, Requiere aula-editar")
    @PreAuthorize("hasAuthority('bienes-editar')")
    @PutMapping("/")
    public Bienes update(@RequestBody Bienes entity){
        return bienesService.updateBienes(entity.getId(), entity);
    }

    // DELETE bien por ID
    @Operation(summary = "Elimina un bien, Requiere bienes-eliminar")
    @PreAuthorize("hasAuthority('bienes-eliminar')")
    @DeleteMapping("/{id}/")
    public void deleteBienes(@PathVariable("id") Long id) {
        bienesService.deleteBienes(id);
    }
}
