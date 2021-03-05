import { Component, OnInit } from '@angular/core';
import { arrowBackOutline } from 'ionicons/icons';
import { LawyerDTO } from './lawyer-dto';
import lawyerListing from './lawyer.db';

@Component({
  selector: 'app-lawyer',
  templateUrl: './lawyer.component.html',
  styleUrls: ['./lawyer.component.scss'],
})
export class LawyerComponent implements OnInit {
  lawyers: Array<LawyerDTO> = lawyerListing;
  arrowBackOutline = arrowBackOutline;

  constructor() {}

  ngOnInit() {}
}
