# P3.1 Maquetación responsive con Vite y SASS · Santuario Eden

--**Autor:** Nuria Moreno Patrut

--**Página publicada:** [https://nuriamorenopatrut.github.io/proyecto-final-sass/](https://nuriamorenopatrut.github.io/proyecto-final-sass/)

--**GitHub:** [https://github.com/nuriamorenopatrut/proyecto-final-sass](https://github.com/nuriamorenopatrut/proyecto-final-sass)

--**Figma:** [https://www-figma.com/design/tbZ3oinGVLgqAWJpXQb3MO/Own-page](https://www.figma.com/design/tbZ3oinGVLgqAWJpXQb3MO/Own-page)



## 1. Descripción

**Santuario Eden** es la web de una asociación que **rescata, cuida y devuelve al mar** a animales marinos. El sitio tiene dos páginas:

- **Inicio**: presentación del santuario, cifras, algunos de los animales rescatados y una llamada a la acción para colaborar.
- **Cómo ayudar**: las tres formas de colaborar (donar, voluntariado y apadrinar) y un **formulario de contacto con validación**.

La maquetación parte del prototipo de Figma. Lo rediseñé sobre una **rejilla de 12 columnas en escritorio, 8 en tablet y 4 en móvil**, y con una paleta nueva, **«Océano nocturno»**: un único azul marino en tres luminosidades, turquesa como color de acento y morado para destacar palabras. Todos los textos cumplen el contraste mínimo AA.

## 2. Tecnologías utilizadas

- **Vite**: servidor de desarrollo y compilación del proyecto (configurado para dos páginas HTML y salida en `docs/`).
- **Sass (SCSS)**: estilos organizados en parciales, con variables, mixins, mapas, bucles y anidamiento.
- **HTML5 semántico**: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer` y `form`.
- **JavaScript**: menú móvil, sombra de la cabecera al hacer scroll y validación del formulario.
- **Figma**: prototipo, sistema de diseño y variables.
- **GitHub Pages**: publicación de la web desde la carpeta `docs/`.

## 3. Estructura del proyecto

```
proyecto-final-sass/
├── index.html              # Página de inicio
├── vite.config.js          # base relativa, salida en docs/ y las dos páginas
├── package.json
├── public/
│   └── favicon.svg         # Se copia tal cual a docs/
├── docs/                   # Web compilada (npm run build) → GitHub Pages
└── src/
    ├── main.js             # Importa main.scss + menú móvil y validación
    ├── assets/             # Fotografías de los animales
    ├── pages/
    │   └── formulario.html # Página "Cómo ayudar"
    └── styles/
        ├── main.scss       # Punto de entrada: solo @use de los parciales
        ├── _variables.scss
        ├── _mixins.scss
        ├── _globals.scss
        ├── _layout.scss
        ├── _components.scss
        ├── _header.scss
        ├── _footer.scss
        ├── _home.scss
        └── _contact.scss
```

## 4. Organización de los estilos (Sass)

- **`_variables.scss`**: variables exportadas de Figma (colores primitivos y de rol, tipografía, espaciado y tamaños de escritorio y móvil), variables definidas a mano y los mapas `$breakpoints`, `$grid-config`, `$heading-sizes`, `$button-variants` y `$section-spacing`.
- **`_mixins.scss`**: el gestor de media queries `respond-to()` y los mixins `button`, `heading`, `card`, `icon-box`, `eyebrow`, `flex`, `focus-ring` y `visually-hidden`.
- **`_globals.scss`**: reset y estilos base de etiquetas (`body`, títulos, enlaces), más utilidades como `.lead` y `.highlight`.
- **`_layout.scss`**: contenedor, secciones y la rejilla. Las clases `.col-sm-*`, `.col-md-*`, `.col-lg-*` y `.start-*` se generan con `@each` y `@for` a partir de `$grid-config`.
- **`_components.scss`**: botones (generados desde un mapa), tarjetas y campos de formulario.
- **`_header.scss`, `_footer.scss`, `_home.scss` y `_contact.scss`**: estilos propios de cada zona.
- **`main.scss`**: solo carga los parciales con `@use`. No se usa `@import`, que está obsoleto.

**Puntos de corte:**
- Móvil: hasta 599 px.
- Tablet: de 600 a 1199 px.
- Escritorio: desde 1200 px.

Los estilos de cada componente están anidados con la nomenclatura BEM (`&__elemento`, `&--modificador`), y sus media queries van dentro del propio componente con `@include respond-to(...)`.

## 5. Instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/nuriamorenopatrut/proyecto-final-sass.git
   cd proyecto-final-sass
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. Arrancar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Generar la versión de producción en `docs/`:
   ```bash
   npm run build
   ```

## 6. Capturas de pantalla

- [Mobile](./capturas/mobile.png)
- [Tablet](./capturas/tablet.png)
- [Desktop](./capturas/desktop.png)

## 7. Conclusiones

Sass me ha facilitado mucho la maquetación: con las variables de Figma en un solo archivo pude cambiar la paleta de toda la web, y el mixin respond-to() me ha permitido hacer el responsive sin repetir media queries. Lo que más me ha costado ha sido reorganizar el diseño para móvil y configurar Vite para dos páginas y GitHub Pages. El único inconveniente que le veo es que hay que compilar, pero compensa, y lo seguiré usando en próximos proyectos.