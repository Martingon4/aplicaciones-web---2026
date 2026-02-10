# 🌐 Desarrollo de Aplicaciones Web - Primavera 2026

Documentación completa y detallada del proyecto web interactivo que incluye una página de bienvenida, un generador dinámico de horóscopo con canvas, sistema de formularios con validación y comunicación cliente-servidor usando PHP y JavaScript.

---

## 📋 Índice
1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Componentes HTML](#componentes-html)
3. [Sistema de Estilos CSS](#sistema-de-estilos-css)
4. [Funcionalidades JavaScript](#funcionalidades-javascript)
5. [Backend PHP](#backend-php)
6. [Flujo de Datos](#flujo-de-datos)
7. [Guía de Uso](#guía-de-uso)

---

## 🏗️ Estructura del Proyecto

```
aplicaciones-web---2026/
├── index.html              # Página principal de bienvenida
├── horoscopo.html          # Página del horóscopo interactivo
├── get-data.html           # Formulario de datos personales
├── show-data.html          # Visualización de datos personales
├── register.html           # Formulario de registro de usuario
├── register-data.html      # Visualización de datos de registro
├── inicio-php.html         # Página de inicio PHP
├── css/
│   ├── styles.css          # Estilos principales del proyecto
│   ├── get-data.css        # Estilos para formularios
│   └── php-start.css       # Estilos para inicio PHP
├── js/
│   ├── horoscope.js        # Lógica para generar horóscopo
│   ├── main.js             # Script principal
│   ├── get-data.js         # Validación y envío del formulario de datos
│   ├── show-data.js        # Consumo y visualización de datos personales
│   ├── register.js         # Validación y envío del formulario de registro
│   ├── register-get-data.js # Consumo y visualización de datos de registro
│   ├── comparacion-numeros.js # Comparación de números
│   ├── php-start.js        # Script para inicio PHP
│   └── tabla_de_verdad.js  # Tabla de verdad lógica
├── app/
│   ├── get-data.php        # Recepción de datos personales
│   ├── show-data.php       # Entrega de datos personales al cliente
│   ├── register.php        # Recepción de datos de registro
│   ├── register-get-data.php # Entrega de datos de registro al cliente
│   ├── multiplication-table.php # Tabla de multiplicación
│   ├── table-verdad.php    # Tabla de verdad
│   └── validacion-numeros.php # Validación de números
├── img/                    # Imágenes del proyecto
├── LICENSE                 # Licencia del proyecto
└── README.MD               # Este archivo
```

---

## 📄 Componentes HTML

### `index.html` - Página Principal

La página principal está compuesta por varias secciones:

#### **1. Sección Hero (Portada)**

```html
<section class="hero hero--primary">
  <div class="container">
    <main class="hero__content">
      <h1 class="title-primary">
        Desarrollo de Aplicaciones <strong class="bd-b">
          Web <span class="line line--primary"></span>
        </strong> 
        Primavera 2026
      </h1>
      <p class="hero__lead">
        ¡Bienvenidos al curso de Desarrollo de Aplicaciones Web! 
        En este curso, exploraremos las tecnologías y herramientas 
        esenciales para crear aplicaciones web modernas y funcionales.
      </p>
      <button class="btn mt-1">Bienvenidos</button>
      <a href="horoscopo.html" class="btn btn--secondary mt-1">
        Ir al Horóscopo
      </a>
    </main>
  </div>
</section>
```

**Elementos clave:**
- `class="hero hero--primary"`: Aplica un fondo de imagen de héroe
- `class="bd-b"`: Elemento contenedor para el subrayado decorativo
- `class="line line--primary"`: Línea verde decorativa bajo "Web"
- Dos botones: uno blanco y otro azul (secundario)

#### **2. Sección de Miembros**

```html
<section class="members">
  <article class="members__item">
    <h2 class="title-secondary title-primary-color">
      Enrique Hernández Luna
    </h2>
    <p class="text-primary-color">
      Estudiante de Desarrollo de Aplicaciones Web...
    </p>
  </article>
  <!-- Más miembros -->
</section>
```

**Características:**
- 3 artículos distribuidos en línea (33% cada uno)
- El segundo elemento se centra automáticamente con márgenes auto
- Colores específicos para títulos y texto

#### **3. Sección de Objetivos e Imagen**

```html
<section class="box-100 mt-4">
  <article class="box-50">
    <h2 class="title-secondary title-primary-color">
      Objetivos del Curso
    </h2>
    <ul class="text-primary-color">
      <li>Comprender los fundamentos del desarrollo web.</li>
      <li>Aprender a utilizar HTML, CSS y JavaScript...</li>
      <!-- Más items -->
    </ul>
  </article>
  <picture class="box-50 h-v3-plus oh">
    <img src="img/ic-1.jpg" alt="Imagen de desarrollo web" 
         class="image-square h-100 rounded--v2 rotate-and-scale-on-hover">
  </picture>
</section>
```

**Características:**
- Layout de dos columnas (50% cada una)
- Imagen con efecto de rotación y escala al pasar el ratón
- Overflow hidden para que la imagen se ajuste al borde redondeado

---

### `horoscopo.html` - Página del Horóscopo

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Horoscopo</title>
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" href="css/canvas.css">
</head>
<body>
  <section class="hero hero--secondary">
    <div class="container">
      <main class="hero__content">
        <h1 class="title-primary">Horóscopo 2026</h1>
        <p class="hero__lead">
          Descubre tu horóscopo para el año 2026...
        </p>
        <a href="index.html" class="btn mt-1">
          Volver a la página principal
        </a>
      </main>
    </div>
  </section>

  <!-- Contenedor donde se insertan los horóscopo dinámicamente -->
  <section class="container container-el mt-1">
  </section>
  
  <script src="js/horoscope.js"></script>
</body>
</html>
```

**Elementos importantes:**
- `class="hero hero--secondary"`: Usa una imagen de fondo diferente
- `class="container-el"`: Contenedor vacío donde JavaScript inserta los horóscopo
- Importa `horoscope.js` para generar el contenido dinámicamente

---

### `get-data.html` - Formulario de Datos Personales

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>For get data</title>
  <link rel="stylesheet" href="css/get-data.css">
</head>
<body>
  <main>
    <h1>Formulario de datos personales</h1>
    <form action="#" method="post">
      <!-- Sección: Datos de nacimiento -->
      <fieldset>
        <legend>Datos de nacimiento</legend>
        <div>
          <label for="birth-hour">Hora de nacimiento</label>
          <input type="time" id="birth-hour" name="birth_hour" required>
        </div>
        <div>
          <label for="birth-day">Dia de nacimiento</label>
          <input type="number" id="birth-day" name="birth_day" min="1" max="31" required>
        </div>
        <div>
          <label for="birth-month">Mes de nacimiento</label>
          <input type="number" id="birth-month" name="birth_month" min="1" max="12" required>
        </div>
        <div>
          <label for="birth-year">Ano de nacimiento</label>
          <input type="number" id="birth-year" name="birth_year" min="1900" max="2100" required>
        </div>
      </fieldset>

      <!-- Sección: Información de pareja (condicional) -->
      <fieldset>
        <legend>Informacion de pareja</legend>
        <div>
          <input type="checkbox" id="has-partner" name="has_partner" 
                 aria-controls="partner-data">
          <label for="has-partner">Tengo pareja</label>
        </div>
        <div id="partner-data" aria-live="polite">
          <!-- Campos de pareja que se muestran/ocultan dinámicamente -->
          <div>
            <label for="partner-hour">Hora de nacimiento de la pareja</label>
            <input type="time" id="partner-hour" name="partner_hour">
          </div>
          <div>
            <label for="partner-day">Dia de nacimiento de la pareja</label>
            <input type="number" id="partner-day" name="partner_day" min="1" max="31">
          </div>
          <div>
            <label for="partner-month">Mes de nacimiento de la pareja</label>
            <input type="number" id="partner-month" name="partner_month" min="1" max="12">
          </div>
          <div>
            <label for="partner-year">Ano de nacimiento de la pareja</label>
            <input type="number" id="partner-year" name="partner_year" min="1900" max="2100">
          </div>
        </div>
      </fieldset>

      <!-- Sección: Salud -->
      <fieldset>
        <legend>Salud</legend>
        <div>
          <label for="illnesses">Enfermedades que ha tenido en el ano</label>
          <textarea id="illnesses" name="illnesses" rows="4" 
                    placeholder="Escriba las enfermedades si las hay"></textarea>
        </div>
      </fieldset>

      <!-- Sección: Situación financiera (radio buttons) -->
      <fieldset>
        <legend class="title">Situacion financiera</legend>
        <div>
          <input type="radio" id="finance-good" name="financial_status" 
                 value="buena" required>
          <label for="finance-good">Buena</label>
        </div>
        <div>
          <input type="radio" id="finance-regular" name="financial_status" 
                 value="regular">
          <label for="finance-regular">Regular</label>
        </div>
        <div>
          <input type="radio" id="finance-bad" name="financial_status" 
                 value="mala">
          <label for="finance-bad">Mala</label>
        </div>
      </fieldset>

      <!-- Sección: Situación laboral (radio buttons) -->
      <fieldset>
        <legend class="title">Situacion laboral</legend>
        <div>
          <input type="radio" id="work-unemployed" name="work_status" 
                 value="desempleado" required>
          <label for="work-unemployed">Desempleado</label>
        </div>
        <div>
          <input type="radio" id="work-employed" name="work_status" 
                 value="empleado">
          <label for="work-employed">Empleado</label>
        </div>
        <div>
          <input type="radio" id="work-entrepreneur" name="work_status" 
                 value="empresario">
          <label for="work-entrepreneur">Empresario</label>
        </div>
      </fieldset>

      <button type="submit" class="btn">Enviar</button>
      <!-- Enlace oculto que se muestra después del envío exitoso -->
      <a href="show-data.html" class="btn" hidden>Ver datos</a>
    </form>
  </main>
  <script src="js/get-data.js"></script>
</body>
</html>
```

**Características principales:**
- Formulario con múltiples fieldsets organizados por categoría
- Campos condicionales para datos de pareja (se muestran/ocultan con JavaScript)
- Radio buttons para situación financiera y laboral
- Enlace "Ver datos" oculto que se muestra tras envío exitoso
- Validación completa en JavaScript antes de enviar

---

### `show-data.html` - Visualización de Datos Personales

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ver datos</title>
  <link rel="stylesheet" href="css/get-data.css">
</head>
<body>
  <main>
    <h1>Datos del formulario</h1>
    <!-- Contenedor donde JavaScript inserta los datos dinámicamente -->
    <div id="data-container">
      <p>Cargando datos...</p>
    </div>
  </main>
  <script src="js/show-data.js"></script>
</body>
</html>
```

**Características:**
- Contenedor `#data-container` donde se insertan los datos via JavaScript
- Mensaje de carga inicial que se reemplaza con los datos
- Consume datos desde `show-data.php` via fetch

---

### `register.html` - Formulario de Registro de Usuario

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registro de usuario</title>
  <link rel="stylesheet" href="css/get-data.css">
</head>
<body>
  <main>
    <h1>Formulario de registro</h1>
    <form action="#" method="post" id="register-form">
      <!-- Sección: Datos personales -->
      <fieldset>
        <legend>Datos personales</legend>
        <div>
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" required>
        </div>
        <div>
          <label for="apellido-paterno">Apellido paterno</label>
          <input type="text" id="apellido-paterno" name="apellido_paterno" required>
        </div>
        <div>
          <label for="apellido-materno">Apellido materno</label>
          <input type="text" id="apellido-materno" name="apellido_materno" required>
        </div>
      </fieldset>

      <!-- Sección: Datos de cuenta -->
      <fieldset>
        <legend>Datos de cuenta</legend>
        <div>
          <label for="nick">Nick (nombre de usuario)</label>
          <input type="text" id="nick" name="nick" required>
        </div>
        <div>
          <label for="correo">Correo electrónico</label>
          <input type="email" id="correo" name="correo" required>
        </div>
        <div>
          <label for="password">Contraseña</label>
          <input type="password" id="password" name="password" required>
        </div>
      </fieldset>

      <!-- Sección: Género (radio buttons) -->
      <fieldset>
        <legend>Género</legend>
        <div>
          <input type="radio" id="genero-masculino" name="genero" 
                 value="masculino" required>
          <label for="genero-masculino">Masculino</label>
        </div>
        <div>
          <input type="radio" id="genero-femenino" name="genero" 
                 value="femenino">
          <label for="genero-femenino">Femenino</label>
        </div>
        <div>
          <input type="radio" id="genero-otro" name="genero" value="otro">
          <label for="genero-otro">Otro</label>
        </div>
      </fieldset>

      <button type="submit" class="btn">Registrarse</button>
      <!-- Enlace oculto que se muestra después del registro exitoso -->
      <a href="register-data.html" class="btn" id="ver-datos" hidden>Ver datos</a>
      <a href="index.html" class="btn">Inicio</a>
    </form>
  </main>
  <script src="js/register.js"></script>
</body>
</html>
```

**Campos del formulario:**
- **Nombre**: Texto, mínimo 2 caracteres
- **Apellido paterno**: Texto, mínimo 2 caracteres
- **Apellido materno**: Texto, mínimo 2 caracteres
- **Nick**: Texto, mínimo 3 caracteres
- **Correo**: Email con validación de formato
- **Contraseña**: Password, mínimo 6 caracteres
- **Género**: Radio buttons (Masculino, Femenino, Otro)

---

### `register-data.html` - Visualización de Datos de Registro

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Datos de registro</title>
  <link rel="stylesheet" href="css/get-data.css">
</head>
<body>
  <main>
    <h1>Datos del registro</h1>
    <!-- Contenedor donde JavaScript inserta los datos dinámicamente -->
    <div id="data-container">
      <p>Cargando datos...</p>
    </div>
  </main>
  <script src="js/register-get-data.js"></script>
</body>
</html>
```

**Características:**
- Muestra todos los datos del registro excepto la contraseña
- Consume datos desde `register-get-data.php` via fetch

---

## 🎨 Sistema de Estilos CSS

### `styles.css` - Estilos Principales

#### Reset y Configuración Base

```css
*,*::before,*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 
               'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
               'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #181818;
}
```

**Propósito:**
- Reset de márgenes y paddings
- Box model consistente
- Fuente del sistema para mejor compatibilidad
- Fondo oscuro (#181818) para todo el sitio

#### Paleta de Colores

```css
/* Colores para títulos */
.title-primary-color { color: #fdfffd; }      /* Blanco casi puro */
.title-secondary-color { color: #00ccff; }    /* Cyan */
.title-tertiary-color { color: #15ff08; }     /* Verde neón */

/* Colores para texto */
.text-primary-color { color: #9a9a9a; }       /* Gris */

/* Líneas decorativas */
.line--primary { background-color: #15ff08; }     /* Verde */
.line--secondary { background-color: #00ccff; }   /* Cyan */
```

**Esquema de colores:**
- 🟢 Verde neón (#15ff08): Acentos principales
- 🔵 Cyan (#00ccff): Acentos secundarios
- ⚪ Blanco (#fdfffd): Títulos principales
- ⚫ Gris (#9a9a9a): Texto de cuerpo

#### Sección Hero

```css
.hero {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.hero--primary {
  background-image: url('../img/hero.jpg');
  background-size: cover;
  background-position: center;
}

.hero--secondary {
  background-image: url('../img/hero-2.jpg');
  background-size: cover;
  background-position: center;
}
```

**Características:**
- Padding vertical de 4rem (64px)
- Imágenes de fondo responsivas
- Dos variantes: primary (página principal) y secondary (horóscopo)

#### Línea Decorativa Subrayada

```css
.bd-b {
  position: relative;
}

.bd-b .line {
  content: '';
  position: absolute;
  bottom: .5rem;
  left: 0;
  width: 100%;
  height: 4px;
}

.line--primary {
  background-color: #15ff08;
}
```

**Efecto:**
- Crea una línea decorativa bajo elementos específicos
- Posicionamiento absoluto respecto al contenedor relativo
- Altura de 4px con colores vibrantes

#### Tipografía

```css
.title-primary {
  font-size: 2.5rem;
  line-height: 1.2;
}

.title-secondary {
  font-size: 2rem;
  line-height: 1.3;
}

.title-tertiary {
  font-size: 1.5rem;
  line-height: 1.4;
}
```

**Jerarquía:**
- Títulos primarios: 2.5rem (40px)
- Títulos secundarios: 2rem (32px)
- Títulos terciarios: 1.5rem (24px)

#### Layout de Miembros

```css
.members {
  width: 100%;
  margin-top: 2rem;
}

.members__item {
  display: inline-block;
  width: 32%;
}

.members__item:nth-child(2) {
  margin-left: auto;
  margin-right: auto;
}
```

**Estructura:**
- 3 columnas del 32% cada una
- El segundo elemento se centra con márgenes auto
- Margen superior de 2rem

#### Efectos Interactivos

##### Efecto de Rotación y Escala

```css
.rotate-and-scale-on-hover {
  transition: transform .3s ease-in-out;
}

.rotate-and-scale-on-hover:hover {
  transform: rotate(10deg) scale(1.2);
}
```

**Comportamiento:**
- Rotación de 10 grados
- Escala del 120%
- Transición suave de 0.3 segundos

##### Efecto de Subrayado con Sombra

```css
.link-inline-hover--shodow::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #e0e1e2;
  box-shadow: 0 0 10px #e0e1e2;
  transition: transform .3s ease-in-out;
  transform: scaleX(0);
  transform-origin: right;
}

.link-inline-hover--shodow:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
```

**Efecto:**
- Línea invisible bajo el enlace
- Al pasar el ratón, se expande de derecha a izquierda
- Incluye brillo con box-shadow

#### Botones

```css
.btn {
  display: inline-block;
  padding: .75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  background-color: #fff;
  color: #000;
  font-size: .880rem !important;
  border: 2px solid #000;
  transition: background-color .3s ease-in-out, color .3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0,0,0,.1);
  cursor: pointer;
}

.btn:hover {
  background-color: #000;
  color: #fff;
}

.btn--secondary {
  background-color: #2994eb;
}

.btn--secondary:hover {
  background-color: #43a2ef;
  color: #fff;
}
```

**Variantes:**
- **Primario**: Blanco con borde negro, invierte al hover
- **Secundario**: Azul (#2994eb), más claro al hover (#43a2ef)

---

### `get-data.css` - Estilos para Formularios

```css
/* Reset básico */
*,*::before,*::after{
  box-sizing: border-box;
}

/* Configuración del body */
body{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 
               'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
               'Open Sans', 'Helvetica Neue', sans-serif;
  max-width: 500px;      /* Ancho máximo centrado */
  margin: 0 auto;        /* Centrado horizontal */
}

/* Formulario ocupa todo el ancho */
form{
  width: 100%;
  display: block;
}

/* Fieldsets sin bordes */
fieldset{
  border: none;
  margin: 0;
  padding: 0;
}

/* Leyendas ocultas por defecto */
legend{
  display: none;
}

/* Leyendas con clase .title visibles */
legend.title{
  display: block;
}

/* Espaciado de campos */
fieldset > div, fieldset > div > div{
  display: block;
  width: 100%;
  margin-bottom: 20px;
}

/* Estilos de labels */
fieldset > div > label, fieldset > div > div > label{
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

/* Estilos de inputs, selects y textareas */
fieldset > div > input,
fieldset > div > select,
fieldset > div > textarea,
fieldset > div > div > input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Botón de formulario */
.btn{
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
```

**Características:**
- Formularios centrados con ancho máximo de 500px
- Fieldsets sin bordes para diseño limpio
- Labels con peso de fuente 600 (semi-bold)
- Inputs con bordes redondeados y padding consistente
- Botones azules (#007BFF) estilo Bootstrap

---

## ⚙️ Funcionalidades JavaScript

### `horoscope.js` - Generador Dinámico de Horóscopo

#### **1. Espera del Cargue de DOM**

```javascript
window.addEventListener("DOMContentLoaded", () => {
  // Código aquí se ejecuta cuando el DOM está completamente cargado
});
```

**Propósito:** Asegurar que el DOM esté completamente cargado antes de manipularlo.

#### **2. Array de Datos del Horóscopo**

```javascript
const horoscopes = [
  { 
    name: "Aries", 
    dates: "21 Mar - 19 Abr", 
    color: "#E63946",
    prediction: "Probablemente, se sentirá presionado entre la diversión y el deber...",
    image: "img/aries.png"
  },
  { 
    name: "Tauro", 
    dates: "20 Abr - 20 May", 
    color: "#4CAF50",
    prediction: "Comprenda que no se puede resolver todo en un solo día...",
    image: "img/tauro.png"
  },
  // ... 10 signos más (Géminis, Cáncer, Leo, Virgo, Libra, 
  //     Escorpio, Sagitario, Capricornio, Acuario, Piscis)
];
```

**Contenido por signo:**
- `name`: Nombre del signo zodiacal
- `dates`: Rango de fechas del signo
- `color`: Color hexadecimal específico de fondo para el canvas
- `prediction`: Predicción astrológica personalizada
- `image`: Ruta a la imagen del signo (almacenada en carpeta `img/`)

#### **3. Selección del Contenedor**

```javascript
const container = document.querySelector(".container-el");
```

Obtiene el elemento con clase `container-el` de `horoscopo.html`.

#### **4. Iteración y Creación de Elementos**

```javascript
horoscopes.forEach(horoscope => {
  // Crear wrapper
  const canvasWrapper = document.createElement("div");
  canvasWrapper.style.display = "inline-block";
  canvasWrapper.style.width = "33.33%";
  canvasWrapper.style.padding = "10px";
  canvasWrapper.style.boxSizing = "border-box";
  
  // Crear canvas
  const canvas = document.createElement("canvas");
  canvas.className = "horoscope-canvas";
  canvas.width = 200;
  canvas.height = 220;
  canvas.style.borderRadius = "15px";
  canvas.style.transition = "transform 0.3s ease";
  canvas.style.cursor = "pointer";
  
  // Agregar wrapper y canvas al contenedor
  canvasWrapper.appendChild(canvas);
  container.appendChild(canvasWrapper);
});
```

**Estructura:**
- Para cada horóscopo, crea un wrapper div
- Dentro, crea un canvas de 200x220 píxeles
- El wrapper ocupa 33.33% del ancho (3 columnas)

#### **5. Efectos de Hover**

```javascript
canvas.addEventListener("mouseenter", () => {
  canvas.style.transform = "scale(1.1)";
});

canvas.addEventListener("mouseleave", () => {
  canvas.style.transform = "scale(1)";
});
```

**Efectos:**
- Al pasar el ratón: Escala del 110%
- Al salir el ratón: Vuelve al 100%

#### **6. Carga de Imagen y Dibujo en Canvas**

```javascript
const ctx = canvas.getContext("2d");

// Crear y cargar imagen del signo
const img = new Image();
img.src = horoscope.image;

img.onload = () => {
  // 1. Dibujar fondo con color específico del signo
  ctx.fillStyle = horoscope.color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // 2. Dibujar imagen del signo en la esquina superior derecha
  ctx.drawImage(img, 145, 12, 45, 45);
  
  // 3. Nombre del signo (24px, negrita)
  ctx.fillStyle = "#000000";
  ctx.font = "bold 24px serif";
  ctx.fillText(horoscope.name, 20, 40);
  
  // 4. Fechas (14px)
  ctx.font = "14px serif";
  ctx.fillText(horoscope.dates, 20, 65);
  
  // 5. Predicción con ajuste de texto
  ctx.font = "12px serif";
  // ... (envolvimiento de texto)
};
```

**Proceso de dibujo:**
1. Crea objeto `Image` y carga la ruta desde `horoscope.image`
2. Espera a que la imagen se cargue con `img.onload`
3. Dibuja fondo con color específico de cada signo
4. Dibuja la imagen del signo en posición fija (x=145, y=12)
5. Dibuja nombre en fuente grande (24px, negrita)
6. Dibuja fechas en fuente mediana (14px)
7. Dibuja predicción con ajuste de línea

#### **7. Envolvimiento de Texto (Text Wrapping)**

```javascript
const maxWidth = 160;          // Ancho máximo de línea
const lineHeight = 15;         // Altura entre líneas
const words = horoscope.prediction.split(" ");
let line = "";
let y = 90;                    // Posición inicial en Y

words.forEach(word => {
  const testLine = line + word + " ";
  const metrics = ctx.measureText(testLine);
  
  if (metrics.width > maxWidth && line) {
    // Si la línea es muy larga, dibuja la anterior
    ctx.fillText(line, 20, y);
    line = word + " ";
    y += lineHeight;
  } else {
    // Agrega la palabra a la línea actual
    line = testLine;
  }
});
// Dibuja la última línea
ctx.fillText(line, 20, y);
```

**Lógica:**
- Divide el texto en palabras
- Prueba agregar cada palabra a la línea actual
- Si la línea excede 160px, la dibuja y comienza una nueva

---

### `get-data.js` - Validación y Envío del Formulario de Datos

#### **1. Inicialización y Toggle de Pareja**

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const hasPartnerCheckbox = document.getElementById('has-partner');
  const partnerDataDiv = document.getElementById('partner-data');

  // Mostrar/ocultar datos de pareja según el checkbox
  if (hasPartnerCheckbox && partnerDataDiv) {
    // Estado inicial: oculto si no está marcado
    partnerDataDiv.style.display = hasPartnerCheckbox.checked ? 'block' : 'none';
    
    // Evento de cambio: alternar visibilidad
    hasPartnerCheckbox.addEventListener('change', function() {
      partnerDataDiv.style.display = this.checked ? 'block' : 'none';
    });
  }
});
```

**Funcionalidad:**
- Al cargar la página, oculta los campos de pareja si el checkbox no está marcado
- Escucha cambios en el checkbox para mostrar/ocultar dinámicamente

#### **2. Validación de Campos Obligatorios**

```javascript
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener referencias a los campos
  const birthHour = document.getElementById('birth-hour');
  const birthDay = document.getElementById('birth-day');
  const birthMonth = document.getElementById('birth-month');
  const birthYear = document.getElementById('birth-year');

  // Validar cada campo con mensaje específico
  if (!birthHour.value) {
    alert('Por favor, ingrese la hora de nacimiento.');
    birthHour.focus();
    return;
  }

  if (!birthDay.value) {
    alert('Por favor, ingrese el día de nacimiento.');
    birthDay.focus();
    return;
  }

  // ... validaciones similares para mes y año
});
```

**Características:**
- Previene el envío por defecto del formulario
- Valida cada campo individualmente
- Muestra alerta específica para cada campo vacío
- Pone el foco en el campo con error

#### **3. Validación Condicional de Pareja**

```javascript
// Validar datos de pareja solo si el checkbox está marcado
if (hasPartnerCheckbox.checked) {
  const partnerHour = document.getElementById('partner-hour');
  const partnerDay = document.getElementById('partner-day');
  const partnerMonth = document.getElementById('partner-month');
  const partnerYear = document.getElementById('partner-year');

  if (!partnerHour.value) {
    alert('Por favor, ingrese la hora de nacimiento de la pareja.');
    partnerHour.focus();
    return;
  }

  // ... validaciones similares para día, mes y año de pareja
}
```

**Lógica:**
- Solo valida campos de pareja si "Tengo pareja" está marcado
- Cada campo tiene su mensaje de error específico

#### **4. Validación de Radio Buttons**

```javascript
// Validar situación financiera
const financialStatus = document.querySelector('input[name="financial_status"]:checked');
if (!financialStatus) {
  alert('Por favor, seleccione su situación financiera.');
  return;
}

// Validar situación laboral
const workStatus = document.querySelector('input[name="work_status"]:checked');
if (!workStatus) {
  alert('Por favor, seleccione su situación laboral.');
  return;
}
```

**Técnica:**
- Usa `querySelector` con pseudo-clase `:checked`
- Si no hay elemento seleccionado, retorna `null`

#### **5. Envío con Fetch API**

```javascript
// Recopilar todos los datos del formulario
const formData = new FormData(form);

// Enviar datos usando fetch con POST
fetch('app/get-data.php', {
  method: 'POST',
  body: formData
})
.then(response => {
  if (!response.ok) {
    throw new Error('Error en la respuesta del servidor');
  }
  return response.json();
})
.then(data => {
  if (data.success) {
    alert('Datos enviados correctamente: ' + data.message);
    // Mostrar el enlace "Ver datos"
    const verDatosLink = document.querySelector('a[href="show-data.html"]');
    if (verDatosLink) {
      verDatosLink.removeAttribute('hidden');
    }
  } else {
    alert('Error: ' + data.message);
  }
})
.catch(error => {
  console.error('Error:', error);
  alert('Hubo un error al enviar los datos. Por favor, intente nuevamente.');
});
```

**Flujo:**
1. Crea objeto `FormData` con todos los campos del formulario
2. Envía via POST a `app/get-data.php`
3. Espera respuesta JSON
4. Si es exitoso, muestra el enlace "Ver datos"
5. Maneja errores con try/catch

---

### `show-data.js` - Consumo y Visualización de Datos

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('data-container');
  
  // Obtener datos desde show-data.php
  fetch('app/show-data.php')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
      return response.json();
    })
    .then(result => {
      if (result.success) {
        const data = result.data;
        
        // Construir el HTML con los datos
        let html = `
          <section class="data-section">
            <h2>Datos de nacimiento</h2>
            <ul>
              <li><strong>Hora de nacimiento:</strong> ${data.birth_hour}</li>
              <li><strong>Día de nacimiento:</strong> ${data.birth_day}</li>
              <li><strong>Mes de nacimiento:</strong> ${data.birth_month}</li>
              <li><strong>Año de nacimiento:</strong> ${data.birth_year}</li>
            </ul>
          </section>
        `;
        
        // Datos de pareja (condicional)
        if (data.has_partner) {
          html += `
            <section class="data-section">
              <h2>Información de pareja</h2>
              <ul>
                <li><strong>Hora de nacimiento:</strong> ${data.partner_hour}</li>
                <li><strong>Día de nacimiento:</strong> ${data.partner_day}</li>
                <li><strong>Mes de nacimiento:</strong> ${data.partner_month}</li>
                <li><strong>Año de nacimiento:</strong> ${data.partner_year}</li>
              </ul>
            </section>
          `;
        } else {
          html += `
            <section class="data-section">
              <h2>Información de pareja</h2>
              <p>No tiene pareja registrada.</p>
            </section>
          `;
        }
        
        // Salud
        html += `
          <section class="data-section">
            <h2>Salud</h2>
            <p><strong>Enfermedades:</strong> ${data.illnesses || 'Ninguna reportada'}</p>
          </section>
        `;
        
        // Situación financiera y laboral
        html += `
          <section class="data-section">
            <h2>Situación financiera</h2>
            <p>${data.financial_status.charAt(0).toUpperCase() + 
                 data.financial_status.slice(1)}</p>
          </section>
        `;
        
        html += `
          <section class="data-section">
            <h2>Situación laboral</h2>
            <p>${data.work_status.charAt(0).toUpperCase() + 
                 data.work_status.slice(1)}</p>
          </section>
        `;
        
        // Enlace para volver
        html += `<a href="get-data.html" class="btn">Volver al formulario</a>`;
        
        container.innerHTML = html;
      } else {
        // Mostrar mensaje de error
        container.innerHTML = `
          <p class="error">${result.message}</p>
          <a href="get-data.html" class="btn">Ir al formulario</a>
        `;
      }
    })
    .catch(error => {
      console.error('Error:', error);
      container.innerHTML = `
        <p class="error">Hubo un error al cargar los datos.</p>
        <a href="get-data.html" class="btn">Ir al formulario</a>
      `;
    });
});
```

**Características:**
- Consume datos via fetch desde `show-data.php`
- Genera HTML dinámico basado en los datos recibidos
- Muestra información de pareja condicionalmente
- Capitaliza primera letra de valores como financiera y laboral
- Maneja errores con mensajes amigables

---

### `register.js` - Validación y Envío del Formulario de Registro

#### **1. Validación de Campos de Texto**

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('register-form');
  const verDatosLink = document.getElementById('ver-datos');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener referencias a los campos
    const nombre = document.getElementById('nombre');
    const apellidoPaterno = document.getElementById('apellido-paterno');
    const apellidoMaterno = document.getElementById('apellido-materno');
    const nick = document.getElementById('nick');
    const correo = document.getElementById('correo');
    const password = document.getElementById('password');
    const genero = document.querySelector('input[name="genero"]:checked');

    // Validar nombre (no vacío y mínimo 2 caracteres)
    if (!nombre.value.trim()) {
      alert('Por favor, ingrese su nombre.');
      nombre.focus();
      return;
    }

    if (nombre.value.trim().length < 2) {
      alert('El nombre debe tener al menos 2 caracteres.');
      nombre.focus();
      return;
    }

    // Validar apellido paterno
    if (!apellidoPaterno.value.trim()) {
      alert('Por favor, ingrese su apellido paterno.');
      apellidoPaterno.focus();
      return;
    }

    if (apellidoPaterno.value.trim().length < 2) {
      alert('El apellido paterno debe tener al menos 2 caracteres.');
      apellidoPaterno.focus();
      return;
    }

    // ... validaciones similares para apellido materno
  });
});
```

**Validaciones de texto:**
- Nombre: No vacío, mínimo 2 caracteres
- Apellido paterno: No vacío, mínimo 2 caracteres
- Apellido materno: No vacío, mínimo 2 caracteres
- Nick: No vacío, mínimo 3 caracteres

#### **2. Validación de Email**

```javascript
// Validar correo electrónico
if (!correo.value.trim()) {
  alert('Por favor, ingrese su correo electrónico.');
  correo.focus();
  return;
}

// Expresión regular para validar formato de email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(correo.value.trim())) {
  alert('Por favor, ingrese un correo electrónico válido.');
  correo.focus();
  return;
}
```

**Regex explicado:**
- `^[^\s@]+`: Inicio, uno o más caracteres que no sean espacio o @
- `@`: Símbolo arroba obligatorio
- `[^\s@]+`: Uno o más caracteres que no sean espacio o @
- `\.`: Punto literal
- `[^\s@]+$`: Uno o más caracteres hasta el final

#### **3. Validación de Contraseña**

```javascript
// Validar contraseña
if (!password.value) {
  alert('Por favor, ingrese una contraseña.');
  password.focus();
  return;
}

if (password.value.length < 6) {
  alert('La contraseña debe tener al menos 6 caracteres.');
  password.focus();
  return;
}
```

**Requisitos:**
- No puede estar vacía
- Mínimo 6 caracteres

#### **4. Validación de Género y Envío**

```javascript
// Validar género (radio button)
if (!genero) {
  alert('Por favor, seleccione su género.');
  return;
}

// Recopilar datos del formulario
const formData = new FormData(form);

// Enviar datos usando fetch con POST
fetch('app/register.php', {
  method: 'POST',
  body: formData
})
.then(response => {
  if (!response.ok) {
    throw new Error('Error en la respuesta del servidor');
  }
  return response.json();
})
.then(data => {
  if (data.success) {
    alert('Registro exitoso: ' + data.message);
    // Mostrar el enlace "Ver datos"
    if (verDatosLink) {
      verDatosLink.removeAttribute('hidden');
    }
  } else {
    alert('Error: ' + data.message);
  }
})
.catch(error => {
  console.error('Error:', error);
  alert('Hubo un error al registrar. Por favor, intente nuevamente.');
});
```

---

### `register-get-data.js` - Consumo y Visualización de Datos de Registro

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('data-container');
  
  // Obtener datos desde register-get-data.php
  fetch('app/register-get-data.php')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
      return response.json();
    })
    .then(result => {
      if (result.success) {
        const data = result.data;
        
        // Construir el HTML con los datos
        let html = `
          <section class="data-section">
            <h2>Datos personales</h2>
            <ul>
              <li><strong>Nombre:</strong> ${data.nombre}</li>
              <li><strong>Apellido paterno:</strong> ${data.apellido_paterno}</li>
              <li><strong>Apellido materno:</strong> ${data.apellido_materno}</li>
            </ul>
          </section>
          
          <section class="data-section">
            <h2>Datos de cuenta</h2>
            <ul>
              <li><strong>Nick:</strong> ${data.nick}</li>
              <li><strong>Correo:</strong> ${data.correo}</li>
            </ul>
          </section>
          
          <section class="data-section">
            <h2>Género</h2>
            <p>${data.genero.charAt(0).toUpperCase() + data.genero.slice(1)}</p>
          </section>
          
          <a href="register.html" class="btn">Volver al registro</a>
        `;
        
        container.innerHTML = html;
      } else {
        container.innerHTML = `
          <p class="error">${result.message}</p>
          <a href="register.html" class="btn">Ir al registro</a>
        `;
      }
    })
    .catch(error => {
      console.error('Error:', error);
      container.innerHTML = `
        <p class="error">Hubo un error al cargar los datos.</p>
        <a href="register.html" class="btn">Ir al registro</a>
      `;
    });
});
```

**Nota importante:** La contraseña NO se muestra por seguridad.

---

## 🐘 Backend PHP

### `get-data.php` - Recepción de Datos Personales

```php
<?php
// Iniciar sesión para compartir datos entre páginas
session_start();

// Establecer cabecera JSON para la respuesta
header('Content-Type: application/json');

// Verificar que sea una petición POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        'success' => false,
        'message' => 'Método no permitido. Use POST.'
    ]);
    exit;
}

// Recopilar datos del formulario con valores por defecto
$data = [
    // Datos de nacimiento
    'birth_hour' => $_POST['birth_hour'] ?? '',
    'birth_day' => $_POST['birth_day'] ?? '',
    'birth_month' => $_POST['birth_month'] ?? '',
    'birth_year' => $_POST['birth_year'] ?? '',
    
    // Datos de pareja (checkbox convierte a booleano)
    'has_partner' => isset($_POST['has_partner']) ? true : false,
    'partner_hour' => $_POST['partner_hour'] ?? '',
    'partner_day' => $_POST['partner_day'] ?? '',
    'partner_month' => $_POST['partner_month'] ?? '',
    'partner_year' => $_POST['partner_year'] ?? '',
    
    // Salud
    'illnesses' => $_POST['illnesses'] ?? '',
    
    // Situación financiera y laboral
    'financial_status' => $_POST['financial_status'] ?? '',
    'work_status' => $_POST['work_status'] ?? ''
];

// Validar campos obligatorios
$requiredFields = ['birth_hour', 'birth_day', 'birth_month', 'birth_year', 
                   'financial_status', 'work_status'];
$missingFields = [];

foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        $missingFields[] = $field;
    }
}

// Validación condicional: si tiene pareja, validar campos de pareja
if ($data['has_partner']) {
    $partnerFields = ['partner_hour', 'partner_day', 'partner_month', 'partner_year'];
    foreach ($partnerFields as $field) {
        if (empty($data[$field])) {
            $missingFields[] = $field;
        }
    }
}

// Si hay campos faltantes, devolver error
if (!empty($missingFields)) {
    echo json_encode([
        'success' => false,
        'message' => 'Faltan campos obligatorios: ' . implode(', ', $missingFields)
    ]);
    exit;
}

// Guardar datos en sesión para compartir con show-data.php
$_SESSION['form_data'] = $data;

// Devolver respuesta exitosa
echo json_encode([
    'success' => true,
    'message' => 'Datos recibidos correctamente',
    'data' => $data
]);
```

**Características principales:**
- Usa sesiones PHP para persistir datos entre páginas
- Valida método HTTP (solo acepta POST)
- Recopila datos con operador null coalescing (`??`)
- Validación condicional para campos de pareja
- Respuestas JSON estructuradas

---

### `show-data.php` - Entrega de Datos al Cliente

```php
<?php
// Iniciar sesión para acceder a datos compartidos
session_start();

// Establecer cabecera JSON
header('Content-Type: application/json');

// Verificar si hay datos en la sesión
if (!isset($_SESSION['form_data']) || empty($_SESSION['form_data'])) {
    echo json_encode([
        'success' => false,
        'message' => 'No hay datos disponibles. Por favor, complete el formulario primero.'
    ]);
    exit;
}

// Devolver los datos guardados en la sesión
echo json_encode([
    'success' => true,
    'message' => 'Datos recuperados correctamente',
    'data' => $_SESSION['form_data']
]);
```

**Flujo:**
1. Inicia sesión para acceder a `$_SESSION`
2. Verifica si existen datos previos
3. Devuelve datos en formato JSON o mensaje de error

---

### `register.php` - Recepción de Datos de Registro

```php
<?php
session_start();
header('Content-Type: application/json');

// Verificar que sea una petición POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        'success' => false,
        'message' => 'Método no permitido. Use POST.'
    ]);
    exit;
}

// Recopilar datos del formulario con trim para limpiar espacios
$data = [
    'nombre' => trim($_POST['nombre'] ?? ''),
    'apellido_paterno' => trim($_POST['apellido_paterno'] ?? ''),
    'apellido_materno' => trim($_POST['apellido_materno'] ?? ''),
    'nick' => trim($_POST['nick'] ?? ''),
    'correo' => trim($_POST['correo'] ?? ''),
    'password' => $_POST['password'] ?? '',
    'genero' => $_POST['genero'] ?? ''
];

// Validar campos obligatorios
$requiredFields = ['nombre', 'apellido_paterno', 'apellido_materno', 
                   'nick', 'correo', 'password', 'genero'];
$missingFields = [];

foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        $missingFields[] = $field;
    }
}

if (!empty($missingFields)) {
    echo json_encode([
        'success' => false,
        'message' => 'Faltan campos obligatorios: ' . implode(', ', $missingFields)
    ]);
    exit;
}

// Validar formato de correo electrónico
if (!filter_var($data['correo'], FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        'success' => false,
        'message' => 'El correo electrónico no es válido.'
    ]);
    exit;
}

// Validar longitud mínima de contraseña
if (strlen($data['password']) < 6) {
    echo json_encode([
        'success' => false,
        'message' => 'La contraseña debe tener al menos 6 caracteres.'
    ]);
    exit;
}

// Guardar datos en sesión (SIN la contraseña por seguridad)
$_SESSION['register_data'] = [
    'nombre' => $data['nombre'],
    'apellido_paterno' => $data['apellido_paterno'],
    'apellido_materno' => $data['apellido_materno'],
    'nick' => $data['nick'],
    'correo' => $data['correo'],
    'genero' => $data['genero']
];

echo json_encode([
    'success' => true,
    'message' => 'Usuario registrado correctamente'
]);
```

**Validaciones del servidor:**
- Campos obligatorios no vacíos
- Email con formato válido (`FILTER_VALIDATE_EMAIL`)
- Contraseña mínimo 6 caracteres
- **Seguridad:** La contraseña NO se guarda en sesión para visualización

---

### `register-get-data.php` - Entrega de Datos de Registro

```php
<?php
session_start();
header('Content-Type: application/json');

// Verificar si hay datos en la sesión
if (!isset($_SESSION['register_data']) || empty($_SESSION['register_data'])) {
    echo json_encode([
        'success' => false,
        'message' => 'No hay datos disponibles. Por favor, complete el registro primero.'
    ]);
    exit;
}

// Devolver los datos guardados en la sesión
echo json_encode([
    'success' => true,
    'message' => 'Datos recuperados correctamente',
    'data' => $_SESSION['register_data']
]);
```

---

## 🔄 Flujo de Datos

### Flujo del Formulario de Datos Personales

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  get-data.html  │───▶│   get-data.js   │───▶│  get-data.php   │
│   (Formulario)  │    │  (Validación)   │    │ (Recepción PHP) │
└─────────────────┘    └─────────────────┘    └────────┬────────┘
                                                       │
                                                       ▼
                                              ┌─────────────────┐
                                              │    $_SESSION    │
                                              │  ['form_data']  │
                                              └────────┬────────┘
                                                       │
┌─────────────────┐    ┌─────────────────┐    ┌────────▼────────┐
│ show-data.html  │◀───│  show-data.js   │◀───│  show-data.php  │
│ (Visualización) │    │   (Consumo)     │    │ (Entrega JSON)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Flujo del Formulario de Registro

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  register.html  │───▶│   register.js   │───▶│   register.php  │
│   (Formulario)  │    │  (Validación)   │    │ (Recepción PHP) │
└─────────────────┘    └─────────────────┘    └────────┬────────┘
                                                       │
                                                       ▼
                                              ┌─────────────────┐
                                              │    $_SESSION    │
                                              │['register_data']│
                                              └────────┬────────┘
                                                       │
┌─────────────────────┐  ┌────────────────────┐  ┌─────▼─────────────┐
│ register-data.html  │◀─│register-get-data.js│◀─│register-get-data. │
│   (Visualización)   │  │     (Consumo)      │  │  php (JSON)       │
└─────────────────────┘  └────────────────────┘  └───────────────────┘
```

---

## 🚀 Guía de Uso

### Abrir el Proyecto

1. **Iniciar XAMPP** y asegurar que Apache y MySQL estén corriendo

2. **Acceder al proyecto** via navegador:
   ```
   http://localhost/dev/web/aplicaciones-web---2026/
   ```

### Navegación

| Página | URL | Descripción |
|--------|-----|-------------|
| Inicio | `index.html` | Página principal con bienvenida |
| Horóscopo | `horoscopo.html` | Generador dinámico de horóscopo |
| Datos Personales | `get-data.html` | Formulario de datos personales |
| Ver Datos | `show-data.html` | Visualización de datos capturados |
| Registro | `register.html` | Formulario de registro de usuario |
| Ver Registro | `register-data.html` | Visualización de datos de registro |

### Flujo de Uso - Formulario de Datos

1. Ir a `get-data.html`
2. Completar todos los campos obligatorios
3. Si tiene pareja, marcar checkbox y completar campos adicionales
4. Seleccionar situación financiera y laboral
5. Clic en "Enviar"
6. Si todo está correcto, aparece enlace "Ver datos"
7. Clic en "Ver datos" para ir a `show-data.html`

### Flujo de Uso - Registro

1. Ir a `register.html`
2. Completar nombre, apellidos, nick, correo, contraseña
3. Seleccionar género
4. Clic en "Registrarse"
5. Si todo está correcto, aparece enlace "Ver datos"
6. Clic para ver datos en `register-data.html`

---

## 📚 Resumen de Características

| Característica | Descripción | Ubicación |
|---|---|---|
| **Hero Section** | Sección grande con imagen de fondo | index.html, horoscopo.html |
| **Canvas Dinámico** | Dibuja horóscopo con canvas 2D | horoscope.js |
| **Efectos Hover** | Transformaciones CSS al pasar ratón | styles.css |
| **Paleta Neón** | Verde y cyan vibrantes | styles.css |
| **Layout Flexible** | 3 columnas para horóscopo | horoscope.js |
| **Text Wrapping** | Ajuste automático de texto en canvas | horoscope.js |
| **Formularios** | Captura de datos con validación | get-data.html, register.html |
| **Validación JS** | Validación cliente con alertas | get-data.js, register.js |
| **Validación PHP** | Validación servidor con respuestas JSON | get-data.php, register.php |
| **Sesiones PHP** | Persistencia de datos entre páginas | Todos los archivos PHP |
| **Fetch API** | Comunicación asíncrona cliente-servidor | Todos los archivos JS |
| **Campos Condicionales** | Mostrar/ocultar campos dinámicamente | get-data.js |

---

## 📝 Pendientes

- [ ] Color según sexo
- [ ] Paleta de colores
- [ ] Mostrar si son almas gemelas o llamas gemelas

---

**Última actualización:** 10 de febrero de 2026 