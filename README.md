# Portal_Estudiantes (30-05-2023)

Proyecto de un portal de estudiantes para la Hackathon, realizado con framework frontend Angular y backend Django.

# Alfredo

## Proyecto Django Rest Framework

Este proyecto utiliza Django Rest Framework para desarrollar una API REST.

### Requisitos

- Python 3.11.3

### Instalación

1. Clona el repositorio.
2. Crea y activa un entorno virtual.
3. Instala las dependencias del proyecto:
   ```shell
   pip install -r requirements.txt
   ```

# Isaac

## Proyecto Angular Framework Frontend

Parte Frontend del proyecto para acceso a la educación del Hackaton creado en Angular 13.

## Instalar Angular 13 para probar el proyecto.

1- Instalar Angular cli: npm install -g @angular/cli

2- Ejecutar el servidor: ng serve --open

3- Instalar Boostrap: ng add @ng-bootstrap/ng-bootstrap

4- Instalar iconos: ng add @fortawesome/angular-fontawesome y ver el siguiente sitio https://www.npmjs.com/package/@fortawesome/angular-fontawesome

## Frontend de Portal de Estudiantes (June 01-13)

- HT-01: Realizar la creción del proyecto con el framework Frontend Angular y hacer el diseño inicial del Layout.
- HT-02: Completar diseño inicial de Layout.
- HT-03: Hacer pruebas de consumo de API Rest.
- HT-04: Creación de componentes y routing.
- HT-05: Ajustes finales a vista home.
- HT-06: Creación de Login Component.
- HT-07: Creación de User Component.
- HT-08: Creación y diseño inicial de vista de Tutorials Component.
- HT-09: Implementar modal al abrir una clase de la lista en Materia.
- HT-10: Consumir una Api Post del Login al ingresar datos.
- HT-11: Completar el Local Storage en el Login.
- HT-11.1: Configurando rutas al estar validado el Login Parte I.
- HT-11.2: Configurando rutas al estar validado el Login Parte II.
- HT-11.3: Controlar cargar la página al ingresar con el Login.
- HT-12.1: Funcionalidad de Login para profesor y estudiante implementado.
- HT-12.2: Implementación de recuperar información de asignaturas y perfil para estudiantes y profesores.
- HT-12.3: Mostrando el contenido de la materia en el modal al abrir la clase.
- HT-12.4: Agregando boton para profesores puedan ver el crud de contenido.
- HT-12.5: Recuperando contenido existente en la ventana Modal.
- HT-12.6: Registrar nuevo contenido desde el crud.
- HT-12.7: Completar actualizar y eliminar registro en crud.
- HT-12.8: Comenzar a redirigir las URLs de las API al servidor Heroku.
- HT-12.9: Rutas redirigidas al servidor Heroku.
- HT-13: Ajustes visuales a Modal.
- HT-13.1: Arreglando error al visualizar el contenido.
- HT-13.2: Agregando select de tipo de contenido enlace y lectura.
- HT-13.3: Cambios finales en Frontend.

## Pequeños ajustes de Portal de Estudiantes (June 16)

- AP-01: Ajustes a código de Login.
- AP-01-1: Ajustes de carga de información en home y header component.
- AP-01.2: Rework de código de modal para ver contenido.
- AP-01.3: Rework de código de modal para insertar contenido.
- AP-01.4: Rework de código de modal para ver, actualizar y eliminar contenido.
- AP-01.5: Agregar mensaje de confirmación a la opción eliminar registro.
- AP-01.6: Cambiando icoco de las tarjetas de asignatura.
- AP-01.7: Mostrar el nombre del profesor al dar click en contenido.
- AP-01.8: Mejorando vista actual de contenidos lectura y enlace.
- AP-01.9: Correción de obtener datos de materias del estudiante.

## Implementación en Docker

Nos ubicamos en el directorio Frontend e instalamos las dependencias.
1- ```shell
npm install

````
Antes de ejecutar docker-compose es necesario crear el directorio dist de dist/ del Frontend.
2- ```shell
npm run build
````

Construimos los servicios de docker-compose
3- ```shell
docker-compose build

````
Levantamos los servicios de docker-compose
4- ```shell
docker-compose up -d
````
