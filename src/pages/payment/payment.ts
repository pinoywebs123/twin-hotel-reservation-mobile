import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HotelProvider } from '../../providers/hotel/hotel';
import { AlertController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  id: any;
  payment : any;
  image: any;
  
  pic = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera,public hotelProv : HotelProvider,public alertCtrl: AlertController) {
    this.id = this.navParams.data;
    
    
  }
  

  ionViewDidLoad() {
    console.log(this.id);
  }

  clickPayment(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.pic = base64Image;
      
      this.hotelProv.getPayment(this.pic,this.id).subscribe(image=> {
        alert(this.image);
      });
     

     }, (err) => {
      console.log("Error Converting Image");
     });

     this.hotelProv.getPayment(this.pic,this.id).subscribe(image=> {
      alert(this.image);
    });

    }

    clickSend(){
      if(this.pic == null || this.pic == ""){
        alert("empty");
      }
      this.hotelProv.getPayment(this.pic,this.id).subscribe(image=> {
        alert(this.image);
      });

    }


    showAlert() {
      let alert = this.alertCtrl.create({
        title: 'Suucess!!',
        subTitle: 'Send data image base64 ok',
        buttons: ['OK']
      });
      alert.present();
    }

    showAlerts() {
      let alert = this.alertCtrl.create({
        title: 'aw!!',
        subTitle: 'aw',
        buttons: ['OK']
      });
      alert.present();
    }
    
  

















    

   
  

}


