
# Personas Restfull API CRUD 
Se mostrara la aplicación su manejo y puesta en marcha.

### Puesta en marcha localhost
Para poner en funcionamiento la API se debe ejecutar la base de datos, el proyecto se probo con un contenesor de mysql 8.0 en docker-compose, el archivo .yml de su configuración esta en el proyecto por lo que empezaremos ejecutando este con docker. Para ello vamos al proyecto en la subcarpeta docker por medio del terminal y ejecutamos el siguiente comando como se muestra.

`\Reto\docker> docker-compose up`

Cabe recordar que la base de datos se ejecuta sobre el puerto 3312 en el localhost por si desea usar otra base de datos.

Se pone en marcha el contenedor de docker y entonces hay que crear la base de datos. Esta se puede crear desde el terminal que ofrece docker o desde el terminal del equipo que ejecuta docker. En este caso lo realizaremos desde el terminal del PC.
Se ejecuta el comando siguiente

`mysql --host 127.0.0.1 -P 3312 -u root -p`

el usuario al que se esta ingrsando es root y la contraseña es "secret".

`Enter password: secret`

una vez dentro procederemos a copiar los comandos que estan en el archivo init.sql, en la carpeta Reto/docker/mysql que se muestran en la siguente sección.

``` sql
CREATE DATABASE personas_db;

USE personas_db;

CREATE TABLE personas(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(180),
    birth TIMESTAMP,
    fatherid INT(11),
    motherid INT(11)
    );

DESCRIBE personas;
```

Con la base de datos en ejecución se debe poner en marcha el servidor. Por lo tanto desde la ventana de comandos ingresamos al proyecto en la carpeta Reto/server, y ejecutamos el siguente comando

`Reto\server> npm run dev`

eso pone en marcha el servidor, luego se pone en marcha el lado del cliente, ingresamos a la carpeta cliente Reto/client y ejecutamos el comando como se muestra.

`Reto\client> ng serve`



### Manejo del aplicativo

Para ingresar en el aplicativo se debe abrir el siguiente url.

`http://localhost:4200/persona`

La primera vez que se abre se debe observar a algo asi.

![imagen vista primera vez](https://github.com/josebrule/Persona/blob/main/imagenes/CapturaPV.jpg?raw=true)

Entonces se debe agregar a una persona.

![Agregar Persona](https://github.com/josebrule/Persona/blob/main/imagenes/AddPersona.jpg?raw=true)

Agregamos los datos correspondientes.
![Campo lleno persona agregar](https://github.com/josebrule/Persona/blob/main/imagenes/AddPersonaAd.jpg?raw=true)

en caso de que no se agregen todos los datos esta programado para enviar un mensaje de aviso para que la persona termine de completar los campos.
La adicón de la persona la podemos observar como se muestra en la imagen.

![Tabla con las personas](https://github.com/josebrule/Persona/blob/main/imagenes/PersonaAgregada.jpg?raw=true)

El boton para editar una persona se muestra en la tabla.

![Tabla. Señalando boton editar](https://github.com/josebrule/Persona/blob/main/imagenes/Editarboton.jpg?raw=true)

Una vez en la tabla podemos modificar la información como nos parezca, sin dejar ningun dato en blanco.

![Editar Formulario](https://github.com/josebrule/Persona/blob/main/imagenes/Edici%C3%B3nCambio.jpg?raw=true)

Dando clic en el boton ya se guarda la información. De esta manera se puede aumentar la tabla con nuevos valores y editar los preexistentes.

![Tabla con muchas personas](https://github.com/josebrule/Persona/blob/main/imagenes/Personas.jpg?raw=true)

Para efectos de borrar personas basta con dar clic en el boton como se muestra.

![Tabla boton borrar usuarios](https://github.com/josebrule/Persona/blob/main/imagenes/Eliminar.jpg?raw=true)

Finalmente se muestra que estan eliminados.

![Tabla usuario borrado](https://github.com/josebrule/Persona/blob/main/imagenes/UsuariosEliminados.jpg?raw=true)

