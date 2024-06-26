package com.example.sistema.inventario.backend.enfermedadCatastrofica;

import java.util.List;
//import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("enfermedadCatastrofica")
@CrossOrigin({"*"})
public class EnfermedadCatastroficaController {

    @Autowired
    EnfermedadCatastroficaService service;

    @GetMapping("/")
    public List<EnfermedadCatastrofica> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}/")
    public EnfermedadCatastrofica findById(@PathVariable long id) {
        return service.findById(id);
    }

    @PostMapping("/")
    public EnfermedadCatastrofica save(@RequestBody EnfermedadCatastrofica entity) {
        return service.save(entity);
    }

    @PutMapping("/")
    public EnfermedadCatastrofica update(@RequestBody EnfermedadCatastrofica entity) {
        return service.save(entity);
    }
    
    @DeleteMapping("/{id}/")
    public void deleteById(@PathVariable long id) {
        service.deleteById(id);
    }
}
