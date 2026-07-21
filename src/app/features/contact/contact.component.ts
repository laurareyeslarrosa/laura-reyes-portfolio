import { Component, computed, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly i18n = inject(I18nService);

  readonly contactContent = computed(() => this.i18n.dictionary().contact);
}
