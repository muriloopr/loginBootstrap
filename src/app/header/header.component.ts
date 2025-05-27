import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `<nav class="navbar navbar-light bg-light">
               <a class="navbar-brand" href="#">AdilioGYM</a>
             </nav>`
})
export class HeaderComponent {}
