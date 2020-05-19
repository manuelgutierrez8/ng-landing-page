import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact_form: FormGroup;
  contactInfo = {
    name: '',
    email: '',
    message: ''
  }

  errorMessage = '';
  formSubmitted = false;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contact_form = fb.group({
      'name': [this.contactInfo.name, Validators.compose([Validators.required])],
      'email': [this.contactInfo.email, Validators.compose([Validators.required, Validators.email])],
      'message': [this.contactInfo.message, Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {

  }

  submitForm() {
    if (this.contact_form.valid) {
      this.contactInfo = {
        name: this.contact_form.get('name').value,
        email: this.contact_form.get('email').value,
        message: this.contact_form.get('message').value,
      }

      this.contactService.postContact(this.contactInfo).subscribe(response => {
        if (response.status == 200) {
          this.formSubmitted = true;
        }
        console.log(response);
      }, err => {
        this.errorMessage = err.status + ' - ' + err.message;
      });
    }
  }

}
