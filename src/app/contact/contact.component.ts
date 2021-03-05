import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  name = '';
  email = '';
  message = '';

  constructor(
    private formBuilder: FormBuilder,
    public alertController: AlertController
  ) {}

  showError() {
    this.alertController
      .create({
        header: 'Form Error',
        subHeader: 'Form incomplete',
        message:
          'There was an error with the form, please complete and try again.',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              console.log('dismiss');
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      message: [null, Validators.required],
    });
  }

  onFormSubmit() {
    if (this.contactForm.valid) {
      console.log(
        this.contactForm.value.name,
        this.contactForm.value.email,
        this.contactForm.value.message
      );
    } else {
      console.log('errors');
      this.showError();
    }
  }
}
