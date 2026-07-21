import { Component, computed, inject, signal } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly themeService = inject(ThemeService);
  private readonly i18n = inject(I18nService);

  readonly isDark = signal(this.themeService.isDark());
  readonly currentLang = this.i18n.lang;
  readonly headerContent = computed(() => this.i18n.dictionary().header);

  toggleTheme(): void {
    this.themeService.toggle();
    this.isDark.set(this.themeService.isDark());
  }

  changeLanguage(): void {
    this.i18n.setLang(this.currentLang() === 'es' ? 'en' : 'es');
  }
}
