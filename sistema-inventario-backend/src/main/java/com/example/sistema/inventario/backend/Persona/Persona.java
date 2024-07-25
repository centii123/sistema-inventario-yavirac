package com.example.sistema.inventario.backend.Persona;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.example.sistema.inventario.backend.GlobalEntity;
import com.example.sistema.inventario.backend.Carreras.Carreras;
import com.example.sistema.inventario.backend.EscalaOcupacional.EscalaOcupacionales;
import com.example.sistema.inventario.backend.EstadoCivil.EstadoCivil;
import com.example.sistema.inventario.backend.EstudiosenCurso.EstudiosenCursos;
import com.example.sistema.inventario.backend.FechaIngresoInstituto.FechaIngresoInstituto;
import com.example.sistema.inventario.backend.Genero.Generos;
import com.example.sistema.inventario.backend.Institutos.Institutos;
import com.example.sistema.inventario.backend.Provincias.Provincias;
import com.example.sistema.inventario.backend.RolesInstitucionales.RolesInstitucionales;
import com.example.sistema.inventario.backend.aula.Aula;
import com.example.sistema.inventario.backend.authz.entity.User;
import com.example.sistema.inventario.backend.discapacidad.Discapacidad;
import com.example.sistema.inventario.backend.enfermedadCatastrofica.EnfermedadCatastrofica;
import com.example.sistema.inventario.backend.entidadPublica.EntidadPublica;
import com.example.sistema.inventario.backend.nacionalidad.Nacionalidad;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class Persona extends GlobalEntity{
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

    @JsonIgnoreProperties("persona")
    @OneToOne
    @JoinColumn(updatable = false, nullable = false)
    private Discapacidad discapacidad;

    @JsonIgnoreProperties("persona")
    @OneToOne
    @JoinColumn(updatable = false, nullable = false)
    private EnfermedadCatastrofica enfermedadCatastrofica;

    @JsonIgnoreProperties("persona")
    @OneToOne
    @JoinColumn(updatable = false, nullable = false)
    private EntidadPublica entidadPublica;

    @JsonIgnoreProperties("persona")
    @OneToOne
    @JoinColumn( updatable = false, nullable = false)
    private FechaIngresoInstituto fechaIngresoInstituto;

    @ManyToOne
    private EscalaOcupacionales escalaOcupacionales;

    @ManyToOne
    private EstadoCivil estadoCivil;

    @ManyToOne
    private EstudiosenCursos estudiosenCursos;

    @ManyToOne
    private Generos genero;

    @ManyToOne
    private Institutos institutos;

    @ManyToOne
    private Nacionalidad nacionalidad;

    @ManyToOne
    private Carreras carreras;

    @ManyToOne
    private Provincias provincia;

    @ManyToOne
    private RolesInstitucionales rolesInstitucionales;

    @JsonIgnoreProperties("persona")
    @OneToOne(mappedBy = "persona", cascade = CascadeType.ALL)
    private Aula aula;

    @JsonIgnoreProperties("persona")
    @OneToOne
    @JoinColumn( updatable = false, nullable = false)
    private User user;
}
