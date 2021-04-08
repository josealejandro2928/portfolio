let allProject = [
  {
    name:
      "Ecommerce Platform for the cuban startup Guajitech. Allows B2C and B2B business modalities.",
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
      en: ` Ecommerce management system.
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
    url: "www.sinkoola.com",
    Files: [
      { file: "ecommerce/1.jpeg", type: "image", id: "1" },
      { file: "ecommerce/2.jpeg", type: "image", id: "2" },
      { file: "ecommerce/3.jpeg", type: "image", id: "3" },
      { file: "ecommerce/4.jpeg", type: "image", id: "4" },
      { file: "ecommerce/5.jpeg", type: "image", id: "5" },
    ],
    category: "web sites",
  },
  {
    name: "Multimedia streaming web application.",
    description: {
      es: `Sistema de gestión para un sitio de multimedia. La aplicacioón utiliza la librería dashjs para la generación del streaming.
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
      Tiene una sección de noticias y un blog, para lograr la mayor interacción de los usuarios.
      <p>El sistema tiene una administración donde los usuarios administradores suben y editan todo el contenido de la página</p>`,

      en: `Institutional website, contains all the sections that describe the company Gaviota SA.
      It has a news section and a blog, to achieve the greatest user interaction.
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
    name:
      "Two Wheel Self Balancing Robot",
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
    useStacks: [
      "C++",
      "Ionic",
      "Arduino",
      "HTML5",
      "CSS3",
    ],
    url: "",
    Files: [
      { file: "https://www.youtube.com/embed/dg8ftpSStIc", type: "externalMedia", id: "1" },
      { file: "https://www.youtube.com/embed/mijxUfsSrdE", type: "externalMedia", id: "2" },
      { file: "https://www.youtube.com/embed/O6BeBPsemHU", type: "externalMedia", id: "3" },
    ],
    category: "robotics",
  },
];

module.exports = allProject;
