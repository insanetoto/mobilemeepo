import { Component } from '@angular/core';

import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contactdetail',
  templateUrl: 'contactdetail.html'
})
export class ContactdetailPage {

  constructor(public navCtrl: NavController,
  				public navpaCtrl:NavParams) {
  	this.item=navpaCtrl.data.item;

  }
}
