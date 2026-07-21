import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, projects } from '../../data/projects';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private readonly i18n = inject(I18nService);
  readonly projects: Project[] = projects;
  protected readonly currentLang = this.i18n.lang;
}
