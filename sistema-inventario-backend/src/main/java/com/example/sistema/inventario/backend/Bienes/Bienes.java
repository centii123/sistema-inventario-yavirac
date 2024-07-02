package com.example.sistema.inventario.backend.Bienes;

import java.math.BigDecimal;

import com.example.sistema.inventario.backend.CategoriasBienes.CategoriasBienes;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
public class Bienes {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 50)
    private String nombre;

    @Column(length = 50)
    private String codigoDelBien;

    @Column(length = 50)
    private String marca;

    @Column(length = 50)
    private String modelo;

    private Integer custodio;
    
    @Column(length = 255)
    private String descripcion;

    private Boolean estado;

    @Column(length = 255)
    private String observaciones;

    private BigDecimal valor;

    private BigDecimal valorIva;

    @Column(length = 100)
    private String serie;

    @ManyToOne
    private CategoriasBienes categoriaBien;

}
