package com.example.sistema.inventario.backend.CategoriasAulas;

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
@RequestMapping("categorias-aulas")
@Tag(name = "Controlador Categorias Aulas", description = "Tabla Categorias Aulas")
@CrossOrigin({"*"})
public class CategoriasAulasController {
    @Autowired
    CategoriasAulasService service;

    @Operation(summary = "Obtiene todas las categorias de aulas, Requiere categorias-aulas-obtener")
    @PreAuthorize("hasAuthority('categorias-aulas-obtener')")
    @GetMapping("/")
    public List<CategoriasAulas> getAll(){
        return service.getAll();
    }

    @Operation(summary = "Obtiene una categoria de aula, Requiere categorias-aulas-obtener-id")
    @PreAuthorize("hasAuthority('categorias-aulas-obtener-id')")
    @GetMapping("/{id}/")
    public CategoriasAulas findById(@PathVariable long id){
        return service.findById(id);
    }

    @Operation(summary = "Agrega una categoria de aula, Requiere categorias-aulas-agregar")
    @PreAuthorize("hasAuthority('categorias-aulas-agregar')")
    @PostMapping("/")
    public CategoriasAulas save (@RequestBody CategoriasAulas entity){
        return service.save(entity);
    }

    @Operation(summary = "Edita una categoria de aula, Requiere categorias-aulas-editar")
    @PreAuthorize("hasAuthority('categorias-aulas-editar')")
    @PutMapping("/")
    public CategoriasAulas update (@RequestBody CategoriasAulas entity){
        return service.save(entity);
    }

    @Operation(summary = "Elimina una categoria de aula, Requiere categorias-aulas-eliminar")
    @PreAuthorize("hasAuthority('categorias-aulas-eliminar')")
    @DeleteMapping("/{id}/")
    public void deeteById(@PathVariable long id){
        service.deleteById(id);
    }
}
