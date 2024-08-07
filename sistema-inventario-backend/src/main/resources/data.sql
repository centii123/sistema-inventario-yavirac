/*datos authorities*/
INSERT INTO authorities (name, endpoint) values ('User_Write', 'POST:/api/user/');
INSERT INTO authorities (name, endpoint) values ('User_Read', 'GET:/api/user/');
INSERT INTO authorities (name, endpoint) values ('UserById_Read', 'GET:/api/user/{id}/');
INSERT INTO authorities (name, endpoint) values ('User_Delete', 'DELETE:/api/user/{id}/');
INSERT INTO authorities (name, endpoint) values ('User_Update', 'PUT:/api/user/{id}/');
INSERT INTO authorities (name, endpoint) values ('User_PartialUpdate', 'PATCH:/api/user/{id}/');

INSERT INTO authorities (name, endpoint) values ('Role_Write', 'POST:/api/role/');
INSERT INTO authorities (name, endpoint) values ('Role_Read', 'GET:/api/role/');
INSERT INTO authorities (name, endpoint) values ('RoleById_Read', 'GET:/api/role/{id}/');
INSERT INTO authorities (name, endpoint) values ('Role_Delete', 'DELETE:/api/role/{id}/');
INSERT INTO authorities (name, endpoint) values ('Role_Update', 'PUT:/api/role/{id}/');
INSERT INTO authorities (name, endpoint) values ('Role_PartialUpdate', 'PATCH:/api/role/');

INSERT INTO authorities (name, endpoint) values ('Authority_Write', 'POST:/api/authority/');
INSERT INTO authorities (name, endpoint) values ('Authority_Read', 'GET:/api/authority/');
INSERT INTO authorities (name, endpoint) values ('AuthorityById_Read', 'GET:/api/authority/{id}/');
INSERT INTO authorities (name, endpoint) values ('Authority_Delete', 'DELETE:/api/authority/{id}/');
INSERT INTO authorities (name, endpoint) values ('Authority_Update', 'PUT:/api/authority/{id}/');
INSERT INTO authorities (name, endpoint) values ('Authority_PartialUpdate', 'PATCH:/api/authority/{id}/');
INSERT INTO authorities (name, endpoint) values ('AuthorityByUser_Read', 'GET:/api/authority/byuser/{id}/');


INSERT INTO authorities (name, endpoint) values ('infraestructura-obtener', 'GET:/infraestructura/');
INSERT INTO authorities (name, endpoint) values ('infraestructura-obtener-id', 'GET:/infraestructura/{id}/');
INSERT INTO authorities (name, endpoint) values ('infraestructura-agregar', 'POST:/infraestructura/');
INSERT INTO authorities (name, endpoint) values ('infraestructura-editar', 'PUT:/infraestructura/{id}/');
INSERT INTO authorities (name, endpoint) values ('infraestructura-eliminar', 'DELETE:/infraestructura/{id}/');

/*permiso para bienes*/
INSERT INTO authorities (name, endpoint) values ('bienes-obtener', 'GET:/bienes/');
INSERT INTO authorities (name, endpoint) values ('bienes-obtener-id', 'GET:/bienes/{id}/');
INSERT INTO authorities (name, endpoint) values ('bienes-obtener-infraestructura', 'GET:/bienes/infraestructura/{id}/');
INSERT INTO authorities (name, endpoint) values ('bienes-obtener-nombre', 'GET:/bienes/{nombre}/');
INSERT INTO authorities (name, endpoint) values ('bienes-agregar', 'POST:/bienes/');
INSERT INTO authorities (name, endpoint) values ('bienes-editar', 'PUT:/bienes/{id}/');
INSERT INTO authorities (name, endpoint) values ('bienes-eliminar', 'DELETE:/bienes/{id}/');

/*permiso para carreras*/
INSERT INTO authorities (name, endpoint) values ('carreras-obtener', 'GET:/carreras/');
INSERT INTO authorities (name, endpoint) values ('carreras-obtener-id', 'GET:/carreras/{id}/');
INSERT INTO authorities (name, endpoint) values ('carreras-agregar', 'POST:/carreras/');
INSERT INTO authorities (name, endpoint) values ('carreras-editar', 'PUT:/carreras/{id}/');
INSERT INTO authorities (name, endpoint) values ('carreras-eliminar', 'DELETE:/carreras/{id}/');


/*permiso para categorias bienes*/
INSERT INTO authorities (name, endpoint) values ('categorias-bienes-obtener', 'GET:/categorias-bienes/');
INSERT INTO authorities (name, endpoint) values ('categorias-bienes-obtener-id', 'GET:/categorias-bienes/{id}/');
INSERT INTO authorities (name, endpoint) values ('categorias-bienes-agregar', 'POST:/categorias-bienes/');
INSERT INTO authorities (name, endpoint) values ('categorias-bienes-editar', 'PUT:/categorias-bienes/{id}/');
INSERT INTO authorities (name, endpoint) values ('categorias-bienes-eliminar', 'DELETE:/categorias-bienes/{id}/');


/*permiso para discapacidad*/
INSERT INTO authorities (name, endpoint) values ('discapacidad-obtener', 'GET:/discapacidad/');
INSERT INTO authorities (name, endpoint) values ('discapacidad-obtener-id', 'GET:/discapacidad/{id}/');
INSERT INTO authorities (name, endpoint) values ('discapacidad-agregar', 'POST:/discapacidad/');
INSERT INTO authorities (name, endpoint) values ('discapacidad-editar', 'PUT:/discapacidad/{id}/');
INSERT INTO authorities (name, endpoint) values ('discapacidad-eliminar', 'DELETE:/discapacidad/{id}/');

/*permiso para enfermedad-catastrofica*/
INSERT INTO authorities (name, endpoint) values ('enfermedad-catastrofica-obtener', 'GET:/enfermedadCatastrofica/');
INSERT INTO authorities (name, endpoint) values ('enfermedad-catastrofica-obtener-id', 'GET:/enfermedadCatastrofica/{id}/');
INSERT INTO authorities (name, endpoint) values ('enfermedad-catastrofica-agregar', 'POST:/enfermedadCatastrofica/');
INSERT INTO authorities (name, endpoint) values ('enfermedad-catastrofica-editar', 'PUT:/enfermedadCatastrofica/{id}/');
INSERT INTO authorities (name, endpoint) values ('enfermedad-catastrofica-eliminar', 'DELETE:/enfermedadCatastrofica/{id}/');

/*permiso para entidad publica*/
INSERT INTO authorities (name, endpoint) values ('entidad-publica-obtener', 'GET:/entidadPublica/');
INSERT INTO authorities (name, endpoint) values ('entidad-publica-obtener-id', 'GET:/entidadPublica/{id}/');
INSERT INTO authorities (name, endpoint) values ('entidad-publica-agregar', 'POST:/entidadPublica/');
INSERT INTO authorities (name, endpoint) values ('entidad-publica-editar', 'PUT:/entidadPublica/{id}/');
INSERT INTO authorities (name, endpoint) values ('entidad-publica-eliminar', 'DELETE:/entidadPublica/{id}/');

/*permiso para escala ocupacional*/
INSERT INTO authorities (name, endpoint) values ('escala-ocupacional-obtener', 'GET:/escala-ocupacional/');
INSERT INTO authorities (name, endpoint) values ('escala-ocupacional-obtener-id', 'GET:/escala-ocupacional/{id}/');
INSERT INTO authorities (name, endpoint) values ('escala-ocupacional-agregar', 'POST:/escala-ocupacional/');
INSERT INTO authorities (name, endpoint) values ('escala-ocupacional-editar', 'PUT:/escala-ocupacional/{id}/');
INSERT INTO authorities (name, endpoint) values ('escala-ocupacional-eliminar', 'DELETE:/escala-ocupacional/{id}/');


/*permiso para estudios en curso*/
INSERT INTO authorities (name, endpoint) values ('estudios-curso-obtener', 'GET:/estudios-curso/');
INSERT INTO authorities (name, endpoint) values ('estudios-curso-obtener-id', 'GET:/estudios-curso/{id}/');
INSERT INTO authorities (name, endpoint) values ('estudios-curso-agregar', 'POST:/estudios-curso/');
INSERT INTO authorities (name, endpoint) values ('estudios-curso-editar', 'PUT:/estudios-curso/{id}/');
INSERT INTO authorities (name, endpoint) values ('estudios-curso-eliminar', 'DELETE:/estudios-curso/{id}/');

/*permiso para fecha ingreso instituto*/
INSERT INTO authorities (name, endpoint) values ('fecha-ingreso-instituto-obtener', 'GET:/fecha-ingreso-instituto/');
INSERT INTO authorities (name, endpoint) values ('fecha-ingreso-instituto-obtener-id', 'GET:/fecha-ingreso-instituto/{id}/');
INSERT INTO authorities (name, endpoint) values ('fecha-ingreso-instituto-agregar', 'POST:/fecha-ingreso-instituto/');
INSERT INTO authorities (name, endpoint) values ('fecha-ingreso-instituto-editar', 'PUT:/fecha-ingreso-instituto/{id}/');
INSERT INTO authorities (name, endpoint) values ('fecha-ingreso-instituto-eliminar', 'DELETE:/fecha-ingreso-instituto/{id}/');


/*permiso para institutos*/
INSERT INTO authorities (name, endpoint) values ('institutos-obtener', 'GET:/institutos/');
INSERT INTO authorities (name, endpoint) values ('institutos-obtener-id', 'GET:/institutos/{id}/');
INSERT INTO authorities (name, endpoint) values ('institutos-agregar', 'POST:/institutos/');
INSERT INTO authorities (name, endpoint) values ('institutos-editar', 'PUT:/institutos/{id}/');
INSERT INTO authorities (name, endpoint) values ('institutos-eliminar', 'DELETE:/institutos/{id}/');

/*permiso para nacionalidad*/
INSERT INTO authorities (name, endpoint) values ('nacionalidad-obtener', 'GET:/nacionalidad/');
INSERT INTO authorities (name, endpoint) values ('nacionalidad-obtener-id', 'GET:/nacionalidad/{id}/');
INSERT INTO authorities (name, endpoint) values ('nacionalidad-agregar', 'POST:/nacionalidad/');
INSERT INTO authorities (name, endpoint) values ('nacionalidad-editar', 'PUT:/nacionalidad/{id}/');
INSERT INTO authorities (name, endpoint) values ('nacionalidad-eliminar', 'DELETE:/nacionalidad/{id}/');

/*permiso para persona*/
INSERT INTO authorities (name, endpoint) values ('persona-obtener', 'GET:/persona/');
INSERT INTO authorities (name, endpoint) values ('persona-obtener-id', 'GET:/persona/{id}/');
INSERT INTO authorities (name, endpoint) values ('persona-obtener-dni', 'GET:/persona/{dni}/');
INSERT INTO authorities (name, endpoint) values ('persona-agregar', 'POST:/persona/');
INSERT INTO authorities (name, endpoint) values ('persona-editar', 'PUT:/persona/{id}/');
INSERT INTO authorities (name, endpoint) values ('persona-eliminar', 'DELETE:/persona/{id}/');


/*permiso para roles institucionales*/
INSERT INTO authorities (name, endpoint) values ('roles-institucionales-obtener', 'GET:/roles-institucionales/');
INSERT INTO authorities (name, endpoint) values ('roles-institucionales-obtener-id', 'GET:/roles-institucionales/{id}/');
INSERT INTO authorities (name, endpoint) values ('roles-institucionales-agregar', 'POST:/roles-institucionales/');
INSERT INTO authorities (name, endpoint) values ('roles-institucionales-editar', 'PUT:/roles-institucionales/{id}/');
INSERT INTO authorities (name, endpoint) values ('roles-institucionales-eliminar', 'DELETE:/roles-institucionales/{id}/');

/*permiso para titulos*/
INSERT INTO authorities (name, endpoint) values ('titulos-obtener', 'GET:/titulos/');
INSERT INTO authorities (name, endpoint) values ('titulos-obtener-id', 'GET:/titulos/{id}/');
INSERT INTO authorities (name, endpoint) values ('titulos-agregar', 'POST:/titulos/');
INSERT INTO authorities (name, endpoint) values ('titulos-editar', 'PUT:/titulos/{id}/');
INSERT INTO authorities (name, endpoint) values ('titulos-eliminar', 'DELETE:/titulos/{id}/');

/*permiso para familiares entidad publica*/
INSERT INTO authorities (name, endpoint) values ('familiar-labora-otra-entidad-publica', 'GET:/familiar-labora-otra-entidad-publica/');
INSERT INTO authorities (name, endpoint) values ('familiar-labora-otra-entidad-publica-id', 'GET:/familiar-labora-otra-entidad-publica/{id}/');
INSERT INTO authorities (name, endpoint) values ('familiar-labora-otra-entidad-publica-agregar', 'POST:/familiar-labora-otra-entidad-publica/');
INSERT INTO authorities (name, endpoint) values ('familiar-labora-otra-entidad-publica-editar', 'PUT:/familiar-labora-otra-entidad-publica/{id}/');
INSERT INTO authorities (name, endpoint) values ('familiar-labora-otra-entidad-publica-eliminar', 'DELETE:/familiar-labora-otra-entidad-publica/{id}/');



/*datos roles*/
INSERT INTO roles (name) values ('ROLE_USUARIO_DE_APOYO');
INSERT INTO roles (name) values ('ROLE_ADMIN');

/*datos roles_authorities*/
INSERT INTO roles_authorities (role_id, authority_id) (select (SELECT id FROM roles where name = 'ROLE_ADMIN')  AS role_id, e.id from authorities e );

/*datos roles_authorities*/
INSERT INTO roles_authorities (role_id, authority_id) (select (SELECT id FROM roles where name = 'ROLE_USUARIO_DE_APOYO')  AS role_id, e.id from authorities e );


/*datos roles*/


/*datos usuario*/
INSERT INTO users ( username, password, looked, expired, enabled) VALUES ( 'amparito', '$2a$10$TwROhi2MZsOTt8igkE7Yyec0WfjK7NlgdX9apOu0b6cY4SxzHLvCq', false, false, true);
INSERT INTO users ( username, password, looked, expired, enabled) VALUES ( 'user_apoyo', '$2a$10$TwROhi2MZsOTt8igkE7Yyec0WfjK7NlgdX9apOu0b6cY4SxzHLvCq', false, false, true);

/*datos usuario roles*/
INSERT INTO users_roles (user_id, role_id) VALUES ((SELECT id FROM users where username = 'amparito'), (SELECT id FROM roles where name = 'ROLE_ADMIN'));
INSERT INTO users_roles (user_id, role_id) VALUES ((SELECT id FROM users where username = 'user_apoyo'), (SELECT id FROM roles where name = 'ROLE_USUARIO_DE_APOYO'));

/**/
INSERT INTO roles_institucionales (descripcion,created_at, updated_at)
VALUES
  ('kaka','2023-07-20 10:00:00', '2023-07-20 10:00:00' ),
  ('sugyd','2023-07-20 10:00:00', '2023-07-20 10:00:00'),
  ('dygsddd','2023-07-20 10:00:00', '2023-07-20 10:00:00');

/**/
INSERT INTO fecha_ingreso_instituto (cambio_grupo_ocupacional_modalidad,created_at, updated_at, cambio_instituto_fusion, cambio_ocupacional_emergencia, primer_ingreso)
VALUES
  ('2023-06-01 08:00:00','2023-07-20 10:00:00', '2023-07-20 10:00:00', '2024-01-15 09:30:00', '2022-11-20 14:45:00', '2021-03-05 07:15:00'),
  ('2022-05-10 10:20:00','2023-07-20 10:00:00', '2023-07-20 10:00:00', '2023-07-25 11:45:00', '2023-03-15 12:30:00', '2020-02-10 08:50:00'),
  ('2021-04-22 15:00:00','2023-07-20 10:00:00', '2023-07-20 10:00:00', '2022-12-30 16:30:00', '2021-09-05 17:45:00', '2019-01-20 09:15:00');

/**/
INSERT INTO carreras(descripcion,created_at, updated_at)
VALUES ('desarrollo de software','2023-07-20 10:00:00', '2023-07-20 10:00:00'),('marketing','2023-07-20 10:00:00', '2023-07-20 10:00:00'),('diseño de modas','2023-07-20 10:00:00', '2023-07-20 10:00:00');

/**/
INSERT INTO institutos
(canton,created_at, updated_at, coordinacion_zonal, direccion_instituto, nombre, regimen_laboral, provincias)
VALUES ('Quito','2023-07-20 10:00:00', '2023-07-20 10:00:00', 'Zona Norte', 'Av. Amazonas y Naciones Unidas', 'Colegio Simón Bolívar', 'Contrato temporal', 1),
('Guayaquil','2023-07-20 10:00:00', '2023-07-20 10:00:00', 'Zona Sur', 'Av. Kennedy y Benjamín Carrión', 'Colegio Juan Montalvo', 'Contrato indefinido', 2),
('Cuenca','2023-07-20 10:00:00', '2023-07-20 10:00:00', 'Zona Centro', 'Av. de las Américas y Huayna Cápac', 'Escuela 9 de Octubre', 'Contrato a plazo fijo', 1);


/**/
INSERT INTO enfermedad_catastrofica (cargo_persona_discapacidad,created_at, updated_at, institucion_certifica_enfermedad, tipo_enfermedad)
VALUES (2,'2023-07-20 10:00:00', '2023-07-20 10:00:00', 'ministerio_salud', 'insuficiencia renal'), (2,'2023-07-20 10:00:00', '2023-07-20 10:00:00', 'iess','cancer');


/**/
INSERT INTO nacionalidad (nombre,created_at, updated_at)
VALUES ('ecuatoriano','2023-07-20 10:00:00', '2023-07-20 10:00:00');

/**/
INSERT INTO entidad_publica(created_at, updated_at, 
	recibe_otro_honorario_senecsyt, 
	tienefamiliares_labora_senecsyt, codigo_instituto_labore, 
	labora_otra_entidad_publica, observaciones)
VALUES ('2023-07-20 10:00:00', '2023-07-20 10:00:00',1,1, 1, 1, 'nuevo empleado' ),
('2023-07-20 10:00:00', '2023-07-20 10:00:00',2,1, 0, 1, 'empleado transferido' );

/**/
INSERT INTO discapacidad (numero_carnet,created_at, updated_at, porcentaje, tipo_discapacidad)
VALUES ('123456','2023-07-20 10:00:00', '2023-07-20 10:00:00', 15, 'discapacidad física'),
('789012','2023-07-20 10:00:00', '2023-07-20 10:00:00', 30, 'discapacidad sensorial');

/**/
INSERT INTO escala_ocupacionales (created_at, updated_at, grado, grupo_ocupacional, remuneracion) VALUES
('2023-07-20 10:00:00', '2023-07-20 10:00:00',1,'ip1',1800), ('2023-07-20 10:00:00', '2023-07-20 10:00:00',1,'ip1',1800);

/**/
INSERT INTO titulos (titulos_optenidos,created_at, updated_at ,institucion, ano_del_titulo, intruccion_formal,numero_de_registro_senesyt) 
VALUES ('ing. mecánico','2023-07-20 10:00:00', '2023-07-20 10:00:00', 'U. central', '2002-05-10', 1, '4646465144');

/**/
INSERT INTO estudiosen_cursos ( nombre,created_at, updated_at, tipo_de_titulo, fecha_de_inicio, fecha_de_fin, numero_de_horas) VALUES
('masterado en mecanica','2023-07-20 10:00:00', '2023-07-20 10:00:00', 'phd', '2024-06-05', '2025-09-07', 523);

/**/
INSERT INTO categorias_bienes ( nombre,created_at, updated_at ) VALUES ('CPU','2023-07-20 10:00:00', '2023-07-20 10:00:00');


/**/
INSERT INTO persona
(created_at, updated_at, apellidos, correo_personal, direccion_domiciliaria, dni, estado_civil, etnia, fecha_de_nacimiento, genero, horario_trabajo, materias_imparte, modalidad_jornada, modalidad_laboral, nombres, provincia, telefono, telefono_domicilio, tipo_de_sangre, carreras_id, entidad_publica_id, escala_ocupacionales_id, fecha_ingreso_instituto_id, institutos_id, nacionalidad_id, roles_institucionales_id, user_id)
VALUES 
('2024-08-03 10:00:00','2024-08-03 10:00:00','Pérez','juan.perez@example.com','Calle Falsa 123','12345678',1,'Mestizo','1990-01-01',1,'08:00-16:00','Matemáticas, Física',1,'Presencial','Juan',1,'0987654321','022345678',1,1,1,1,1,1,1,1,1
);


/**/
INSERT INTO infraestructura (created_at, updated_at, descripcion, nombre, categoria_aula, persona_id)
VALUES ('2023-07-20 10:00:00', '2023-07-20 10:00:00', 'cyan', 'piso 2',1,1);

INSERT INTO bienes (created_at, updated_at, codigo_del_bien, descripcion, estado, marca, observaciones, serie, valor, valor_iva, categoria_bien_id, infraestructura_id)
VALUES
  ('2024-08-03 10:00:00','2024-08-03 10:00:00', 'ABC123', 'Laptop Dell', 1, 'Dell', 'XPS 13', '12345XYZ', 1000.00, 120.00, 1, 1 );

/*INSERT INTO aula_bienes(
	aula_id, bienes_id)
	VALUES (1, 1), (1, 2), (1, 3);*/


/*permiso para aulas*/

/*borrar los datos de roles_authorities para poder volver a cargar los datos con los nuevos permisos sin que se repitan.
DELETE FROM roles_authorities;*/