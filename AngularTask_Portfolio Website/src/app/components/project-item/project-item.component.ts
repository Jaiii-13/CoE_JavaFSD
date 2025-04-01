import { Component, Input } from '@angular/core';
import { Project } from '../../services/project.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css',
})
export class ProjectItemComponent {
  @Input() project!: Project;
}
