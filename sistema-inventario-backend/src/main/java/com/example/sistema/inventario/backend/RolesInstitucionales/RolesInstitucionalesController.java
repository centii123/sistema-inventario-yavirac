package com.example.sistema.inventario.backend.RolesInstitucionales;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;

@RestController
@RequestMapping("roles-institucionales")
@Tag(name = "Controlador Roles Institucionales", description = "Tabla Roles Institucionales")
@CrossOrigin({"*"})
public class RolesInstitucionalesController {
    @Autowired
    private final RolesInstitucionalesService rolesService;


    public RolesInstitucionalesController(RolesInstitucionalesService rolesService) {
        this.rolesService = rolesService;
    }

    // GET todos los roles institucionales
    @Operation(summary = "Obtiene todas los roles-institucionales, Requiere roles-institucionales-obtener")
    @PreAuthorize("hasAuthority('roles-institucionales-obtener')")
    @GetMapping("/")
    public List<RolesInstitucionales> getAllRolesInstitucionales() {
        return rolesService.getAllRolesInstitucionales();
    }

    // GET rol institucional por ID
    @Operation(summary = "Obtiene un rol-institucional, Requiere roles-institucionales-obtener-id")
    @PreAuthorize("hasAuthority('roles-institucionales-obtener-id')")
    @GetMapping("/{id}")
    public RolesInstitucionales getRolesInstitucionalesById(@PathVariable("id") Long id) {
        return rolesService.getRolesInstitucionalesById(id);
    }

    // POST crear nuevo rol institucional
    @Operation(summary = "Agrega un rol-institucional, Requiere roles-institucionales-agregar")
    @PreAuthorize("hasAuthority('roles-institucionales-agregar')")
    @PostMapping("/")
    public RolesInstitucionales createRolesInstitucionales(@RequestBody RolesInstitucionales rolesInstitucionales) {
        return rolesService.createRolesInstitucionales(rolesInstitucionales);
    }

    // PUT actualizar rol institucional existente
    @Operation(summary = "Edita un rol-institucional, Requiere roles-institucionales-editar")
    @PreAuthorize("hasAuthority('roles-institucionales-editar')")
    @PutMapping("/{id}")
    public RolesInstitucionales updateRolesInstitucionales(@PathVariable("id") Long id, @RequestBody RolesInstitucionales rolesInstitucionales) {
        return rolesService.updateRolesInstitucionales(id, rolesInstitucionales);
    }

    // DELETE rol institucional por ID
    @Operation(summary = "Elimina un rol-institucional, Requiere roles-institucionales-eliminar")
    @PreAuthorize("hasAuthority('roles-institucionales-eliminar')")
    @DeleteMapping("/{id}")
    public void deleteRolesInstitucionales(@PathVariable("id") Long id) {
        rolesService.deleteRolesInstitucionales(id);
    }
}
