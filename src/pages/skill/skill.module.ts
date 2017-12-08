import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkillPage } from './skill';
/**
 * Claire Gizard - 1106363
 */
@NgModule({
  declarations: [
    SkillPage,
  ],
  imports: [
    IonicPageModule.forChild(SkillPage),
  ],
})
export class SkillPageModule {}
