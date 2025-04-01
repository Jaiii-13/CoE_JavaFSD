import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact, SubmissionService } from '../../services/submission.service';

@Component({
  selector: 'app-reactive-contact',
  templateUrl: './reactive-contact.component.html',
  styleUrl: './reactive-contact.component.css',
})
export class ReactiveContactComponent {
  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private submissionService: SubmissionService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const contact: Contact = this.contactForm.value;
      this.submissionService.submitContact(contact).subscribe({
        next: (res) => {
          alert('Message sent successfully!');
          this.contactForm.reset();
        },
        error: (err) => {
          console.error('Error sending message:', err);
          alert('There was an error sending your message. Please try again.');
        },
      });
    }
  }
}
