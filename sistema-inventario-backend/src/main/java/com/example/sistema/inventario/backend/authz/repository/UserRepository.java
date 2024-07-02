package com.example.sistema.inventario.backend.authz.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.sistema.inventario.backend.authz.entity.User;



public interface UserRepository extends CrudRepository <User, Long>{
    
    List<User> findAll();

    User findByUsernameAndPassword(String username, String password);

    User findByUsername(String username);
    
    @Query(value =
        "select exists(select true as exists  "+
        "from users u "+
        "join users_roles ur on (u.id = ur.user_id) "+
        "join roles r on (ur.role_id = r.id) "+
        "join roles_authorities ra on (r.id = ra.role_id) "+
        "join authorities a on (ra.authority_id = a.id) "+
        "where u.username = ?1 and a.endpoint= ?2)",
         nativeQuery = true)
    boolean hasAuthority(String username, String authority);

    @Query(value = "SELECT use.id, rol.name, use.name, use.username, rol.id FROM roles rol INNER JOIN users_roles userol ON rol.id=userol.role_id INNER JOIN users use ON use.id=userol.user_id INNER JOIN compania com  ON use.compania_id = com.id WHERE com.id = :compania ORDER BY use.id LIMIT 5 OFFSET ((:pagina * 5) - 5);", nativeQuery = true)
    List usuariosPorCompania(@Param("compania") Long compania, @Param("pagina") Long pagina);

    //SELECT * FROM users where username='sebas'

    @Query(value = "SELECT * FROM users where username=:user", nativeQuery = true)
    List usuarioPrincipal(@Param("user") String user);

}