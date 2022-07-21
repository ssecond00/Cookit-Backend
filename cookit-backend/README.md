# Cookit - Frontend

## ¿Que es Cookit? 

Cookit es un sitio institucional en donde los usuarios pueden consultar y buscar distintas recetas para cocinar. Los usuarios podran registrarse para poder asi cargar
sus propias recetas. Estas recetas a su vez pueden ser filtradas por distintos criterios.

## Casos de uso:

- Los usuarios podrán registrarse para utilizar la aplicación, para ello deberán completar un formulario con la siguiente información: nombre y apellido, mail, número de teléfono. (No se permitirá registrar usuarios con el mismo mail.)

- Los usuarios podrán ingresar a la aplicación con su mail y contraseña. Tendrán la posibilidad de solicitar una nueva en caso de olvidarla mediante la opción OLVIDE CONTRASEÑA. Se recomienda utilizar algún criterio de validación para el reseteo de la misma.

- Los usuarios registrados podrán gestionar su nombre y cambiar contraseña. 

- Los usuarios podrán registrar nuevas recetas en el sitio.

- Los usuarios podrán modificar el contenido de sus recetas, quitarlas de publicacióno publicarlas nuevamente.

- Los usuarios podráneliminar sus recetas del sitio.

- Los usuarios registrados podráncalificar las recetas publicadas. Esta calificacióndebe poder visualizarse en el sitio principal para que los usuarios puedan filtrar recetas.


# Pre-requisitos:

## Sistema Operativo:

Tanto el backend como el frontend de la aplicacion pueden ser ejecutados en Windows, Linux y MacOS.

## Frameworks utilizados: 

- ReactJs
- NodeJs

## Conocimiento

Se requiere un conocimiento basico-intermedio de ambos frameworks mencionados anteriormente. Tambien el manejo de bases de datos relacionales y de Sequalize. *(Sequelize is a modern TypeScript and Node.js ORM for Postgres, MySQL, MariaDB, SQLite and SQL Server, and more. )*



# Instalacion.

## Repositorios:

El forntend y el backend de la aplicacion estan en repositorios separados de GitHub.

### Frontend:
[Cookit-Frontend](https://github.com/ssecond00/Cookit-Frontend-new.git)


### Backend:
[Cookit-Backend](https://github.com/ssecond00/Cookit-Backend.git)


## Comandos

Estos comandos deben ser ejecutados en ambos proyectos (frontend y backend) siempre *parado* en el directorio raiz de cada proyecto.
### 1) instalar todas las librerias necesarias.

```
> npm install --legacy-peer-deps
```

### 2) Levantar el servidor de manera loccal.
```
> npm start
```

# Diagrama de Base de datos

![alt text](https://res.cloudinary.com/cookitdb/image/upload/v1658417256/btzyxyum7hv7vbdturzq.png
)


## Seteo de configuraciones - Variables de entorno.

### Base de datos relacional: 
en el archivo `config.json` ubicado en: `cookit-backend/config/` se deben setear las siguientes variables:
``` 
"username": "root",
"password": "******",
"database": "cookit_db",
"host": "localhost",
"dialect": "mysql"
``` 

### Repositorio externo para almacenar imagenes.
en el archivo `imagenes.service.js` ubicado en: `cookit-backend/src/services/` se deben setear las siguientes variables:
``` 
cloudinary.config({ 
    cloud_name: 'cookitdb', 
    api_key: '626845486871269', 
    api_secret: '****'
});
``` 


