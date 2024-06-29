package com.example.sistema.inventario.backend.EscalaOcupacional;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EscalaOcupacionalesService {
    @Autowired
    EscalaOcupacionalesRepository repository;

    public ArrayList<EscalaOcupacionales> getAll() {
        return (ArrayList<EscalaOcupacionales>) this.repository.findAll();
    }

    public EscalaOcupacionales save(EscalaOcupacionales entity) {
        return repository.save(entity);
    }

    public void deeteById(long id) {
        repository.deleteById(id);
    }

    public EscalaOcupacionales findById(Long id) {
        return repository.findById(id).orElse(null);
    }
}
