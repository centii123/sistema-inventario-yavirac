package com.example.sistema.inventario.backend.RolesInstitucionales;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class RolesInstitucionalesService {
    @Autowired
    private final RolesInstitucionalesRepository rolesRepository;

    public RolesInstitucionalesService(RolesInstitucionalesRepository rolesRepository) {
        this.rolesRepository = rolesRepository;
    }

    // Obtener todos los roles institucionales
    public List<RolesInstitucionales> getAllRolesInstitucionales() {
        return rolesRepository.findAll();
    }

    // Obtener rol institucional por ID
    public RolesInstitucionales getRolesInstitucionalesById(Long id) {
        Optional<RolesInstitucionales> optional = rolesRepository.findById(id);
        return optional.orElse(null);
    }

    // Crear nuevo rol institucional
    public RolesInstitucionales createRolesInstitucionales(RolesInstitucionales rolesInstitucionales) {
        return rolesRepository.save(rolesInstitucionales);
    }

    // Actualizar rol institucional existente
    public RolesInstitucionales updateRolesInstitucionales(Long id, RolesInstitucionales rolesInstitucionales) {
        if (rolesRepository.existsById(id)) {
            rolesInstitucionales.setId(id);
            return rolesRepository.save(rolesInstitucionales);
        }
        return null;
    }

    // Eliminar rol institucional por ID
    public void deleteRolesInstitucionales(Long id) {
        rolesRepository.deleteById(id);
    }
}
