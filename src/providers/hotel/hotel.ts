import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HotelProvider {
  url: any;
  url2: any;
  login: string;
  log : any;
  token : any;
  amenities: any;
  booking : any;
  goreg: any;
  activity: any;
  change_pass: any;
  settings: any;
  payment: any;
  constructor(public http: Http) {
    // this.url = "http://localhost:8100/api/v1/rooms";
    // this.url2 = "http://localhost:8100/api/v1/rooms/info";
    // this.login = "http://localhost:8100/api/v1/user";
    // this.amenities = "http://localhost:8100/api/v1/amenities";
    // this.booking = "http://localhost:8100/api/v1/book?token=";
    // this.goreg = "http://localhost:8100/api/v1/signme";
    // this.activity = "http://localhost:8100/api/v1/activity";
    // this.change_pass = "http://localhost:8100/api/v1/changepassword?token=";
    // this.settings = "http://localhost:8100/api/v1/setting?token=";
    // this.payment = "http://localhost:8100/api/v1/payment?token=";



    this.url = "https://twin-lodge.000webhostapp.com/api/v1/rooms";
    this.url2 = "https://twin-lodge.000webhostapp.com/api/v1/rooms/info";
    this.login = "https://twin-lodge.000webhostapp.com/api/v1/user";
    this.amenities = "https://twin-lodge.000webhostapp.com/api/v1/amenities";
    this.booking = "https://twin-lodge.000webhostapp.com/api/v1/book?token=";
    this.goreg = "https://twin-lodge.000webhostapp.com/api/v1/signme";
    this.activity = "https://twin-lodge.000webhostapp.com/api/v1/activity";
    this.change_pass = "https://twin-lodge.000webhostapp.com/api/v1/changepassword?token=";
    this.settings = "https://twin-lodge.000webhostapp.com/api/v1/setting?token=";
    this.payment = "https://twin-lodge.000webhostapp.com/api/v1/payment";
    
   
  }

   getCategory(){
    return this.http.get(this.url).map(res => res.json());
  }

  getRooms(id){
    return this.http.get(this.url+"/"+id).map(res => res.json());
  }

  getRooms2(id){
    return this.http.get(this.url2+"/"+id+"?token="+localStorage.getItem("token")).map(res => res.json());
  }

  userLogin(username, password){
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    let body = {
      "username": username,
      "password": password
    };

     return this.http.post(this.login, JSON.stringify(body),{headers: headers} )
     .map(res => res.json());
      
  }

  getAmenity(){
    return this.http.get(this.amenities+"?token="+localStorage.getItem("token")).map(res=> res.json());
  }

  userBook(check_in, check_out,room_id,bill,occupants,time){
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    let body = {
      "check_in": check_in,
      "check_out": check_out,
      "room_id": room_id,
      "occupants": occupants,
      'bill': bill,
      'check_in_time': time
    };

     return this.http.post(this.booking+localStorage.getItem("token"), JSON.stringify(body),{headers: headers} )
     .map(res => res.json());
  }

 userRegister(fname,lname,email,username,password,repeat_password,contact){
   let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    let body = {
      "fname": fname,
      "lname": lname,
      "email": email,
      "username": username,
      "password": password,
      "repeat_password": repeat_password,
      "contact": contact
    };
    return this.http.post(this.goreg, JSON.stringify(body),{headers: headers} )
     .map(res => res.json());
 }


getActivity(){
  return this.http.get(this.activity+"?token="+localStorage.getItem("token")).map(res=> res.json());
}

deleteActivity(id){
return this.http.get(this.activity+"/"+id+"?token="+localStorage.getItem("token")).map
(res=> res.json());
}

changePassword(aw, wa){
  let headers = new Headers();
  
      headers.append('Content-Type', 'application/json');
  
      let body = {
        "new_password": aw,
        "repeat_password": wa
       
      };
      return this.http.post(this.change_pass+localStorage.getItem("token"), JSON.stringify(body),{headers: headers} )
       .map(res => res.json());
}

getProfile(){
  return this.http.get(this.settings+localStorage.getItem("token")).map( res=> res.json());
}

getPayment(image,id){
  let headers = new Headers();
  
      headers.append('Content-Type', 'application/json');
  
      let body = {
        "image": image,
        "user_transaction_id": id
        
      };
      return this.http.post(this.payment, JSON.stringify(body),{headers: headers} )
       .map(res => res.json());
}



}