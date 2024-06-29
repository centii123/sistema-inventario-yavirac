package com.example.sistema.inventario.backend.DetallesDelBien;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Entity;
import java.math.BigDecimal;

import com.example.sistema.inventario.backend.Bienes.Bienes;

import lombok.Data;

@Data
@Entity

public class DetallesDelBien {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private BigDecimal valor;

    private BigDecimal valorIva;

    @Column(length = 100)
    private String serie;

    @ManyToOne
    private Bienes bienes;
}
