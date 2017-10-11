import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyreservePage } from './myreserve';

@NgModule({
  declarations: [
    MyreservePage,
  ],
  imports: [
    IonicPageModule.forChild(MyreservePage),
  ],
})
export class MyreservePageModule {}
