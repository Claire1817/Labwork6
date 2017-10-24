import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';
/**
 * Claire Gizard - 1106363
 */
@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
  ],
})
export class ContactPageModule {}
