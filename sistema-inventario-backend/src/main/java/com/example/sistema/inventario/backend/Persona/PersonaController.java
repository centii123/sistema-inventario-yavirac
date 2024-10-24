package com.example.sistema.inventario.backend.Persona;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("persona")
@Tag(name = "Controlador Persona", description = "Tabla Persona")
@CrossOrigin({ "*" })
public class PersonaController {

    @Autowired
    private PersonaService service;

    @Operation(summary = "Obtiene todas las personas, Requiere persona-obtener")
    @PreAuthorize("hasAuthority('persona-obtener')")
    @GetMapping("/")
    public List<Persona> getAll() {
        return service.getAll();
    }

    @Operation(summary = "Obtiene una persona por id, Requiere persona-obtener-id")
    @PreAuthorize("hasAuthority('persona-obtener-id')")
    @GetMapping("/{id}/")
    public Persona findById(@PathVariable long id) {
        return service.findById(id);
    }

    @Operation(summary = "Obtiene una persona por dni, Requiere persona-obtener-dni")
    @PreAuthorize("hasAuthority('persona-obtener-dni')")
    @GetMapping("/dni/{dni}/")
    public Persona findByDni(@PathVariable String dni) {
        return service.findByDni(dni);
    }

    @Operation(summary = "Agrega una persona, Requiere persona-agregar")
    @PreAuthorize("hasAuthority('persona-agregar')")
    @PostMapping("/")
    public Persona save(@RequestParam("persona") String personaJson,
            @RequestParam(value = "image", required = false) MultipartFile image) {
        try {
            Persona persona = convertJsonToPersona(personaJson);
            return service.save(persona, image);
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    @Operation(summary = "Edita una persona, Requiere persona-editar")
    @PreAuthorize("hasAuthority('persona-editar')")
    @PutMapping("/")
    public Persona update(@RequestParam("persona") String personaJson,
            @RequestParam(value = "image", required = false) MultipartFile image) {
        try {
            Persona persona = convertJsonToPersona(personaJson);
            return service.save(persona, image);
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    @Operation(summary = "Elimina una persona, Requiere persona-eliminar")
    @PreAuthorize("hasAuthority('persona-eliminar')")
    @DeleteMapping("/{id}/")
    public void deleteById(@PathVariable long id) {
        service.deleteById(id);
    }

    private Persona convertJsonToPersona(String personaJson) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.readValue(personaJson, Persona.class);
    }

 
}
