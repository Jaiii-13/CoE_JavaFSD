import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  projects: Project[] = [];
  skills: { icon: string; title: string; description: string }[] = [];

  constructor() {}

  ngOnInit(): void {
    // Example static data; replace with API call if needed
    this.projects = [
      {
        title: 'Project One',
        description: 'Description for project one.',
        image: 'assets/project1.jpg',
      },
      {
        title: 'Project Two',
        description: 'Description for project two.',
        image: 'assets/project2.jpg',
      },
      {
        title: 'Project Three',
        description: 'Description for project three.',
        image: 'assets/project3.jpg',
      },
    ];

    this.skills = [
      {
        icon: 'fas fa-code',
        title: 'Web Development',
        description: 'Building scalable web apps.',
      },
      {
        icon: 'fas fa-paint-brush',
        title: 'UI/UX Design',
        description: 'Creating engaging user experiences.',
      },
      {
        icon: 'fas fa-database',
        title: 'Backend Development',
        description: 'Building secure backends.',
      },
      {
        icon: 'fas fa-mobile-alt',
        title: 'Responsive Design',
        description: 'Optimizing for all devices.',
      },
    ];
  }
}
