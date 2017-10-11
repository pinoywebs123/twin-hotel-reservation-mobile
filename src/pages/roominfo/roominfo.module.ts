import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoominfoPage } from './roominfo';

@NgModule({
  declarations: [
    RoominfoPage,
  ],
  imports: [
    IonicPageModule.forChild(RoominfoPage),
  ],
})
export class RoominfoPageModule {}
