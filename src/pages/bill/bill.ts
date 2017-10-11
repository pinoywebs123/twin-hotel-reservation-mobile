import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HotelProvider } from '../../providers/hotel/hotel';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
@IonicPage()
@Component({
  selector: 'page-bill',
  templateUrl: 'bill.html',
})
export class BillPage {
  price:any;
  days: any;
  check_in : any;
  check_out: any;
  room : any;
  booking: any;
  bill: any;
  check_in_time : any;
  occupants: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public hotelProv : HotelProvider, public alertCtrl: AlertController) {
    this.check_in = navParams.get("param1");
    this.check_out = navParams.get("param2");
    this.days = navParams.get("param3");
    this.price = navParams.get("param4");
    this.room = navParams.get("param5");
    this.bill = this.days * this.price;
    this.check_in_time = navParams.get("param6");
    this.occupants = navParams.get("param7");
  }

  ionViewDidLoad() {
    
  }

  bookSuccess() {
    let alert = this.alertCtrl.create({
      title: 'Booking Success!!',
      subTitle: 'Thank you for choosing us, hope to see you here.',
      buttons: ['OK']
    });
    alert.present();
  }
  
  BookFailed() {
    let alert = this.alertCtrl.create({
      title: 'Warning!',
      subTitle: 'Not Available, Kindly choose another date!',
      buttons: ['OK']
    });
    alert.present();
  }

    
  errDays() {
    let alert = this.alertCtrl.create({
      title: 'Warning!',
      subTitle: 'You are only allow to book atleast 2 days.',
      buttons: ['OK']
    });
    alert.present();
  }


  clickSubmit(){
    
    if(this.days > 2){
      return this.errDays();
    }
    this.hotelProv.userBook(this.check_in, this.check_out, this.room, this.bill, this.occupants,this.check_in_time).subscribe(booking => {
      console.log(this.booking = booking);

      if(this.booking.status == true){
        this.bookSuccess();
        this.navCtrl.setRoot(HomePage);
      }else{
        this.BookFailed();
      }
    });
   
  }
  
}
