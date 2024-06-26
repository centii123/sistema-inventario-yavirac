package com.example.sistema.inventario.backend.Persona;

import java.util.Date;

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
public class Persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 50)
    private String nombres;

    @Column(length = 50)
    private String apellidos;

    @Column(length = 50)
    private String etnia;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(iso = ISO.DATE_TIME)
    private Date fechaDeNacimiento;

    @Column(length = 10)
    private String dni;

    @Column(length = 12)
    private String telefono;

    @Column(length = 12)
    private String telefonoDomicilio;

    @Column(length = 50)
    private String correoPersonal;

    @Column(length = 50)
    private String tipoDeSangre;

    @Column(length = 100)
    private String direccionDomiciliaria;

    @Column(length = 50)
    private String modalidadLaboral;

    @Column(columnDefinition = "smallint")
    private Integer modalidadJornada;

    @Column(length = 25)
    private String horarioTrabajo;

    private String materiasImparte;

    private Integer rmu;
}
