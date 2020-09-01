import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AlertController, Loading, LoadingController, ToastController} from "ionic-angular";
import { Storage } from "@ionic/storage";
import { BackgroundMode } from '@ionic-native/background-mode';
import {Camera} from "@ionic-native/camera";
import {User} from "..";

@Injectable()
export class UtilProvider {
  appLanguage: any;
  base64Image: any;

  loading: Loading;
  loader: Loading;
  smallAlert: any;
  toast: any;
  constructor(public http: HttpClient,public toastCtrl:ToastController,
              private loadingCtrl: LoadingController,
              private user: User,
              private backgroundMode: BackgroundMode,
              private camera: Camera, private alertCtrl: AlertController, public storage: Storage) {
  }


  presentLoading(msg) {
    if (this.loading){
      this.dismissLoading();
    }else{
      this.loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: msg,
        duration: 6000
      });
      this.loading.present();
    }
  }
  presentLoader(msg) {
    if (this.loader){
      this.dismissLoader();
    }else{
      this.loader = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: msg,
        // duration: 6000
      });
      this.loader.present();
    }
  }

  dismissLoader(){
    if(this.loader) {
      this.loader.dismiss();
      this.loader = null;
    }
  }
  dismissLoading(){
    if(this.loading) {
      this.loading.dismiss();
      this.loading = null;
    }
  }

  presentAlert(title,msg) {
    if (!this.smallAlert){
      this.smallAlert = this.alertCtrl.create({
        title: title,
        subTitle: msg,
        buttons: [{
          text: 'Ok',
          handler: () => {
            this.smallAlert = null;
          }
        }]
      });
      this.smallAlert.present();
    }
  }

  presentToast(message) {
    if (!this.toast){
      this.toast = this.toastCtrl.create({
        message: message,
        duration: 3000
      });
      this.toast.present();
    }
  }

  initTranslate() {
    this.storage.get('appLanguage').then(data => {
      this.appLanguage = data;
    });
  }

  presentConfirm(title, msg, btn) {
    return new Promise((resolve, reject) => {
      let alert = this.alertCtrl.create({
        title: title,
        message: msg,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              reject();
            }
          },
          {
            text: btn,
            handler: () => {
              resolve();
            }
          }
        ]
      });
      alert.present();
    })
  }
  // take picture from camera
  takePicture() {
    this.backgroundMode.enable();
    return new Promise((resolve, reject) => {
      this.camera.getPicture({
        quality:70,
        correctOrientation: true,
        sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.DATA_URL
      }).then((imageData) => {
        this.backgroundMode.disable();
        resolve('data:image/png;base64,' + imageData)
      }, (err) => {
        this.backgroundMode.disable();
        reject(err);
      });
    })
  }

  // access gallery method
  aceesGallery() {
    this.backgroundMode.enable();
    return new Promise((resolve, reject) => {
      this.camera.getPicture({
        quality:70,
        sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
        destinationType: this.camera.DestinationType.DATA_URL
      }).then((imageData) => {
        this.backgroundMode.disable();
        resolve('data:image/png;base64,' + imageData)
      }, (err) => {
        this.backgroundMode.disable();
        reject(err);
      });
    });
  }

  uploadImage(base64){
    return new Promise((resolve, reject) => {
      let formData = new FormData();
      formData.append('upload_file',base64);
      /*this.user.uploadImage(formData).subscribe(res=>{
        let response : any = res;
        response.status?resolve(response):reject(response)
      },error => {
        console.error(error);
        reject (error)
      })*/
    })
  }

  geocodeAddress(geocoder,address) {
    // let geocoder = new google.maps.Geocoder;
    return new Promise((resolve, reject) => {
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
          resolve({lat:results[0].geometry.location.lat(),lng:results[0].geometry.location.lng()})
        }
      });
    });
  }
}
