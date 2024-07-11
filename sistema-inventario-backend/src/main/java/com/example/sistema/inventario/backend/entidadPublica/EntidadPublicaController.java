package com.example.sistema.inventario.backend.entidadPublica;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/entidadPublica") // Agregar "/" al inicio del mapeo
@Tag(name = "Controlador Entidad Publica", description = "Tabla Entidad Publica")
@CrossOrigin({"*"})
public class EntidadPublicaController {

    @Autowired
    private EntidadPublicaService service; // Inyectar el servicio en lugar de la entidad

    @Operation(summary = "Obtiene todas las Entidades Publicas, Requiere entidad-publica-obtener'")
    @PreAuthorize("hasAuthority('entidad-publica-obtener')")
    @GetMapping("/")
    public List<EntidadPublica> getAll(){
        return service.getAll();
    }

    @Operation(summary = "Obtiene una Entidad Publica, Requiere entidad-publica-obtener-id")
    @PreAuthorize("hasAuthority('entidad-publica-obtener-id')")
    @GetMapping("/{id}/")
    public EntidadPublica findById(@PathVariable long id){
        return service.findById(id);
    }

    @Operation(summary = "Agrega una Entidad Publica, Requiere entidad-publica-agregar")
    @PreAuthorize("hasAuthority('entidad-publica-agregar')")
    @PostMapping("/")
    public EntidadPublica save(@RequestBody EntidadPublica entity){
        return service.save(entity);
    }

    @Operation(summary = "Edita una Entidad Publica, Requiere entidad-publica-editar")
    @PreAuthorize("hasAuthority('entidad-publica-editar')")
    @PutMapping("/")
    public EntidadPublica update(@RequestBody EntidadPublica entity){
        return service.save(entity);
    }

    @Operation(summary = "Elimina una Entidad Publica, Requiere entidad-publica-eliminar")
    @PreAuthorize("hasAuthority('entidad-publica-eliminar')")
    @DeleteMapping("/{id}/")
    public void deleteById(@PathVariable long id){
        service.deleteById(id);
    }
}
