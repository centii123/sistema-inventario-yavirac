package com.example.sistema.inventario.backend.RolesInstitucionales;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
// import java.util.Optional;

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
        return rolesRepository.findAllActive();
    }

    // Obtener rol institucional por ID
    public RolesInstitucionales getRolesInstitucionalesById(Long id) {
        return rolesRepository.findById(id).filter(r -> r.getDeletedAt() == null).orElse(null);
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

    // Eliminar rol institucional por ID (eliminación lógica)
    public void deleteRolesInstitucionales(Long id) {
        RolesInstitucionales rol = rolesRepository.findById(id).orElse(null);
        if (rol != null && rol.getDeletedAt() == null) {
            rol.setDeletedAt(LocalDateTime.now());
            rolesRepository.save(rol);
        }
    }
}
