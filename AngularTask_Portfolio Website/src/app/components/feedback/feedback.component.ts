import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Feedback, SubmissionService } from '../../services/submission.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css',
})
export class FeedbackComponent {
  constructor(private submissionService: SubmissionService) {}

  submitFeedback(form: NgForm) {
    if (form.valid) {
      const feedback: Feedback = form.value;
      this.submissionService.submitFeedback(feedback).subscribe({
        next: (res) => {
          alert('Feedback submitted successfully!');
          form.reset();
        },
        error: (err) => {
          console.error('Error submitting feedback:', err);
          alert(
            'There was an error submitting your feedback. Please try again.'
          );
        },
      });
    }
  }
}
