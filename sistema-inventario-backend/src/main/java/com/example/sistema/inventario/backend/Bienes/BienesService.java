package com.example.sistema.inventario.backend.Bienes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

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
        return bienesRepository.findAllActive();
    }

    // Obtener bien por ID
    public Bienes getBienesById(Long id) {
        return bienesRepository.findById(id).filter(b -> b.getDeletedAt() == null).orElse(null);
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

    // Eliminar bien por ID (eliminación lógica)
    public void deleteBienes(Long id) {
        Bienes bien = bienesRepository.findById(id).orElse(null);
        if (bien != null && bien.getDeletedAt() == null) {
            bien.setDeletedAt(LocalDateTime.now());
            bienesRepository.save(bien);
        }
    }


    // Buscar bienes por ID de infraestructura
    public List<Bienes> findByInfraestructuraId(Long infraestructuraId) {
        return bienesRepository.findByInfraestructuraId(infraestructuraId);
    }
}
