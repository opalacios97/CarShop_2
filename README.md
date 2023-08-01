# (Getting start) Carshop_2

## Descripción:

Este proyecto es un formulario de datos pensado para el proceso de recepción de vehículos de un CarShop. El proyecto hace uso de los hooks useState y useReducer para la actualización de datos y dar secuencia a la aplicación respectivamente.   

## Desarrollo:

Para poder hacer uso de este proyecto requieres instalarlo, puedes hacerlo desde el símbolo del sistema o utilizando Git Bash. Una vez ubicado en el directorio donde deseas clonar el proyecto, debes ejecutar los comandos de instalación.

### Instalación

En primer lugar debes clonar el proyecto, lo lograrás ejecutando el siguiente comando:

#### `git clone https://github.com/opalacios97/CarShop_2.git`

A continuación debes acceder al directorio del proyecto, en esta ocasión el comando a ejecutar es el siguiente:

#### `cd CarShop_2`

Finalmente, para instalar las dependencias del proyecto debes ejecutar:

#### `npm install`

Una vez instaladas las dependencias, ya podrás empezar a trabajar con este proyecto de manera local.


### Uso

En el directorio del proyecto es posible ejecutar los siguentes comandos:

Despliega la aplicación de administrador en modo desarrollo.
Puedes abrirla en tu navegador para visualizar, accede a [http://localhost:3000](http://localhost:3000).

#### `node admin.js`

La página se actualizará al realizar cambios.

Despliega la aplicación de cliente en modo desarrollo.
Puedes abrirla en tu navegador para visualizar, accede a [http://localhost:3002](http://localhost:3002).

#### `node client.js`

La página se actualizará al realizar cambios.

Puedes iniciar la ejecución de prueba en el modo interactivo debes ejecutar el siguiente comando.

#### `npm test`

La aplicación podrá ser desplegada, es posible realizando el build para producción en la carpeta `build` mediante la ejecución del siguiente comando.

#### `npm run build`

Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento
La compilación se minimiza y los nombres de archivo incluyen los hashes.

## Despliegue:

La aplicación será desplegada el servicio S3 de AWS.

