import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { LoaddataProvider } from '../../providers/loaddata/loaddata';
import { RoomDetailPage } from '../room-detail/room-detail';

/**
 * Generated class for the MansionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mansion',
  templateUrl: 'mansion.html',
})
export class MansionPage {
  rentedroom: any = [];
  roomCategory:string;
  categoryName:string;
  price:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams,public mansion: LoaddataProvider,public alertCtrl : AlertController) {
    this.loaddata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MansionPage');
  }

  loaddata(){
    this.mansion.getmansion().subscribe(mansions =>{
      this.rentedroom=mansions;
    });
  }

  getdetail(room){
    this.navCtrl.push(RoomDetailPage,room);
  }
  getItems(ev: any){
    let val = ev.target.value;
  
    if (val !=0) {
      this.mansion.searchrooms(val).subscribe(rooms=>{
        this.rentedroom = rooms;
      });
    }else {
     this.loaddata();
  }
  }
  search(){
    let alert = this.alertCtrl.create();
    alert.setTitle('เลือกช่วงราคาห้องพัก');
    alert.addInput({
      type: 'checkbox',
      label: 'น้อยกว่า 3,000',
      value: '1',
    });
  
    alert.addInput({
      type: 'checkbox',
      label: '3,000-4,000',
      value: '2'
    });
  
    alert.addInput({
      type: 'checkbox',
      label: 'มากว่า 4,000',
      value: '3'
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
      this.price =data;
        console.log(this.price);
        if(this.price==1){
          this.mansion.loadprice_1().subscribe(data=>{
           this.rentedroom = data;
          });
        }else if(this.price==2){
          this.mansion.loadprice_2().subscribe(data=>{
            this.rentedroom = data;
           });
        }else if(this.price==3){
          this.mansion.loadprice_3().subscribe(data=>{
            this.rentedroom = data;
           });
        }
      }
    });
    alert.present();
  }
}
