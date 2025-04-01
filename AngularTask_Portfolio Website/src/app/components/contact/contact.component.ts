import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  // You can optionally use variables here if you want dynamic data.
  email = 'jaimurugan131003@gmail.com';
  phone = '+91 9940036291';
  instagram = 'jai_mr_13';
  twitter = 'jaimurugan';
  linkedin = 'https://www.linkedin.com/in/jai-murugan-raja-g-5b1a00283/';
}
