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

import io.swagger.v3.oas.annotations.tags.Tag;


@RestController
@RequestMapping("categorias-aulas")
@Tag(name = "Controlador Categorias Aulas", description = "Tabla Categorias Aulas")
@CrossOrigin({"*"})
public class CategoriasAulasController {
    @Autowired
    CategoriasAulasService service;

    //@Operation(summary = "Obtiene todas los compania, Requiere compania-getAll")
    @PreAuthorize("hasAuthority('categorias-aulas-obtener')")
    @GetMapping("/")
    public List<CategoriasAulas> getAll(){
        return service.getAll();
    }

    //@Operation(summary = "Obtiene una compania por su id, Requiere compania-getOne")
    @PreAuthorize("hasAuthority('categorias-aulas-obtener-id')")
    @GetMapping("/{id}/")
    public CategoriasAulas findById(@PathVariable long id){
        return service.findById(id);
    }

    //@Operation(summary = "Agrega una conpania, Requiere compania-save")
    @PreAuthorize("hasAuthority('categorias-aulas-agregar')")
    @PostMapping("/")
    public CategoriasAulas save (@RequestBody CategoriasAulas entity){
        return service.save(entity);
    }

    //@Operation(summary = "Actualizar campo completo de una compania, el id va en la body, Requiere compania-put")
    @PreAuthorize("hasAuthority('categorias-aulas-editar')")
    @PutMapping("/")
    public CategoriasAulas update (@RequestBody CategoriasAulas entity){
        return service.save(entity);
    }

    //@Operation(summary = "Elimina una compania, el id va en la url, Requiere compania-delete")
    @PreAuthorize("hasAuthority('categorias-aulas-eliminar')")
    @DeleteMapping("/{id}/")
    public void deeteById(@PathVariable long id){
        service.deleteById(id);
    }
}
