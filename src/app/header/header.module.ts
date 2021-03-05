import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MyHeaderComponent } from './my-header.component';
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [MyHeaderComponent],
  exports: [MyHeaderComponent],
})
export class HeaderModule {}
