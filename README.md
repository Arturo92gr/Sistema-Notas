# Sistema-Notas
Sistema de administración de notas con diferentes interfaces


### Contenidos

1. [Servidor Docker](#1-servidor-docker)  
2. [Javascript en el servidor](#2-javascript-en-el-servidor)  
3. [Html](#3-html)
4. [Javascript en el cliente](#4-javascript-en-el-cliente)  
	4.1 [Modules](#41-modules)

## 1. Servidor Docker

Inicialmente tendremos un **Dockerfile** en el _directorio del servidor_ como se muestra a continuación:

```docker
FROM debian:bullseye
RUN apt update
RUN apt install nodejs -y 
RUN apt install npm -y
RUN mkdir -p /home/node/app/
WORKDIR /home/node/app
RUN mkdir interfaces
COPY ./interfaces ./interfaces
COPY package.json ./
COPY interfaces ./
COPY index.js ./
RUN npm install
EXPOSE 3000
CMD [ "node", "index.js" ]
```

También contamos con un **package.json**:

```json
{
    "name": "uiserver",
    "version": "1.0.0",
    "description": "Servidor UI para sistema de notas.",
    "main": "index.js",
    "type": "module",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "docker build -t notes/uiserver .",
        "container" : "docker run --name uiserver -p 3000:3000 -d notes/uiserver"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
        "cors": "^2.8.5",
        "express": "^4.21.1"
    }
}
```

De esta forma, podemos construir una imagen y correr un contenedor con el servidor con estos dos comandos:

    npm run build

    npm run container

Por otro lado, en la _parte de cliente_, tenemos otro **package.json** con el que crear un contenedor con un servidor apache para ir viendo los cambios y haciendo pruebas en local:

```json
{
    "name": "uiclient",
    "version": "1.0.0",
    "description": "UI client ",
    "main": "index.html",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "server" : "docker run -dit --name my-apache-app -p 8080:80 -v //c/Users/NombreUsuario/.../uiclient:/usr/local/apache2/htdocs/ httpd:2.4" //Esta dirección tendría que modificarse
    },
    "author": "",
    "license": "ISC"
}
```

Ejecución:

    npm run server

## 2. Javascript en el servidor

**index.js** del servidor:

```javascript
import { HttpFetch } from "./modules/HttpFetch.js";

const httpFetch = new HttpFetch('http://localhost:3000');

httpFetch.obtenerUI('', (datos) => {
    const contenedor = document.getElementById("main_container");
        
    datos.panels.forEach(element => {
        const div = document.createElement('div');
        div.setAttribute('class', element.cssData);
        contenedor.appendChild(div)
    });
});
```

Dentro hay otro directorio _interfaces_, done estará el archivo **model_1.js** con la estructura de datos a utilizar en formato json:

```json
export const model1 = {
    panels: [
        {
            type: "title",
            panelName: "app",
            panelDescription: "Aplicación de Notas",
            panelWidth: "100%",
            panelHeight: "100%",
            cssData: "app_style",       // El nombre del estilo CSS, si tiene alguno específico
        }
    ],
    components: [
        {
            type: "title",
            father: "app",
            content: "Notas",
            position: "0,0"
        }
    ]
};
```

En esta estructura siempre es recomendable separar los elementos para evitar tener que hacer redundancias en el código, que cada uno tenga su tipo y que los hijos especifiquen su padre.

## 3. Html

En la parte de _cliente_ está el siguiente **index.html**:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/styles.css">
        <title>Notas</title>
    </head>
    <body>
        <div id="main_container">
            hola
        </div>
        <script type="module" src="js/index.js"></script>
    </body>
</html>
```

## 4. Javascript en el cliente

La parte de cliente tiene el siguiente **index.js**:

```javascript
import { HttpFetch } from "./modules/HttpFetch.js";

const httpFetch = new HttpFetch('http://localhost:3000');

httpFetch.obtenerUI('', (datos) => {
    const contenedor = document.getElementById("main_container");
    
    datos.panels.forEach(element => {
        const div = document.createElement('div');
        div.setAttribute('class', element.cssData);
        contenedor.appendChild(div)
    });
});
```

## 4.1 Modules

El cliente cuenta con dos módulos, cada uno contiene una forma de conexión distinta.

**Http.js**

```javascript
export class Http {
    constructor (base_url) {
        this.base_url = base_url;
        this.last_error = null;
    }

    obtenerUI(route){}
}
```

**HttpFetch.js**

```javascript
import { Http } from "./Http.js";

export class HttpFetch extends Http {
    obtenerUI(route, callBackOnSuccess){
        fetch(`${this.base_url}/${route}`).then(
            (response) => {
                response.json().then(
                    (data) => {
                        callBackOnSuccess(data);
                    }
                , (error) =>{
                    this.last_error = error;
                })
            }
        , (error) =>{
            this.last_error = error;
        }
    )}
}
```