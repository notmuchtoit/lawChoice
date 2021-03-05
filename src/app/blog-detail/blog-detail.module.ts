import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../header/header.module';
import { BlogDetailComponent } from './blog-detail.component';

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
        component: BlogDetailComponent,
      },
    ]),
  ],
  declarations: [BlogDetailComponent],
})
export class BlogDetailModule {}
