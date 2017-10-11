import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HotelProvider } from '../../providers/hotel/hotel';
import { CatRoomPage } from '../cat-room/cat-room';
import { LoginPage } from '../login/login';
import { MyreservePage } from '../myreserve/myreserve';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cat : any;
  hotel : any;
  
  constructor(public navCtrl: NavController,public hotelProv : HotelProvider,  public navParams: NavParams) {
    this.hotel = "room";
  }

  ionViewDidEnter(){
    this.hotelProv.getCategory().subscribe(cat => {
      console.log(this.cat = cat.data);
    });

   
    
  }

  clickCat(id, price){
    this.navCtrl.push(CatRoomPage, {param1: id, param2: price});
    
  }

  logout(){
    if(localStorage.getItem("token") == "" || localStorage.getItem("token") == null){
      this.navCtrl.push(LoginPage);
     
    }else{
      localStorage.setItem('token', '');
      this.navCtrl.setRoot(LoginPage);
    }
    
  }


 myReserve(){
  if(localStorage.getItem("token") == "" || localStorage.getItem("token") == null){
    this.navCtrl.push(LoginPage);
   
  }else{
    this.navCtrl.push(MyreservePage);
  }
  
}

mySetting(){
  if(localStorage.getItem("token") == "" || localStorage.getItem("token") == null){
    this.navCtrl.push(LoginPage);
   
  }else{
    this.navCtrl.push(SettingsPage);
  }
  
}


}
