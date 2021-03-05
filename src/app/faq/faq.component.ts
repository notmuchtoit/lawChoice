import { Component, OnInit } from '@angular/core';
import FaqListing from './faq.db';
import { arrowBackOutline, informationCircleOutline } from 'ionicons/icons';
import { FAQDto } from './faq-dto';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  faqs: Array<FAQDto> = FaqListing;
  arrowBackOutline = arrowBackOutline;
  informationCircleOutline = informationCircleOutline;
  constructor() {}

  ngOnInit() {}
}
