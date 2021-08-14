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
    {
      url: "https://www.npmjs.com/~jalejandro2928",
      class: "fab fa-npm",
      name: "Npm",
    },
  ],
  resumeText: {
    en: `
    <div>
    Graduated in Automation Engineering.
    <strong><p>As a software developer:</p></strong>
    <ul>
       <li>
       3 years of experience developing web applications using frameworks such
       as: <strong>Angular</strong>(3), <strong>Vue</strong>(1) and <strong>React</strong>(1).
       </li>
       <li>
       2 years of backend developer using <strong>NodeJs, ExpressJs, MySQL and MongoDB</strong>.
       </li>
       <li>
       Strong Javascript programming skills.
       </li>
       <li>
       Proficiency in HTML5 and CSS for creating user interfaces and user experience.
       </li>
       <li>
       Work with agile development methodologies.
       </li>
    </ul>
    <strong><p>As a university student:</p></strong>
    <p>I have done research in the field of Robotics where I have developed prototypes of mobile robots such as: Ackerman Drive Robot and Two-Wheeled Self-Balancing Robot.
    I have participated several times in the ACM International Collegiate Programming Competition (ICPC) which allowed me to acquire knowledge about data structures and efficient algorithm design.
    </p>

     </div>`,
    es: `
    <div>
      Graduado en Ingeniería en Automática.
      <strong><p>Como desarrollador de software:</p></strong>
      <ul>
        <li>
        3 años de experiencia en el desarrollo de aplicaciones web utilizando frameworks como
        como: <strong>Angular</strong>(3), <strong>Vue</strong>(1) y <strong>React</strong>(1).
        </li>
        <li>2 años de desarrollador backend utilizando <strong>NodeJs, ExpressJs, MySQL y MongoDB</strong>.</li>
        <li>
        Sólidos conocimientos de programación en Javascript.
        </li>
        <li> Dominio de HTML5 y CSS para crear interfaces de usuario y experiencia de usuario.</li>
        <li>Trabajo con metodologías ágiles de desarrollo de software.</li>
      </ul>
      <strong><p>Como estudiante universitario:</p>
      </strong>
      <p>He investigado en el campo de la Robótica donde he desarrollado prototipos de robots móviles como: Robot con Accionamiento Ackerman
      y Robot Autobalanceado de solo dos ruedas.
      He participado varias veces en la ACM International Collegiate Programming Competition (ICPC) lo que me permitió adquirir
      conocimientos sobre estructuras de datos y diseño eficiente de algoritmos .
      </p>
    </div> `,
  },
};
module.exports = data;
