import { Injectable, signal } from '@angular/core';
import en from '../../../assets/i18n/en.json';
import es from '../../../assets/i18n/es.json';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private key = 'language';
  private translations = { en, es };
  private lang = signal<'es' | 'en'>(this.getLang());

  setLang(lang: 'en' | 'es') {
    localStorage.setItem(this.key, lang);
    this.lang.set(lang);
  }

  getLang(): 'en' | 'es' {
    return (localStorage.getItem(this.key) as 'en' | 'es') || 'es';
  }

  t(key: string): string {
    return (
      key
        .split('.')
        .reduce(
          (obj: any, k: string) => obj?.[k],
          this.translations[this.lang()],
        ) || key
    );
  }
}
