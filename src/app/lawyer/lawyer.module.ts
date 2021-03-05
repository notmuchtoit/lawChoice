import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../header/header.module';
import { LawyerComponent } from './lawyer.component';

@NgModule({
  imports: [
    HeaderModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: LawyerComponent,
      },
    ]),
  ],
  declarations: [LawyerComponent],
})
export class LawyerModule {}
