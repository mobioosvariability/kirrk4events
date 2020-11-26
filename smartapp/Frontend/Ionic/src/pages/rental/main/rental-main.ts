
/*
 * You should add your licence here, here is an example :
 *
 * SonarQube, open source software quality management tool.
 * Copyright (C) 2008-2013 SonarSource
 * mailto:contact AT sonarsource DOT com
 *
 * SonarQube is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * SonarQube is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, ModalController, ViewController, LoadingController, AlertController  } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

import { MAIN_SERVICE } from './../../../services/ble.service';

/**
 * class: RentalMain.
 * main page of rental details.
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'rental-main',
  segment: 'rental/main'
})
@Component({
  selector: 'rental-main',
  templateUrl: 'rental-main.html'
})
export class RentalMain {
  devices: any[] = [];
  displayNotFoundError = false;

  constructor(
    public _nav: NavController,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    private ble: BLE,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
  }

  ionViewWillEnter() {
    this.displayNotFoundError = false;
  }

  /**
   * method: onConnectToVehicle
   * That method is a navigation method.
   */
  public onConnectToVehicle() {
    this.displayNotFoundError = true;
    this.ble.isEnabled().then(
      (res) => {
        this.presentLoading();
        this.ble.scan([MAIN_SERVICE], 60).subscribe(
          (res) => {
            this._nav.push('rental-bluetoothActions', {
              deviceId: res.id
            });
            this.ble.stopScan().then();
            this.displayNotFoundError = false;
          },
          (err) => {
            this.displayNotFoundError = false;
            this.presentAlert(err);
          }
        );
      },
      (err) => {
        this.displayNotFoundError = false;
        this.presentAlert(err);
      }
    );

    setTimeout(() => {
      if (this.displayNotFoundError) {
        this.presentAlert('Vehicle not detected, please try again later');
        this.ble.stopScan().then();
      }
    }, 1500);
  }

  public goBack() {
    this._nav.pop();
  }

  private presentLoading() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 1000
    });

    loading.present();
  }

  presentAlert(msg: string) {
    let alert = this.alertCtrl.create({
      title: 'BLE error',
      subTitle: msg,
      buttons: ['Ok']
    });
    alert.present();
  }

}
