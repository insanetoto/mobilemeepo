import { Component } from '@angular/core';
import { ContactdetailPage } from '../about/contactdetail';


import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
  	 this.contacts=[{
  	 	"id":1,"name":"机器猫","phone":"13000000000"
  	 },{
  	 	"id":2,"name":"大熊","phone":"15000000000"
  	 }];

  }

  itmeClick(event,contact){
         this.navCtrl.push(ContactdetailPage, {item:contact});  
  }

}
