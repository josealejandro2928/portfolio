let data = {
  name: "José Alejandro",
  lastName: "Concepción Álvarez",
  occupation: "Computer Science PhD student at GSSI | Software Developer | Automation Engineer",
  age: 26,
  email: "jalejandroc2928@gmail.com",
  phone: "+393518182513",
  address: "L'Aquila, Italy",
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
      <p>I have a degree in Automation Engineering and I am currently enrolled in a Ph.D. program in Computer Science.</p>
      <p style="font-weight:500">As a software developer:</p>
      <p>I have three years of experience developing web applications using JavaScript and Python frameworks.
        I have developed different complex interfaces for the UI and created several services for the backend.
        I have created mobile applications for controlling cyber-physical systems. All the experience accumulated was under agile work methodologies.
      </p>
      <p style="font-weight:500">As a university student:</p>
      <p>I have researched in the robotics field, working on and developing prototypes of wheeled mobile robots.
      I have participated in the ACM International Collegiate Programming Competition (ICPC), where I solved programming problems that require
      algorithm and data structure knowledge.</p>
    </div>
    `,
    es: `
    <div>
    <p>Tengo un título en Ingeniería de Automatización y actualmente estoy cursando un Ph.D. programa en Cibernética.</p>
    <p style="font-weight:500">Como desarrollador de software:</p>
    <p>Tengo tres años de experiencia en el desarrollo de aplicaciones web utilizando frameworks JavaScript y Python.
      He desarrollado diferentes interfaces en entorno Web y Android y he desarrollado varios servicios en el backend.
      He creado aplicaciones móviles para el control de sistemas ciberfísicos. Toda la experiencia acumulada fue bajo metodologías ágiles de trabajo.
    </p>
    <p style="font-weight:500">Como estudiante universitario:</p>
    <p>He investigado en el campo de la robótica, trabajando y desarrollando prototipos de robots móviles con ruedas.
    He participado en la ACM International Collegiate Programming Competition (ICPC), donde resolví problemas de programación que requieren
    conocimiento de algoritmos y estructuras de datos.</p>
  </div> `,
  },
};
module.exports = data;
