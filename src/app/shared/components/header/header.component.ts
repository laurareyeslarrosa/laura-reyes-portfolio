import { Component } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
constructor(private theme: ThemeService) {}

  toggleTheme() {
    this.theme.toggle();
  }

  setLang(lang: 'en' | 'es') {
    console.log('change lang', lang);
  }
}
