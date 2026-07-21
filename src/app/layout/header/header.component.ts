import { Component, signal } from '@angular/core';
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
  readonly isDark = signal(false);
  readonly currentLang = signal<'en' | 'es'>('en');

  constructor(
    private readonly themeService: ThemeService,
    private readonly i18n: I18nService,
  ) {
    this.isDark.set(this.themeService.isDark());
    this.currentLang.set(this.i18n.getLang());
  }

  toggleTheme(): void {
    this.themeService.toggle();
    this.isDark.set(this.themeService.isDark());
  }

  changeLanguage(): void {
    const next = this.currentLang() === 'es' ? 'en' : 'es';
    this.i18n.setLang(next);
    this.currentLang.set(next);
  }
}
