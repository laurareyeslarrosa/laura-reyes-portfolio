import { Component, computed, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  private readonly i18n = inject(I18nService);

  readonly skillsContent = computed(() => this.i18n.dictionary().skills);
}
