import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookinfoPage } from './bookinfo';

@NgModule({
  declarations: [
    BookinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(BookinfoPage),
  ],
})
export class BookinfoPageModule {}
