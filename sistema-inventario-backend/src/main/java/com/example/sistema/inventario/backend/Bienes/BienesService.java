package com.example.sistema.inventario.backend.Bienes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class BienesService {
    @Autowired
    private final BienesRepository bienesRepository;


    public BienesService(BienesRepository bienesRepository) {
        this.bienesRepository = bienesRepository;
    }

    // Obtener todos los bienes
    public List<Bienes> getAllBienes() {
        return bienesRepository.findAll();
    }

    // Obtener bien por ID
    public Bienes getBienesById(Long id) {
        Optional<Bienes> bienesOptional = bienesRepository.findById(id);
        return bienesOptional.orElse(null);
    }

    // Crear nuevo bien
    public Bienes createBienes(Bienes bienes) {
        return bienesRepository.save(bienes);
    }

    // Actualizar bien existente
    public Bienes updateBienes(Long id, Bienes bienes) {
        if (bienesRepository.existsById(id)) {
            bienes.setId(id);
            return bienesRepository.save(bienes);
        }
        return null;
    }

    // Eliminar bien por ID
    public void deleteBienes(Long id) {
        bienesRepository.deleteById(id);
    }
}
