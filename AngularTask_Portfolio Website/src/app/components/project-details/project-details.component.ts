import { Component } from '@angular/core';
import { Project, ProjectService } from '../../services/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css',
})
export class ProjectDetailsComponent {
  project!: Project;
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.errorMessage = 'Invalid project ID';
      this.isLoading = false;
      return;
    }

    this.projectService.getProjectById(id).subscribe({
      next: (data) => {
        if (data) {
          this.project = data;
        } else {
          this.errorMessage = 'Project not found';
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching project details:', err);
        this.errorMessage = 'Failed to load project details';
        this.isLoading = false;
      },
    });
  }
}
