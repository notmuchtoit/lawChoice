import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LawyerDTO } from '../lawyer/lawyer-dto';
import lawyerListing from '../lawyer/lawyer.db';
import { arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-lawyer-detail',
  templateUrl: './lawyer-detail.component.html',
  styleUrls: ['./lawyer-detail.component.scss'],
})
export class LawyerDetailComponent implements OnInit {
  lawyers: Array<LawyerDTO> = lawyerListing;
  arrowBackOutline = arrowBackOutline;
  selectedLawyer;
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
      this.selectedLawyer = this.lawyers.find((lawyer) => {
        return lawyer.id === id;
      });
    }
  }
}
