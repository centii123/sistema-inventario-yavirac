package com.example.sistema.inventario.backend.EstadoCivil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class EstadoCivilService {
    @Autowired
    private final EstadoCivilRepository estadoCivilRepository;


    public EstadoCivilService(EstadoCivilRepository estadoCivilRepository) {
        this.estadoCivilRepository = estadoCivilRepository;
    }

    // Obtener todos los estados civiles
    public List<EstadoCivil> getAllEstadoCivil() {
        return estadoCivilRepository.findAll();
    }

    // Obtener estado civil por ID
    public EstadoCivil getEstadoCivilById(Long id) {
        Optional<EstadoCivil> estadoCivilOptional = estadoCivilRepository.findById(id);
        return estadoCivilOptional.orElse(null);
    }

    // Crear nuevo estado civil
    public EstadoCivil createEstadoCivil(EstadoCivil estadoCivil) {
        return estadoCivilRepository.save(estadoCivil);
    }

    // Actualizar estado civil existente
    public EstadoCivil updateEstadoCivil(Long id, EstadoCivil estadoCivil) {
        if (estadoCivilRepository.existsById(id)) {
            estadoCivil.setId(id);
            return estadoCivilRepository.save(estadoCivil);
        }
        return null;
    }

    // Eliminar estado civil por ID
    public void deleteEstadoCivil(Long id) {
        estadoCivilRepository.deleteById(id);
    }
}
