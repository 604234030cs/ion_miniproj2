import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { SocialSharing } from '@ionic-native/social-sharing';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the RoomDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room-detail',
  templateUrl: 'room-detail.html',
})
export class RoomDetailPage {

  roomdata:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomDetailPage');
    this.roomdata = this.navParams.data;
    console.log(this.roomdata);
  }
  share(){
    let title = this.roomdata.name_rentedroom;
    let overview = this.roomdata.price;
    this.socialSharing.shareViaFacebook('Moive title'+title+':'+overview);
  }
 

}
