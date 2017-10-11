import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HotelProvider } from '../../providers/hotel/hotel';


@IonicPage()
@Component({
  selector: 'page-roominfo',
  templateUrl: 'roominfo.html',
})
export class RoominfoPage {
  data: any;
  info: any;
  room: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public hotelProv : HotelProvider) {
    this.data = this.navParams.data;
  }

  ionViewDidEnter() {
     this.hotelProv.getRooms2(this.data).subscribe(info => {
      console.log(this.info = info.data);
    });

   
  }

}
