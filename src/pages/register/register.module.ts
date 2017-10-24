import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
/**
 * Claire Gizard - 1106363
 */
@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
  ],
})
export class RegisterPageModule {}
