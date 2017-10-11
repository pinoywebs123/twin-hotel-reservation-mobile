import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HotelProvider } from '../../providers/hotel/hotel';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  new_pass: string;
  repeat_pass: string;
  password: any;
  settings: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public hotelProv : HotelProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.hotelProv.getProfile().subscribe(settings=> {
      console.log(this.settings = settings);
    })
  }

  clickChange(){
    if(this.new_pass == null || this.repeat_pass == null){
      this.passRequired();
    }else{
        if(this.new_pass == this.repeat_pass){
            this.hotelProv.changePassword(this.new_pass, this.repeat_pass).subscribe(password => {
              console.log(this.password = password);
              if(this.password.status == true){
                this.passOk();
              }
            });
        }else{
          this.passMatch();
        }
    }
  }

  passRequired() {
    let alert = this.alertCtrl.create({
      title: 'Warning!!',
      subTitle: 'All fields are required',
      buttons: ['OK']
    });
    alert.present();
  }

  passMatch() {
    let alert = this.alertCtrl.create({
      title: 'Warning!!',
      subTitle: 'Password must match',
      buttons: ['OK']
    });
    alert.present();
  }

  passOk() {
    let alert = this.alertCtrl.create({
      title: 'Congratulations!',
      subTitle: 'You have successfully change your password',
      buttons: ['OK']
    });
    alert.present();
  }



}
