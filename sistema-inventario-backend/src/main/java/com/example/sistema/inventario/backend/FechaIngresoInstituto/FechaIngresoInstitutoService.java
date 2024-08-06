package com.example.sistema.inventario.backend.FechaIngresoInstituto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
// import java.util.Optional;

@Service
@Transactional
public class FechaIngresoInstitutoService {
    @Autowired
    private final FechaIngresoInstitutoRepository fechaIngresoInstitutoRepository;

    public FechaIngresoInstitutoService(FechaIngresoInstitutoRepository fechaIngresoInstitutoRepository) {
        this.fechaIngresoInstitutoRepository = fechaIngresoInstitutoRepository;
    }

    // Obtener todos los registros de fecha ingreso instituto
    public List<FechaIngresoInstituto> getAllFechaIngresoInstituto() {
        return fechaIngresoInstitutoRepository.findAllActive();
    }

    // Obtener registro de fecha ingreso instituto por ID
    public FechaIngresoInstituto getFechaIngresoInstitutoById(Long id) {
        return fechaIngresoInstitutoRepository.findById(id)
                .filter(f -> f.getDeletedAt() == null)
                .orElse(null);
    }

    // Crear nuevo registro de fecha ingreso instituto
    public FechaIngresoInstituto createFechaIngresoInstituto(FechaIngresoInstituto fechaIngresoInstituto) {
        return fechaIngresoInstitutoRepository.save(fechaIngresoInstituto);
    }

    // Actualizar registro de fecha ingreso instituto existente
    public FechaIngresoInstituto updateFechaIngresoInstituto(Long id, FechaIngresoInstituto fechaIngresoInstituto) {
        if (fechaIngresoInstitutoRepository.existsById(id)) {
            fechaIngresoInstituto.setId(id);
            return fechaIngresoInstitutoRepository.save(fechaIngresoInstituto);
        }
        return null;
    }

    // Eliminar registro de fecha ingreso instituto por ID (eliminación lógica)
    public void deleteFechaIngresoInstituto(Long id) {
        FechaIngresoInstituto fechaIngreso = fechaIngresoInstitutoRepository.findById(id).orElse(null);
        if (fechaIngreso != null) {
            fechaIngreso.setDeletedAt(LocalDateTime.now());
            fechaIngresoInstitutoRepository.save(fechaIngreso);
        }
    }
}
