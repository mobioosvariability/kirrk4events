import { Injectable } from '@angular/core';
import { BLE } from '@ionic-native/ble';

export const MAIN_SERVICE = '9a089684-ef6d-4594-84c5-c87585ea7f31';
const TRUNK_CHARACTERISTIC = '8cae83cb-c99d-4863-ad70-813bbb6b5bd4';
const LIGHT_CHARACTERISTIC = 'ae07725b-8579-4cc4-ac83-664d473eeed7';
const ENGINE_CHARACTERISTIC = 'a2dc4ff1-cd70-4f54-8163-4ac748eef5f0';
const TEMPERATURE_UNIT_CHARACTERISTIC = '82b76226-bd7d-4199-b3a5-88ead0a9e764';
const SHOCK_DETECTION_SENSITVITY_CHARACTERISTIC = 'c486b8ba-ec6f-49c3-b547-7a4881edbf7a';

@Injectable()
export class BleService {
  constructor(private ble: BLE) { }

  trunkAction(deviceId: string, value: number) {
    const valueToWrite = new Uint8Array(1);
    valueToWrite[0] = value;
    return this.writeCharacteristic(deviceId, MAIN_SERVICE, TRUNK_CHARACTERISTIC, valueToWrite);
  }

  lightAction(deviceId: string, value: number) {
    const valueToWrite = new Uint8Array(1);
    valueToWrite[0] = value;
    return this.writeCharacteristic(deviceId, MAIN_SERVICE, LIGHT_CHARACTERISTIC, valueToWrite);
  }

  engineAction(deviceId: string, value: number) {
    const valueToWrite = new Uint8Array(1);
    valueToWrite[0] = value;
    return this.writeCharacteristic(deviceId, MAIN_SERVICE, ENGINE_CHARACTERISTIC, valueToWrite);
  }

  temperatureUnitAction(deviceId: string, value: number) {
    const valueToWrite = new Uint8Array(1);
    valueToWrite[0] = value;
    return this.writeCharacteristic(deviceId, MAIN_SERVICE, TEMPERATURE_UNIT_CHARACTERISTIC, valueToWrite);
  }

  ShockDetectionSensitivityAction(deviceId: string, value: number) {
    const valueToWrite = new Uint8Array(1);
    valueToWrite[0] = value;
    return this.writeCharacteristic(deviceId, MAIN_SERVICE, SHOCK_DETECTION_SENSITVITY_CHARACTERISTIC, valueToWrite);
  }

  writeCharacteristic(deviceId: string, service: string, characteristic: string, value: Uint8Array) {
    return this.ble.write(deviceId, service, characteristic, value.buffer);
  }

}
