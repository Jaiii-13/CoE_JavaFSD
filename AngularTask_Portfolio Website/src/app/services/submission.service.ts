import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// Define interfaces for feedback and contact submission
export interface Feedback {
  name: string;
  message: string;
}

export interface Contact {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class SubmissionService {

  // JSON Server endpoints (ensure your JSON Server db.json has these collections)
  private feedbackUrl = 'http://localhost:4500/feedback';
  private contactUrl = 'http://localhost:4500/enquiries';

  constructor(private http: HttpClient) { }

  // POST a new feedback entry
  submitFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(this.feedbackUrl, feedback);
  }

  // POST a new contact enquiry
  submitContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactUrl, contact);
  }
}
