import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { I18nService } from '../../core/services/i18n.service';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly i18n = inject(I18nService);
  private readonly http = inject(HttpClient);
  readonly contactContent = computed(() => this.i18n.dictionary().contact);

  private readonly formspreeEndpoint = 'https://formspree.io/f/xzdnyoja';

  // Datos del formulario
  formData: ContactForm = {
    name: '',
    email: '',
    message: '',
  };

  // Estados del formulario
  isSending = false;
  showSuccess = false;
  showError = false;

  onSubmit(form: NgForm) {
    if (this.isSending) return;

    this.isSending = true;
    this.showSuccess = false;
    this.showError = false;

    this.http.post(this.formspreeEndpoint, this.formData).subscribe({
      next: (response) => {
        console.log('Email enviado:', response);
        this.isSending = false;
        this.showSuccess = true;
        form.resetForm();

        setTimeout(() => {
          this.showSuccess = false;
        }, 5000);
      },
      error: (error) => {
        console.error('Error al enviar:', error);
        this.isSending = false;
        this.showError = true;

        setTimeout(() => {
          this.showError = false;
        }, 7000);
      },
    });
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: '',
    };
  }
}
