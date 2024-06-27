package com.example.sistema.inventario.backend.aula;

import java.util.Date;  // Importación correcta

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Data
@Entity
public class Aula {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;  // Usar 'id' en lugar de 'Id' por convención

    @Column(length = 50)
    private String nombre;

    @Column(length = 100)
    private String descripcion;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(iso = ISO.DATE_TIME)
    private Date obtencionTitulo;  // Uso de java.util.Date

    @Column(length = 50)
    private String instruccionFormal;

    @Column(length = 50)
    private String registroSenesyt;

    @Column(length = 50)
    private String custodio;
}
