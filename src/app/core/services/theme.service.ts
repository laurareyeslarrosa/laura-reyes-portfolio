import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class ThemeService {
  private key = 'theme';

  setTheme(theme: 'light' | 'dark') {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem(this.key, theme);
  }

  initTheme() {
    const saved = localStorage.getItem(this.key) as 'light' | 'dark';
    this.setTheme(saved || 'light');
  }

  toggle() {
    const current = document.body.getAttribute('data-theme');
    this.setTheme(current === 'dark' ? 'light' : 'dark');
  }
}