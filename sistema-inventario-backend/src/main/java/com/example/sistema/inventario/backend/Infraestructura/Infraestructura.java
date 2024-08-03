package com.example.sistema.inventario.backend.Infraestructura;
 // Importación correcta
import java.util.List;

import com.example.sistema.inventario.backend.GlobalEntity;
import com.example.sistema.inventario.backend.Bienes.Bienes;
import com.example.sistema.inventario.backend.Persona.Persona;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class Infraestructura extends GlobalEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;  // Usar 'id' en lugar de 'Id' por convención

    @Column(length = 50)
    private String nombre;

    @Column(length = 100)
    private String descripcion;

    @Column(columnDefinition = "smallint")
    private Integer categoriaAula;

    @JsonIgnoreProperties("infraestructura")
    @OneToOne
    @JoinColumn( nullable = true) //error
    private Persona persona;

    @JsonIgnoreProperties("infraestructura")
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "infraestructura")
    private List<Bienes> bienes;
}
