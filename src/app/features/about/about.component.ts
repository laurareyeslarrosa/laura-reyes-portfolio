import { Component, computed, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private readonly i18n = inject(I18nService);

  readonly aboutContent = computed(() => this.i18n.dictionary().about);
}
