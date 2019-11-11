import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoaddataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoaddataProvider {
  searchroom: any;
  searchnamroom: any;
  searchroomname(val: any) {
    throw new Error("Method not implemented.");
  }

  constructor(public http: HttpClient) {
    console.log('Hello LoaddataProvider Provider');
  }


    getcondominium(){
      const url = 'http://10.68.8.232/todoslim3/public/condominiums';
      return this.http.get(url);
   }

    getapartamen(){
      const url = 'http://10.68.8.232/todoslim3/public/apartment ';
      return this.http.get(url);
    }

    getmansion(){
      const url = 'http://10.68.8.232/todoslim3/public/Mansion';
      return this.http.get(url);
    }

    getdorm(){
      const url = 'http://10.68.8.232/todoslim3/public/dorm';
      return this.http.get(url);
    }
    searchrooms(query){
      let url  = 'http://10.68.8.232/todoslim3/public/search/'+query;
      return this.http.get(url);
    }
    loadprice_1(){
      let url ='http://10.68.8.232/todoslim3/public/room3000';
      return this.http.get(url);
    }
    //2500
    loadprice_2(){
      let url ='http://10.68.8.232/todoslim3/public/index.php/room3001';
      return this.http.get(url);
    }
    //3000
    loadprice_3(){
      let url ='http://10.68.8.232/todoslim3/public/index.php/room4000';
      return this.http.get(url);
    }

    loadrooms(){
      let url = 'http://10.68.8.232/todoslim3/public/index.php/room';
      return this.http.get(url);
    }
    showroom(name_rentedroom){
      let url = 'http://10.68.8.232/todoslim3/public/index.php/showroom/'+name_rentedroom;
      return this.http.get(url);
    }

    

}
