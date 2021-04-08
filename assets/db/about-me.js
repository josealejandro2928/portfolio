let data = {
  name: "José Alejandro",
  lastName: "Concepción Álvarez",
  occupation: "Full Stack Developer, Automation Engineer",
  age: 25,
  email: "jalejandroc2928@gmail.com",
  phone: "+5353613095",
  address: "39 #3022 e/ 30 y 34, La Sierra, Playa, La Habana, Cuba",
  socials: [
    {
      url: "https://www.linkedin.com/in/jalejandroc/",
      class: "fab fa-linkedin",
      name: "Linkedin",
    },
    {
      url: "https://github.com/josealejandro2928",
      class: "fab fa-github",
      name: "Github",
    },
    {
      url: "https://gitlab.com/jalejandro2928",
      class: "fab fa-gitlab",
      name: "Gitlab",
    },
  ],
  resumeText: {
    en: `
    <p>
      Graduated from a degree in Automation Engineering. I work as a full stack developer using technologies based on the Javascript
      programming language. I have also researched in the field of Robotics, leading me to develop projects such as an <strong>Ackermarn Drive Robot</strong>
      with smart features like obstacle avoidance and path planning, as well as building a two wheel <strong> Self-Balancing Robot </strong> that was
      my thesis work. I participated in the ACM International Collegiate Programming Competition (ICPC) several times,
      and my team managed to classify to the regional finals two times. As a result, I acquired knowledge about data structures
      and efficient algorithm design. In addition, I have  experience developing mobile and web application using frameworks
      such as <strong>Angular, React, Nodejs, Express, Flask e Ionic </strong>.
     </p>`,
    es: `
    <p>
      Egresado de la carrera de Ingeniería en Automatización. Trabajo como desarrollador full stack usando tecnologías basadas en Javascript.
      También he investigado en el campo de la Robótica, lo que me ha llevado al desarrollo de proyectos como: El diseño de un
      <strong>Robot con Accionamiento Ackermarn </strong> con tareas como: La evitación de obstáculos y la planificación de trayectorias.
      También implemente un <strong>Robot Autobalanceado de dos Ruedas</strong> en mi trabajo de tesis. Participé en el Concurso Internacional de Programación Colegiada ACM (ICPC) varias veces,
      y mi equipo logró clasificar a la final regional en dos ocasiones. Como resultado, adquirí conocimientos sobre estructuras de datos.
      y diseño de algoritmos eficiente. Además, tengo experiencia en el desarrollo de aplicaciones web y móviles utilizando frameworks.
      como <strong>Angular, React, Nodejs, Express, Flask e Ionic </strong>.
    </p>`,
  },
};
module.exports = data;
