import { Injectable } from '@angular/core';
import en from '../../assets/i18n/en.json';
import es from '../../assets/i18n/es.json';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private lang: 'en' | 'es' = 'en';
  private translations = { en, es };

  setLang(lang: 'en' | 'es') {
    this.lang = lang;
  }

  t(key: string): string {
    return key.split('.').reduce((obj: any, k: string) => obj?.[k], this.translations[this.lang]) || key;
  }
}s