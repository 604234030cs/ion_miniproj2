import { Component } from '@angular/core';
import { IonicPage, NavController,Events,AlertController } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  logindata:any = {};
  datauser:any=[];


  constructor(public navCtrl: NavController, public http:Http, public HttpClientModule:HttpClientModule,public events:Events,public alertCtrl: AlertController) {
    this.logindata.username = "";
    this.logindata.password = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  
  
  
  SingIn(){
    if(this.logindata.username != "" && this.logindata.password != ""){
      console.log("user:",this.logindata.username);
      console.log("pass:",this.logindata.password);

      let url : string = "http://localhost/ranted/login.php";
      let dataPost = JSON.stringify({
                            getsearch:this.logindata.username,
                            pass:this.logindata.password,
      });

      this.http.post(url,dataPost).map(res => res.json()).subscribe((data: any) =>{
        if(data != null){
          this.events.publish('user:Loggedin');
          this.navCtrl.setRoot('TestPage','data');
        }else{
          let alert = this.alertCtrl.create({
            message: 'โปรดใส่ username และ password ให้ถูกต้อง',
            buttons: [
              {
                text: 'OK',
                role: 'OK',
              }
            ]
          });
          alert.present(); 
        }
      });
    }else{
      let alert = this.alertCtrl.create({
        message: 'กรุณาตรวจสอบ username และ password',
        buttons: [
          {
            text: 'OK',
            role: 'OK',
          }
        ]
      });
      alert.present();
    }
  }
  SingUp(){
    this.navCtrl.push("SingUpPage");
  }
}

