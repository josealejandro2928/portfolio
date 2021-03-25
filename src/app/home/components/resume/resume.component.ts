import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeComponent implements OnInit {
  resume: any;
  education = [
    {
      title:
        'Biomedical and Automation Faculty, Technological University of Havana (CUJAE)',
      startDate: '2014',
      endDate: '2019',
      description:
        '<strong>Master and Bachelor in Automation Engineering (Single-Cycle, 5 years)</strong>, Biomedical and Automation Faculty, Technological University of Havana (CUJAE), Cuba, granted the “Scientific Merit Award”.',
    },
  ];
  professionalEmployment = [
    {
      title: 'Full Stack Developer in Guajitech',
      startDate: '2019',
      endDate: 'present',
      description: `Frontend and mobile application development using Javascript frameworks like <strong>Angular</strong>,
       <strong>Ionic</strong>, <strong>React</strong>. Backend development
      using <strong>Nodejs</strong> framework with relational and non-relational databases like
       <strong>MySQL</strong> and <strong>MongoDB</strong>.
      Development of several types of applications such as:
      <ul> <li>Dynamic Web Application</li>
      <li>Single Page and Multi-Page Apps (SPA), (MPA)</li>
      <li>Portal Web App</li>
      <li>Web Applications with a Content Management System</li>
      <li>Simulation environments</li>
      <li>E-commerce Web Apps</li>
    <ul>
    `,
    },
    {
      title:
        'Assistant Professor in Technological University of Havana (CUJAE)',
      startDate: '2019',
      endDate: '2020',
      description: `
      <p> <strong>Teaching Microcontroller I</strong>: Internal architecture of the 8051 microcontroller, programming
      in assembly and C language.<p>
      <p> <strong>Teaching Introduction to Matlab I</strong>: Programming at Matlab, Basic concepts, development
      environment, programing problems and simulation of physical processes using the MatLab
      Tool.</p>
    `,
    },
    {
      title: 'Programmer in PiVoT',
      startDate: '2018',
      endDate: '2019',
      description: `
      <p> Startup company with the goal of offering software and hardware solutions to small businesess in Cuba.
      </p>
    `,
    },
  ];

  vocationalEmployment = [
    {
      title:
        'Research Assistant Student in Technological University of Havana (CUJAE)',
      startDate: '2018',
      endDate: '2019',
      description: `Design of a <strong>Two Wheel Self Balancing Robot</strong>: Design of a two wheel self-balancing robot
      based on the Arduino microcontroller, development of PID algorithms, complementary filter,
      and Kalman filter. (<a href="https://youtu.be/dg8ftpSStIc" target="_blank">https://youtu.be/dg8ftpSStIc<a>)
    `,
    },
    {
      title:
        'Research Assistant Student in Technological University of Havana (CUJAE)',
      startDate: '2018',
      endDate: '2019',
      description: `Development of a <strong>simulator for an inverted pendulum system</strong>: Development of simulation
      software for the kinematics of an inverted pendulum system on wheels. Testing of PID
      control algorithms.(<a href="https://youtu.be/O6BeBPsemHU" target="_blank">https://youtu.be/O6BeBPsemHU<a>)
    `,
    },
    {
      title: 'Assistant Student in Technological University of Havana (CUJAE)',
      startDate: '2017',
      endDate: '2018',
      description: `Teaching <strong>Machine Learning</strong>: Neural Networks, Genetic Algorithms and Support Vector
      Machines and Programming I: C++ programming language.
    `,
    },
    {
      title:
        'Research Assistant Student in Technological University of Havana (CUJAE)',
      startDate: '2016',
      endDate: '2018',
      description: `Designing a <strong>Robotic Platform with Ackerman steering geometry</strong> and
      Development of <strong>Tracking and Path Planing Algorithms</strong> for Wheeled Mobile Robots.
      (<a href="https://https://youtu.be/Kv2xxKv3fYU" target="_blank">https://https://youtu.be/Kv2xxKv3fYU<a>)
    `,
    },
    {
      title: 'Assistant Student in Technological University of Havana (CUJAE)',
      startDate: '2015',
      endDate: '2016',
      description: `Teaching <strong>Object-oriented programming</strong>: Introduction to the C ++ language, fundamental
      characteristics, functions, classes, inheritance, polymorphisms, data structures and algorithms
    `,
    },
  ];

  skills = [
    { name: 'JavaScript', value: 95 },
    { name: 'HTML', value: 92 },
    { name: 'CSS', value: 90 },
    { name: 'TypeScript', value: 85 },
    { name: 'Python', value: 60 },
    { name: 'C++', value: 50 },
    { name: 'Angular', value: 90 },
    { name: 'React', value: 60 },
    { name: 'Nodejs', value: 85 },
    { name: 'Material', value: 80 },
    { name: 'Bootstrap', value: 60 },
    { name: 'Git', value: 70 },
    { name: 'Robotic', value: 75 },
    { name: 'Arduino', value: 80 },
    { name: 'MySql', value: 70 },
    { name: 'MongoDB', value: 60 },
    { name: 'Rest api', value: 75 },
    { name: 'Linux', value: 60 },
  ];

  @Input() set _resume(value) {
    if (value) {
      this.resume = value;
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
