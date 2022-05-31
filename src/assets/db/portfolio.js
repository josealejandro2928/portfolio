let allProject = [
  {
    name: "Linux Search Everything: A faster and more flexible file browser for Linux",
    description: {
      en: `A faster and more flexible file browser for Linux. It offers rich capabilities such as case sensitivity,
      regular expression-based search, search by selecting multiple file types, control of the algorithm's depth, and more.
      Also, it allows the choice of custom files not to be taken into account in the search process to improve the search speed.
      <p>It was made using the Electron framework. The UI was created with Reactjs version 18, using the new concurrency capabilities in this new release.
       Redux library was used as the global state feature.</p>
      `,
      es: `A faster and more flexible file browser for Linux. It offers rich capabilities such as case sensitivity,
      regular expression-based search, search by selecting multiple file types, control of the algorithm's depth, and more.
      Also, it allows the choice of custom files not to be taken into account in the search process to improve the search speed.
      <p>It was made using the Electron framework. The UI was created with Reactjs version 18, using the new concurrency capabilities in this new release.
       Redux library was used as the global state feature.</p>
        `,
    },
    useStacks: ["Electron", "NodeJs", "React", "Redux"],
    url: "github.com/josealejandro2928/01-Linux-Search-Everything-Documentation",
    Files: [
      {
        file: "https://www.youtube.com/embed/6iVXQYM4GPg",
        type: "externalMedia",
        id: "0",
      },
    ],
    category: "desktop",
  },
  {
    name: "Simple image editor in the browser form compress, reformat and resize your image",
    description: {
      es: `Herramienta para comprimir, recortar y cambiar de formato imágenes en el navegador de una manera sencilla.
      Creada completamente en javascript, es compatible con todos los navegadores.
      Esta aplicación web permite al usuario realizar las siguientes operaciones en el navegador:
      <ul>
        <li>Sube una imagen y cambia su formato entre: png, webp, jpeg.</li>
        <li>Cambia el porcentaje de calidad de la imagen para reducir su tamaño.</li>
        <li>Cambia el tamaño del ancho y el alto de la imagen.</li>
        <li>Recorta la imagen.</li>
       </ul>
      `,

      en: `Tool to compress, crop and change the format of images in the browser in a simple way. Created entirely in javascript,
       it is compatible with all browsers.
       This web application allows the user to perform the following operations in the browser:
      <ul>
        <li>Upload an image and change its format between: png, webp, jpeg.</li>
        <li>Change the quality percentage of the image to reduce its size.</li>
        <li>Resize the width and height of the image.</li>
        <li>Crop the image.</li>
       </ul>

      `,
    },
    useStacks: ["Angular", "JavaScript", "HTML5", "CSS3"],
    url: "ngp-image-picker.surge.sh",
    Files: [
      { file: "images-editor/1.jpeg", type: "image", id: "1" },
      { file: "images-editor/2.png", type: "image", id: "2" },
      { file: "images-editor/3.png", type: "image", id: "3" },
      { file: "images-editor/4.png", type: "image", id: "4" },
      { file: "images-editor/5.png", type: "image", id: "5" },
    ],
    category: "web sites",
  },
  {
    name: "React Pokedex Web Page",
    description: {
      en: `It is a sample project for testing frontend skills using react library.
      Simple React app for searching Pokemons
      The app was generated using create-react-app with **typescripts** and **scss**.
      No external CSS framework was used. Only fontawesome and google font CDN was used in the project.`,
      es: `Es un proyecto de ejemplo para probar las habilidades de frontend usando la biblioteca de react.
      Simple aplicación React para buscar Pokemons
      La aplicación fue generada usando create-react-app con **typescripts** y **scss**.
      No se utilizó ningún framework CSS externo. Sólo se utilizó fontawesome y google font CDN en el proyecto.
      `,

    },
    useStacks: ["React", "JavaScript","TypeScript", "HTML5", "CSS3"],
    url: "react-my-pokedex.surge.sh",
    Files: [
      { file: "pokedex/1.jpeg", type: "image", id: "1" },
      { file: "pokedex/2.jpeg", type: "image", id: "2" },
      { file: "pokedex/3.jpeg", type: "image", id: "3" },
      { file: "pokedex/4.jpeg", type: "image", id: "4" },
    ],
    category: "web sites",
  },
  {
    name: "Two Wheel Self Balancing Robot",
    description: {
      es: `En este trabajo se diseña y construye un robot autobalanceado sobre dos
      ruedas basado en el microcontrolador Arduino. Para el control de equilibrio
      se implementa un algoritmo de tipo PID en cascada. Se aplican diferentes
      técnicas de filtrado digital para la obtención del ángulo de inclinación, como
      el Filtro Complemento. Para implementar un controlador PID en cascada,
      se combinan eficientemente las lecturas de encoders y sensores inerciales que
      permiten la medición de velocidad del robot. Se construye un prototipo y se le desarrolla una aplicacion movil para u control manual,
      lectura de sensores y asignacion de coordenadas.`,

      en: `In this work, a two wheels self-balancing robot is developed. For stability
      control, different algorithms based on PID controllers are evaluated,
      especially cascaded PID controllers. Different digital filtering techniques are
      applied to obtain the inclination angle, such as the Complement Filter. In
      order to implement a cascaded PID controller, the Kalman filter is implemented
      to efficiently combine the readings of encoders and inertial sensors,
      obtaining the robot’s speed measurement.A prototype is built and a mobile application is developed for manual control,
      sensor reading and coordinate assignment.
      `,
    },
    useStacks: ["C++", "Ionic", "Arduino", "HTML5", "CSS3"],
    url:
      "github.com/josealejandro2928/Self-Balancing-Arduino-Robot-Controller",
    Files: [
      {
        file: "https://www.youtube.com/embed/NTQIz3hWsak",
        type: "externalMedia",
        id: "0",
      },
      {
        file: "https://www.youtube.com/embed/dg8ftpSStIc",
        type: "externalMedia",
        id: "1",
      },
      {
        file: "https://www.youtube.com/embed/mijxUfsSrdE",
        type: "externalMedia",
        id: "2",
      },
      {
        file: "https://www.youtube.com/embed/O6BeBPsemHU",
        type: "externalMedia",
        id: "3",
      },
    ],
    category: "robotics",
  },
  {
    name: "Mobile application for the control of a self-balancing robot",
    description: {
      es: `Utilizando <strong> El Framework Ionic </strong>, se desarrolló una aplicación para controlar un robot autoequilibrado a partir del uso de bluetooth.
       El dispositivo se comunica con la placa Arduino Mega que tiene el módulo bluetooth incorporado HC-06`,

      en: `Using <strong> The Ionic Framework</strong> an application was developed to control a self-balancing robot from the use of bluetooth.
      The device communicates with the Mega Arduino board that has the built-in bluetooth module HC-06
      `,
    },
    useStacks: ["Ionic", "React", "TypeScript", "HTML5", "CSS3"],
    url:
      "github.com/josealejandro2928/ionic-react-mobile-app-self-balancing-robot",
    Files: [
      { file: "self-controller/1.png", type: "image", id: "1" },
      { file: "self-controller/2.png", type: "image", id: "2" },
      { file: "self-controller/3.png", type: "image", id: "3" },
      { file: "self-controller/4.png", type: "image", id: "4" },
    ],
    category: "mobile apps",
  },
  {
    name:
      "Development of an ecommerce system with B2B and B2C business models for the Mercedez Benz agency in Cuba.",
    description: {
      es: `Sistema de gestión de tiendas online.
          Permite las relaciones comerciales B2B y B2C.
          Características fundamentales:
          <ul>
            <li> Integración con múltiples pasarelas. </li>
            <li> Sistemas de notificación y correo. </li>
            <li> Control de inventario </li>
            <li> Customización de productos, marcas, categorías, tarifas de envío y reglas de cancelación </li>
            <li> Venta directa en la administración. </li>
          </ul>`,
      en: `Ecommerce management system.
        Allows B2B and B2C business relationships.
        Key Features:
        <ul>
          <li> Integration with multiple gateways. </li>
          <li> Mail and notification systems. </li>
          <li> Inventory control </li>
          <li> Customization of products, brands, categories, shipping rates and cancellation rules </li>
          <li>  Sale in the administration site. </li>
        </ul>`,
    },
    useStacks: ["Angular", "NodeJS", "Javascript", "CSS", "HTML", "MySQL"],
    url: "tienda.mcvcommercial.com",
    Files: [
      { file: "ecommerce/1.jpeg", type: "image", id: "1" },
      { file: "ecommerce/2.jpeg", type: "image", id: "2" },
      { file: "ecommerce/3.jpeg", type: "image", id: "3" },
      { file: "ecommerce/4.jpeg", type: "image", id: "4" },
      { file: "ecommerce/5.jpeg", type: "image", id: "5" },
      { file: "ecommerce/6.jpeg", type: "image", id: "6" },
      { file: "ecommerce/7.jpeg", type: "image", id: "7" },
      { file: "ecommerce/8.jpeg", type: "image", id: "8" },
    ],
    category: "web sites",
  },
  {
    name: "Multimedia streaming web application.",
    description: {
      es: `Sistema de gestión para un sitio web de multimedia. La aplicación utiliza la librería dashjs para la generación del streaming.
      <p>El sistema le premite a los usuarios subscribirse a la plataforma,
      interactuar con los videos(me gusta, no me gusta, adicionar a favoritos), realizar comentarios y
       realizar búsquedas por categorías.</p>
      La administración permite gestionar que bitrate usar y con que resoluciones subir el video`,
      en: `Management system for a multimedia site. The application uses the dashjs library to generate the streaming.
      <p> The system allows users to subscribe to the platform,
      interact with the videos (like, dislike, add to favorites), make comments and
       search by categories. </p>
      The administration allows you to manage which bitrate to use and with what resolutions to upload the video
      `,
    },
    useStacks: [
      "Nodejs",
      "Angular",
      "MySQL",
      "MongoDB",
      "Dashjs",
      "Plyr.js",
      "HTML5",
      "CSS3",
    ],
    url: "tv.cubaeduca.cu",
    Files: [
      { file: "cubaeduca-tv/1.jpeg", type: "image", id: "1" },
      { file: "cubaeduca-tv/2.jpeg", type: "image", id: "2" },
      { file: "cubaeduca-tv/3.jpeg", type: "image", id: "3" },
      { file: "cubaeduca-tv/4.jpeg", type: "image", id: "4" },
      { file: "cubaeduca-tv/5.jpeg", type: "image", id: "5" },
      { file: "cubaeduca-tv/6.jpeg", type: "image", id: "6" },
      { file: "cubaeduca-tv/7.jpeg", type: "image", id: "7" },
    ],
    category: "web sites",
  },
  {
    name:
      "Content management system for the website of the Cuban company Gaviota SA",
    description: {
      es: `Página web institucional, contiene todas las secciones que describen la empresa Gaviota SA.
      Tiene una sección de noticias y un blog para lograr la mayor interacción de los usuarios.
      <p>El sistema cuenta con una administración donde los usuarios suben y editan todo el contenido de la página</p>`,

      en: `Institutional website, contains all the sections that describe the company Gaviota SA.
      It has a news section and a blog to achieve the greatest user interaction.
      <p> The system has an administration where administrative users upload and edit all the content of the page </p>
      `,
    },
    useStacks: [
      "Nodejs",
      "Angular",
      "MySQL",
      "CKeditor",
      "Material",
      "HTML5",
      "CSS3",
    ],
    url: "gaviota-grupo.com",
    Files: [
      { file: "gaviota-grupo/1.jpeg", type: "image", id: "1" },
      { file: "gaviota-grupo/2.jpeg", type: "image", id: "2" },
      { file: "gaviota-grupo/3.jpeg", type: "image", id: "3" },
      { file: "gaviota-grupo/4.jpeg", type: "image", id: "4" },
      { file: "gaviota-grupo/5.jpeg", type: "image", id: "5" },
    ],
    category: "landing pages",
  },

  {
    name: "Hotels and Events management system for the Havanatur SA company",
    description: {
      es: `
        El sistema permite la gestión de experiencias de un solo día en una administración.
        Con un diseño de creación basado en airbnb, el usuario crea su experiencia en 5 pasos.
        Permite la gestión de Agencias y Contratos.
        <p> El sitio de ventas ofrece al usuario la posibilidad de búsqueda y compra con varias pasarelas de pagos. </p>
      `,

      en: `
      The system allows the management of experiences of a single day in an administration.
      With an airbnb-based creation design, the user creates their experience in 5 steps.
      It allows the management of Agencies and Contracts.
      <p> The sales site offers the user the possibility of searching and purchasing with various payment gateways. </p>
      `,
    },
    useStacks: ["Nodejs", "Angular", "MySQL"],
    url: "www.havanatur.cu/",
    Files: [
      { file: "experiencias/1.jpeg", type: "image", id: "1" },
      { file: "experiencias/2.jpeg", type: "image", id: "2" },
      { file: "experiencias/4.jpeg", type: "image", id: "4" },
      // { file: "experiencias/5.jpeg", type: "image", id: "5" },
      // { file: "experiencias/6.jpeg", type: "image", id: "6" },
      { file: "experiencias/7.jpeg", type: "image", id: "7" },
      { file: "experiencias/8.jpeg", type: "image", id: "8" },
      { file: "experiencias/9.jpeg", type: "image", id: "9" },
    ],
    category: "web sites",
  },
  {
    name: "Autonomous navigation on a robot with Ackerman drive",
    description: {
      es: `En este video se prueba el algoritmo de seguimiento de un punto en un robot con accionamiento Ackerman.
      La interfaz grafica se implemento utilizando las tecnologias HTML5, CCS3 y jQuery, esta permite enviar al robot el punto deseado a partir de una referencia local con respecto a su punto de partida. La visualización  del movimiento del mismo se logró utilizando la libreria Canvas.
      El robot presenta un Arduino Mega para el control del motor de DC en la tracción y el motor de paso en la direccion.
      Además del procesamiento de los encoders de efecto Hall acoplados al motor de DC y de los sensores inerciales para el posicionamiento.
      La comunicacon entre la pc y el robot se logra a traves de un api desarrollado en python dentro de una raspberry Pi3.
      La misma gestiona todas las peticiones del cliente en la computadora, y devuelve el estado del robot ademas que interpreta
      los comandos y las coordernadas para la navegacion autonoma.`,

      en: `In this video we test the point tracking algorithm on an Ackerman powered robot.
      The graphical interface was implemented using HTML5, CCS3 and jQuery technologies, it allows to send the robot the desired point from a local reference with respect to its starting point. The visualization of its movement was achieved using the Canvas library.
      The robot features an Arduino Mega for controlling the DC motor in the traction and the stepper motor in the direction.
      In addition to processing the Hall effect encoders coupled to the DC motor and inertial sensors for positioning.
      The communication between the pc and the robot is achieved through an api developed in python inside a raspberry Pi3.
      It manages all client requests on the computer, and returns the status of the robot as well as interprets
      commands and coordinates for autonomous navigation.
      `,
    },
    useStacks: ["Python", "JQuery", "JavaScript", "Flask", "HTML5", "CSS3"],
    url: "",
    Files: [
      {
        file: "https://www.youtube.com/embed/Kv2xxKv3fYU",
        type: "externalMedia",
        id: "1",
      },
    ],
    category: "robotics",
  },

  {
    name: "My portfolio",
    description: {
      es: `Mi propio sitio web, donde puedes encontrar la información tecnica acerca de mi, mis habilidades,
      resumen laboral y los ejemplos de trabajos realizados`,

      en: `My own website, where you can find technical information about me, my skills,
       job summary and examples of jobs done
      `,
    },
    useStacks: ["Angular", "TypeScript", "HTML5", "CSS3"],
    url: "josealejandro2928.github.io/portfolio/",
    Files: [
      { file: "portfolio/1.jpeg", type: "image", id: "1" },
      { file: "portfolio/2.jpeg", type: "image", id: "2" },
      { file: "portfolio/3.jpeg", type: "image", id: "3" },
      { file: "portfolio/4.jpeg", type: "image", id: "4" },
    ],
    category: "landing pages",
  },
  {
    name: "Simple Chat Ionic App",
    description: {
      es: `Aplicación de mensajería instantánea desarrollada en Ionic. Utiliza socket io para la comunicación en tiempo real.`,

      en: `Instant messaging application developed in Ionic. It uses socket io for real-time communication.`,
    },
    useStacks: ["Ionic", "NodeJs", "socket-io", "HTML5", "CSS3"],
    url: "github.com/josealejandro2928/simple-chat",
    Files: [
      { file: "simple-chat/1.jpeg", type: "image", id: "1" },
      { file: "simple-chat/2.jpeg", type: "image", id: "2" },
      { file: "simple-chat/3.jpeg", type: "image", id: "3" },
      { file: "simple-chat/4.jpeg", type: "image", id: "3" },
    ],
    category: "mobile apps",
  },
];

module.exports = allProject;
