import { Component } from '@angular/core';

import { NavController ,LoadingController,ToastController,ModalController} from 'ionic-angular';

import { regsterPage } from '../contact/regster';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,
  			  public loadingCtrl: LoadingController,
  			  private toastCtrl: ToastController,
          private modalCtrl: ModalController
  			 ){
  	this.user ={};
  	this.user.username="";
  	this.user.password="";
  }

  login(){
  	if(this.user.username==''){
  		
  		let toastUserNameError = this.toastCtrl.create({
  			message: '用户名格式不正确',
		    duration: 3000,
		    position: 'top'
  		});
  		toastUserNameError.present();
  	}
  	else{
  		let loader = this.loadingCtrl.create({
	      content: "正在登录..",
	      duration:3000,
	    });
	    loader.present();
	    
  	}
  }

  openRegiterPage(){
    let modal = this.modalCtrl.create(regsterPage);
    modal.present();
  }
}
