package com.example.sistema.inventario.backend.EscalaOcupacional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Optional;

@Service
public class EscalaOcupacionalesService {
    @Autowired
    EscalaOcupacionalesRepository repository;

    public ArrayList<EscalaOcupacionales> getAll() {
        return (ArrayList<EscalaOcupacionales>) repository.findAllActive();
    }

    public EscalaOcupacionales save(EscalaOcupacionales entity) {
        return repository.save(entity);
    }

    @Transactional
    public void deleteById(long id) {
        Optional<EscalaOcupacionales> optional = repository.findById(id);
        if (optional.isPresent()) {
            EscalaOcupacionales entity = optional.get();
            entity.setDeletedAt(LocalDateTime.now());
            repository.save(entity);
        }
    }

    public EscalaOcupacionales findById(Long id) {
        return repository.findById(id)
                         .filter(e -> e.getDeletedAt() == null)
                         .orElse(null);
    }
}
