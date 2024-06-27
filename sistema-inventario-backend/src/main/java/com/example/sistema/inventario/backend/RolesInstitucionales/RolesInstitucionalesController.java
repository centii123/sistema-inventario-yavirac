package com.example.sistema.inventario.backend.RolesInstitucionales;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("roles-institucionales")
public class RolesInstitucionalesController {

    private final RolesInstitucionalesService rolesService;

    @Autowired
    public RolesInstitucionalesController(RolesInstitucionalesService rolesService) {
        this.rolesService = rolesService;
    }

    // GET todos los roles institucionales
    @GetMapping("/")
    public List<RolesInstitucionales> getAllRolesInstitucionales() {
        return rolesService.getAllRolesInstitucionales();
    }

    // GET rol institucional por ID
    @GetMapping("/{id}")
    public RolesInstitucionales getRolesInstitucionalesById(@PathVariable("id") Long id) {
        return rolesService.getRolesInstitucionalesById(id);
    }

    // POST crear nuevo rol institucional
    @PostMapping("/")
    public RolesInstitucionales createRolesInstitucionales(@RequestBody RolesInstitucionales rolesInstitucionales) {
        return rolesService.createRolesInstitucionales(rolesInstitucionales);
    }

    // PUT actualizar rol institucional existente
    @PutMapping("/{id}")
    public RolesInstitucionales updateRolesInstitucionales(@PathVariable("id") Long id, @RequestBody RolesInstitucionales rolesInstitucionales) {
        return rolesService.updateRolesInstitucionales(id, rolesInstitucionales);
    }

    // DELETE rol institucional por ID
    @DeleteMapping("/{id}")
    public void deleteRolesInstitucionales(@PathVariable("id") Long id) {
        rolesService.deleteRolesInstitucionales(id);
    }
}
