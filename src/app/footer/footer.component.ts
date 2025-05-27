import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `<footer class="bg-light text-center py-3"></footer>`,
})
export class FooterComponent {}
