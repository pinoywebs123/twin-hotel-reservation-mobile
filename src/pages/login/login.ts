import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HotelProvider } from '../../providers/hotel/hotel';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: any;
  password: any;
  log: any;
  token: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public hotelProv : HotelProvider,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    
  }

  clickSubmit(){
    this.hotelProv.userLogin(this.username, this.password).subscribe(log => {
      console.log(this.log = log);

      if(this.log.status == true){
        localStorage.setItem("token", this.log.key);
        this.navCtrl.setRoot(HomePage, this.log.key);
      }else if(this.log.status == false){
        this.showAlert();
      }
      
      
    });
    
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error!!',
      subTitle: 'You have enter invalid username and password',
      buttons: ['OK']
    });
    alert.present();
  }

  clickRegister(){
    this.navCtrl.push(RegisterPage);
  }

  clickHome(){
    this.navCtrl.push(HomePage);
  }

}
