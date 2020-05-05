# Practica 3 y 4 - Grupo 5
Clonar y servir con git, nodejs y [angular](https://cli.angular.io/).

    $ git clone https://github.com/jorgedly/ayd1-lab-practica34.git practica
    $ cd practica
    $ npm install
    $ ng serve
## Funcionamiento de Angular material y Bulma
Estan incluidas las bibliotecas de [angular material](https://material.angular.io/components/categories) que tiene los componentes y [bulma](https://bulma.io/documentation/columns/basics/) la disposicion de filas y columnas de forma mas sencilla.

Para utilizar un componente como se muestra en la documentacion de angular material, junto a columnas con bulma, de forma general:

    <div class="columns">
        <div class="column">
            <button mat-button>Click</button>
        <div>
    </div>
    
En el archivo [material.module.ts](https://github.com/jorgedly/ayd1-lab-practica34/blob/master/src/app/material.module.ts), se importan los componentes que se utilizaran en el proyecto. Por ejemplo, el componente boton, en la seccion de [api](https://material.angular.io/components/button/api) de angular material, requiere que sea importado como `import {MatButtonModule} from '@angular/material/button';`, por lo que en este archivo ya ha sido creado un arreglo 'mods' que tiene las importaciones. Ya estan agregadas las importaciones mas comunes, pero en caso de que no este aun, se debe agregar en este archivo.

## Agregar un componente
A diferencia de ionic, aqui no existen _pages_, y existen _modules_. Por facilidad y por ejemplo, para crear un componente **tabla**, se utiliza el comando en la terminal:

    $ ng generate component components/tabla --module=app
    
O la forma abreviada:

    $ ng g c components/tabla --module=app

Esto creara una carpeta con los archivos:
* tabla.component.html - El codigo html del componente
* tabla.component.scss - La hoja de estilos del componente usando [sass](https://sass-lang.com/). En general basta con css simple.
* tabla.component.ts - El codigo ts del componente
* tabla.component.spec.ts - El archivo a utilizar en las pruebas unitarias

Para utilizar un componente en otro componente, se utiliza el nombre de su modulo junto al nombre proporcionado. Para el ejemplo de **tabla**, se utilizaria:

    <div>
        <app-tabla></app-tabla>
    </div>
    <div>
        <app-otro></app-otro>
    </div>
