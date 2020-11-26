
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
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Options } from 'ng5-slider';
import { BLE } from '@ionic-native/ble';
import { BleService } from './../../../services/ble.service';

/**
 * class: RentalBluetoothActions.
 * This page contains the blutooth actions.
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'rental-bluetoothActions',
  segment: 'rental/bluetoothActions'
})
@Component({
  selector: 'rental-bluetoothActions',
  templateUrl: 'rental-bluetoothActions.html'
})
export class RentalBluetoothActions {
  public value : number = 25;
  public options: Options = {
    showTicksValues: true,
    stepsArray: [
      {value: 0, legend:'0%'},
      {value: 25, legend:'25%'},
      {value: 50, legend:'50%'},
      {value: 75, legend:'75%'},
      {value: 100, legend:'100%'}
    ]
  };

  public isTurnHeadlights: boolean;
  public isBlinkingLights: boolean;
  public isBlinking: boolean;
  public isRadio: boolean;

  private peripheral: any = {};
  private deviceId: string;

  constructor(
    public _nav: NavController,
    public _navParams: NavParams,
    private ble: BLE,
    private bleService: BleService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
    this.deviceId = this._navParams.get('deviceId');
    this.connectToVehicle();
  }

  private connectToVehicle() {
    const certificate =  this.getCertificate();
    this.ble.secureConnection(this.deviceId, certificate).subscribe(
      (res) => {
        this.peripheral = res
        this.presentConnectToast();
      },
      (err) => {
        this.presentAlert(err.errorMessage);
      }
    );
  }

  /**
   * method: onPutKeyInBag
   * That method is a blank method.
   */
  public onPutKeyInBag() {
    // TO DO
  }

  /**
   * method: onCloseTrunk
   * That method is a blank method.
   */
  public onCloseTrunk() {
    // TO DO
  }

  public goBack() {
    this._nav.pop();
  }

  public unlockTrunk() {
    this.ble.isConnected(this.peripheral.id).then(
      (res) => {
        const value = 1;
        this.bleService.trunkAction(this.peripheral.id, value).then(
          (res) => {},
          (err) => {
            this.presentAlert('An error has occurred (' + err + ')');
          }
        );
      },
      (err) => {
        this.presentAlert(err);
        this.tryToReconnnect();
      }
    );
  }

  public turnHeadlights() {
    this.isBlinkingLights = false;
    this.isBlinking = false;

    let value = 0;
    if (this.isTurnHeadlights) {
      value = 1;
    }

    this.ble.isConnected(this.peripheral.id).then(
      (res) => {
        this.bleService.lightAction(this.peripheral.id, value).then(
          (res) => {},
          (err) => {
            if (typeof err === 'object') {
              this.presentAlert('An error has occurred (' + err.errorMessage + ')');
            } else {
              this.presentAlert('An error has occurred (' + err + ')');
            }
          }
        );
      },
      (err) => {
        this.presentAlert(err);
        this.tryToReconnnect();
      }
    );
  }

  public blinkingLights() {
    this.isTurnHeadlights = false;
    this.isBlinking = false;

    let value = 0;
    if (this.isBlinkingLights) {
      value = 2;
    }

    this.ble.isConnected(this.peripheral.id).then(
      (res) => {
        this.bleService.lightAction(this.peripheral.id, value).then(
          (res) => {},
          (err) => {
            if (typeof err === 'object') {
              this.presentAlert('An error has occurred (' + err.errorMessage + ')');
            } else {
              this.presentAlert('An error has occurred (' + err + ')');
            }
          }
        );
      },
      (err) => {
        this.presentAlert(err);
        this.tryToReconnnect();
      }
    );

  }

  public blinking() {
    this.isTurnHeadlights = false;
    this.isBlinkingLights = false;

    let value = 0;
    if (this.isBlinking) {
      value = 3;
    }

    this.ble.isConnected(this.peripheral.id).then(
      (res) => {
        this.bleService.lightAction(this.peripheral.id, value).then(
          (res) => {},
          (err) => {
            if (typeof err === 'object') {
              this.presentAlert('An error has occurred (' + err.errorMessage + ')');
            } else {
              this.presentAlert('An error has occurred (' + err + ')');
            }
          }
        );
      },
      (err) => {
        this.presentAlert(err);
        this.tryToReconnnect();
      }
    );
  }

  public turnRadio() {
    let value = 0;
    if (this.isRadio) {
      value = 1;
    }

    this.ble.isConnected(this.peripheral.id).then(
      (res) => {
        this.bleService.engineAction(this.peripheral.id, value).then(
          (res) => {},
          (err) => {
            if (typeof err === 'object') {
              this.presentAlert('An error has occurred (' + err.errorMessage + ')');
            } else {
              this.presentAlert('An error has occurred (' + err + ')');
            }
          }
        );
      },
      (err) => {
        this.presentAlert(err);
        this.tryToReconnnect();
      }
    );
  }

  public shockDetection(value: number) {
    this.ble.isConnected(this.peripheral.id).then(
      (res) => {
        this.bleService.ShockDetectionSensitivityAction(this.peripheral.id, value).then(
          (res) => {},
          (err) => {
            if (typeof err === 'object') {
              this.presentAlert('An error has occurred (' + err.errorMessage + ')');
            } else {
              this.presentAlert('An error has occurred (' + err + ')');
            }
          }
        );
      },
      (err) => {
        this.presentAlert(err);
        this.tryToReconnnect();
      }
    );
  }

  ionViewWillLeave() {
    this.ble.disconnect(this.peripheral.id).then(
      (res) => {
        this.presentDisconnectToast();
      },
      (err) => {}
    );
  }

  presentAlert(errMsg: string) {
    let alert = this.alertCtrl.create({
      title: 'BLE error',
      subTitle: errMsg + ', please try again later',
      buttons: ['Ok']
    });

    alert.present();
  }

  presentConnectToast() {
    let toast = this.toastCtrl.create({
      message: 'Vehicle connected successfully',
      duration: 3000,
      position: 'top',
      cssClass: 'toastClass success'
    });

    toast.present();
  }

  presentDisconnectToast() {
    let toast = this.toastCtrl.create({
      message: 'Vehicle disconnected',
      duration: 3000,
      position: 'top',
      cssClass: 'toastClass error'
    });

    toast.present();
  }

  tryToReconnnect() {
    this.ble.autoConnect(
      this.peripheral.id,
      (conn) => {
        this.presentConnectToast();
        this.peripheral = conn;
      },
      (disc) => {
        this.presentDisconnectToast();
      }
    );
  }

  getCertificate() {
    return '';
  }
}
