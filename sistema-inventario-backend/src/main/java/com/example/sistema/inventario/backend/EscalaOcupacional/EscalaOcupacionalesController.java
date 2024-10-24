package com.example.sistema.inventario.backend.EscalaOcupacional;

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
@RequestMapping("escala-ocupacional")
@Tag(name = "Controlador Escala Ocupacional", description = "Tabla Escala Ocupacional")
@CrossOrigin({ "*" })
public class EscalaOcupacionalesController {

    @Autowired
    EscalaOcupacionalesService service;

    @Operation(summary = "Obtiene todas las Escalas Ocupacionales, Requiere escala-ocupacional-obtener")
    @PreAuthorize("hasAuthority('escala-ocupacional-obtener')")
    @GetMapping("/")
    public List<EscalaOcupacionales> getAll() {
        return service.getAll();
    }

    @Operation(summary = "Obtiene una Escala Ocupacional, Requiere escala-ocupacional-obtener-id")
    @PreAuthorize("hasAuthority('escala-ocupacional-obtener-id')")
    @GetMapping("/{id}/")
    public EscalaOcupacionales findById(@PathVariable long id) {
        return service.findById(id);
    }

    @Operation(summary = "Agrega una Escala Ocupacional, Requiere escala-ocupacional-agregar")
    @PreAuthorize("hasAuthority('escala-ocupacional-agregar')")
    @PostMapping("/")
    public EscalaOcupacionales save(@RequestBody EscalaOcupacionales enntity) {
        return service.save(enntity);
    }

    @Operation(summary = "Edita una Escala Ocupacional, Requiere escala-ocupacional-editar")
    @PreAuthorize("hasAuthority('escala-ocupacional-editar')")
    @PutMapping("/")
    public EscalaOcupacionales update(@RequestBody EscalaOcupacionales entity) {
        return service.save(entity);
    }

    @Operation(summary = "Elimina una Escala Ocupacional, Requiere escala-ocupacional-eliminar")
    @PreAuthorize("hasAuthority('escala-ocupacional-eliminar')")
    @DeleteMapping("/{id}/")
    public void deleteById(@PathVariable long id) {
        service.deleteById(id);
    }

}