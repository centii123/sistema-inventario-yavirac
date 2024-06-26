package com.example.sistema.inventario.backend.Institutos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Institutos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String nombre;

    @Column(length = 30)
    private String coordinacionZonal;

    @Column(length = 50)
    private String canton;

    @Column(length = 50)
    private String direccionInstituto;
    
    @Column(length = 50)
    private String regimenLaboral;
}
