import { Component, OnInit } from '@angular/core';
import FaqListing from './../faq/faq.db';
import { arrowBackOutline } from 'ionicons/icons';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FAQDto } from '../faq/faq-dto';

@Component({
  selector: 'app-faq-detail',
  templateUrl: './faq-detail.component.html',
  styleUrls: ['./faq-detail.component.scss'],
})
export class FaqDetailComponent implements OnInit {
  faqs: Array<FAQDto> = FaqListing;
  arrowBackOutline = arrowBackOutline;
  selectedFaq;

  constructor(
    public route: ActivatedRoute,
    public alertController: AlertController,
    public router: Router
  ) {}

  showError(msg: string) {
    this.alertController
      .create({
        header: 'Warning!',
        message: msg,
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              this.router.navigate(['']);
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === 'null') {
      this.showError('You are not choosing an item from the list');
    } else {
      this.selectedFaq = this.faqs.find((issue) => {
        return issue.id === id;
      });
    }
  }
}
