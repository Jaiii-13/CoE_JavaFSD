import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isDarkMode: boolean = localStorage.getItem('theme') === 'dark';

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    // Optionally update a CSS class on body
    document.body.className = this.isDarkMode ? 'dark-mode' : '';
  }
}
