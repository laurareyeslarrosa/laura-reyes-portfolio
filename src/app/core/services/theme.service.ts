import { Injectable } from '@angular/core';

export type ThemeName = 'sunset' | 'night';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private key = 'theme';

  setTheme(theme: ThemeName) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem(this.key, theme);
  }

  initTheme() {
    const saved = localStorage.getItem(this.key) as ThemeName | null;
    this.setTheme(saved ?? 'sunset');
  }

  toggle() {
    const current = this.getTheme();
    this.setTheme(current === 'night' ? 'sunset' : 'night');
  }

  getTheme(): ThemeName {
    return (document.body.getAttribute('data-theme') as ThemeName | null) ?? 'sunset';
  }

  isDark(): boolean {
    return this.getTheme() === 'night';
  }
}
