import { Component, computed, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  standalone: true,
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  private readonly i18n = inject(I18nService);

  readonly heroContent = computed(() => this.i18n.dictionary().hero);
}
