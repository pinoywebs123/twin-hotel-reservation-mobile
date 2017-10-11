import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HotelProvider } from '../../providers/hotel/hotel';
import { AlertController } from 'ionic-angular';
import { BillPage } from '../bill/bill';

@IonicPage()
@Component({
  selector: 'page-bookinfo',
  templateUrl: 'bookinfo.html',
})
export class BookinfoPage {
  room_id : any;
  check_in : any;
  check_out: any;
  bill = 0;
  amenities: any;
  booking : any;
  price: any;
  days: any;
  check_in_time: any;
  occupants: any;

  min: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public hotelProv : HotelProvider,public alertCtrl: AlertController) {
    this.room_id = navParams.get("param1");
    this.price = navParams.get("param2");
   
    var d = new Date();
    var y = d.getFullYear();
    var m = d.getMonth() + 1;
    var a = d.getDate();
    
    if(m < 10 ){
      this.min = y+"-0"+m+"-"+a;
      if(a < 10){
        this.min = y+"-0"+m+"-0"+a;
      }
    }else{
      this.min = y+"-"+m+"-"+a;
      if(a < 10){
        this.min = y+"-"+m+"-0"+a;
      }
    }

    
    

    if(m > 10 && a > 10){
      this.min = y+"-"+m+"-"+a;
    }

    
    
    console.log(this.min);

  }

  ionViewDidEnter() {
    this.hotelProv.getAmenity().subscribe(amenities => {
      console.log(this.amenities = amenities.data);
      
    });

  }


 
  clickCalculate(){
    console.log(this.check_in);
    if(this.occupants == null  || this.check_in == null || this.check_out == null || this.check_in_time == null){
      return this.showErr();
    }

   
    var eventStartTime = new Date(this.check_in);
    var eventEndTime = new Date(this.check_out);
    var duration = eventEndTime.valueOf() - eventStartTime.valueOf();
     this.days =  Math.ceil(duration / (1000 * 3600 * 24));
    this.bill = this.days * this.price;

    this.navCtrl.push(BillPage, { param1: this.check_in, param2: this.check_out, param3: this.days, param4: this.price, param5: this.room_id, param6: this.check_in_time, param7: this.occupants});
    
   
  }

  showErr() {
    let alert = this.alertCtrl.create({
      title: 'Warning!!',
      subTitle: 'All fields are required.!',
      buttons: ['OK']
    });
    alert.present();
  }

 


}
