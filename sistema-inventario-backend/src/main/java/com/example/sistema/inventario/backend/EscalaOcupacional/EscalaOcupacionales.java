package com.example.sistema.inventario.backend.EscalaOcupacional;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class EscalaOcupacionales {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 50)
    private String niveljerarquicosuperiror2;

    @Column(length = 50)
    private String servidorpublico4;

}