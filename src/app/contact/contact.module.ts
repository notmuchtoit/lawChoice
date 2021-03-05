import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../header/header.module';
import { ContactComponent } from './contact.component';

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
        component: ContactComponent,
      },
    ]),
  ],
  declarations: [ContactComponent],
})
export class ContactModule {}
