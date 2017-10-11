import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HotelProvider } from '../../providers/hotel/hotel';
import { AlertController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';

@IonicPage()
@Component({
  selector: 'page-myreserve',
  templateUrl: 'myreserve.html',
})
export class MyreservePage {
  activity: any;
  cancel = false;
  del : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public hotelProv : HotelProvider,public alertCtrl: AlertController) {
  }

  ionViewDidEnter() {
    this.hotelProv.getActivity().subscribe(activity => {
      console.log(this.activity = activity);
    });
  }

  showConfirm(id) {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure to cancel?',
      message: 'Twin Hotel will miss you!',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
           this.hotelProv.deleteActivity(id).subscribe(del => {
             console.log(this.del = del);
           })
          }
        }
      ]
    });
    confirm.present();
  }

  clickCancel(id){
    this.showConfirm(id);

   console.log(id);
  }

  clickPayment(id){
    this.navCtrl.push(PaymentPage,id);
  }



}
