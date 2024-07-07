package com.example.sistema.inventario.backend.EstudiosenCurso;

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

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("estudios-curso")
@Tag(name = "Controlador Estudios En Curso", description = "Tabla Estudios En Curso")
@CrossOrigin({ "*" })
public class EstudiosenCursosController {
    @Autowired
    EstudiosenCursoService service;

    @PreAuthorize("hasAuthority('estudios-curso-obtener')")
    @GetMapping("/")
    public List<EstudiosenCursos> getAll() {
        return service.getAll();
    }

    // @Operation(summary = "Obtiene una compania por su id, Requiere
    // compania-getOne")
    @PreAuthorize("hasAuthority('estudios-curso-obtener-id')")
    @GetMapping("/{id}/")
    public EstudiosenCursos findById(@PathVariable long id) {
        return service.findById(id);
    }

    // @Operation(summary = "Agrega una conpania, Requiere compania-save")
    @PreAuthorize("hasAuthority('estudios-curso-agregar')")
    @PostMapping("/")
    public EstudiosenCursos save(@RequestBody EstudiosenCursos entity) {
        return service.save(entity);
    }

    // @Operation(summary = "Actualizar campo completo de una compania, el id va en
    // la body, Requiere compania-put")
    @PreAuthorize("hasAuthority('estudios-curso-editar')")
    @PutMapping("/")
    public EstudiosenCursos update(@RequestBody EstudiosenCursos entity) {
        return service.save(entity);
    }

    // @Operation(summary = "Elimina una compania, el id va en la url, Requiere
    // compania-delete")
    @PreAuthorize("hasAuthority('estudios-curso-eliminar')")
    @DeleteMapping("/{id}/")
    public void deeteById(@PathVariable long id) {
        service.deleteById(id);
    }
}
