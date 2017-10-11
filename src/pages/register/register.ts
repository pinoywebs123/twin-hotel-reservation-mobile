import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HotelProvider } from '../../providers/hotel/hotel';
import { LoginPage } from '../login/login';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  reg : any;
  fname : string;
  lname : string;
  email : string;
  username : string;
  password: string;
  repeat_password: string;
  contact: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, public hotelProv : HotelProvider) {
  }

  ionViewDidLoad() {
    
  }

  clickSubmit(){
    this.hotelProv.userRegister(this.fname, this.lname, this.email,this.username, this.password, this.repeat_password,this.contact)
    .subscribe(reg=> {
      console.log(this.reg = reg);
      if(this.reg.status == true){
        this.regOk();
        this.navCtrl.push(LoginPage);
      }
    });
  }


 

   regOk() {
    let alert = this.alertCtrl.create({
      title: 'SUCCESS!!!',
      subTitle: 'You have registered your new account, Book Now!',
      buttons: ['OK']
    });
    alert.present();
  }



}
