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

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("estudios-curso")
@Tag(name = "Controlador Estudios En Curso", description = "Tabla Estudios En Curso")
@CrossOrigin({ "*" })
public class EstudiosenCursosController {
    @Autowired
    EstudiosenCursoService service;

    @Operation(summary = "Obtiene todas los Estudios en Curso, Requiere estudios-curso-obtener")
    @PreAuthorize("hasAuthority('estudios-curso-obtener')")
    @GetMapping("/")
    public List<EstudiosenCursos> getAll() {
        return service.getAll();
    }

    @Operation(summary = "Obtiene un Estudio en Curso, Requiere estudios-curso-obtener-id")
    @PreAuthorize("hasAuthority('estudios-curso-obtener-id')")
    @GetMapping("/{id}/")
    public EstudiosenCursos findById(@PathVariable long id) {
        return service.findById(id);
    }

    @Operation(summary = "Agrega un Estudio en Curso, Requiere estudios-curso-agregar")
    @PreAuthorize("hasAuthority('estudios-curso-agregar')")
    @PostMapping("/")
    public EstudiosenCursos save(@RequestBody EstudiosenCursos entity) {
        return service.save(entity);
    }

    @Operation(summary = "Edita un Estudio en Curso, Requiere estudios-curso-editar")
    @PreAuthorize("hasAuthority('estudios-curso-editar')")
    @PutMapping("/")
    public EstudiosenCursos update(@RequestBody EstudiosenCursos entity) {
        return service.save(entity);
    }

    @Operation(summary = "Elimina un Estudio en Curso, Requiere estudios-curso-eliminar")
    @PreAuthorize("hasAuthority('estudios-curso-eliminar')")
    @DeleteMapping("/{id}/")
    public void deeteById(@PathVariable long id) {
        service.deleteById(id);
    }
}
