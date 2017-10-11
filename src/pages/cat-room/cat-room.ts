import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HotelProvider } from '../../providers/hotel/hotel';
import { RoominfoPage } from '../roominfo/roominfo';
import { AlertController } from 'ionic-angular';
import { BookinfoPage } from '../bookinfo/bookinfo';
import { LoginPage } from '../login/login';
@IonicPage()
@Component({
  selector: 'page-cat-room',
  templateUrl: 'cat-room.html',
})
export class CatRoomPage {
  rooms : any;
  
  data: any;
  price: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public hotelProv : HotelProvider ,public alertCtrl: AlertController) {
    this.data = navParams.get("param1");
    this.price = navParams.get("param2");
  }

  ionViewDidEnter() {
    this.hotelProv.getRooms(this.data).subscribe(rooms => {
      console.log(this.rooms = rooms);
    });
    
  }

  clickRoom(cat_id){
    this.navCtrl.push(RoominfoPage, cat_id);
   
  }

  clickBook(id){
    if(localStorage.getItem("token") == "" || localStorage.getItem("token") == null){
      this.navCtrl.push(LoginPage);
     
    }else{
      this.navCtrl.push(BookinfoPage, {param1: id, param2: this.price});
    }
    
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Note:',
      subTitle: 'You need to pay after 24 hours or else reservation will be void. Thank You!',
      buttons: ['OK']
    });
    alert.present();
  }

}
