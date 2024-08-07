package com.example.sistema.inventario.backend.EscalaOcupacional;

import com.example.sistema.inventario.backend.GlobalEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class EscalaOcupacionales extends GlobalEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 50)
    private String grupoOcupacional;

    @Column(columnDefinition = "smallint")
    private Integer grado;

    private Integer remuneracion;


}