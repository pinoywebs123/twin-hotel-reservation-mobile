import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatRoomPage } from './cat-room';

@NgModule({
  declarations: [
    CatRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(CatRoomPage),
  ],
})
export class CatRoomPageModule {}
