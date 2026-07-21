import { computed, Injectable, signal } from '@angular/core';

import en from '../../../assets/i18n/en.json';
import es from '../../../assets/i18n/es.json';

type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private readonly storageKey = 'language';
  private readonly translations = {
    en,
    es,
  } as const;

  private readonly _lang = signal<Language>(this.getStoredLanguage());
  readonly lang = this._lang.asReadonly();
  readonly dictionary = computed(() => this.translations[this.lang()]);

  setLang(lang: Language): void {
    localStorage.setItem(this.storageKey, lang);
    this._lang.set(lang);
  }

  private getStoredLanguage(): Language {
    const lang = localStorage.getItem(this.storageKey);
    return lang === 'en' || lang === 'es' ? lang : 'es';
  }

  t(key: string): string {
    const value = key
      .split('.')
      .reduce(
        (obj: any, currentKey: string) => obj?.[currentKey],
        this.dictionary(),
      );

    return typeof value === 'string' ? value : key;
  }
}
