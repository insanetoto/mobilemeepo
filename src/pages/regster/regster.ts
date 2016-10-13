import { Component } from '@angular/core';

import { NavController ,ViewController} from 'ionic-angular';


@Component({
  selector: 'page-regster',
  templateUrl: 'regster.html'
})
export class RegsterPage  {
	
	constructor( public navCtrl: NavController,
				 public  viewCtrl:ViewController) {

  }

  dismiss(){
  	this.viewCtrl.dismiss();

  }
}