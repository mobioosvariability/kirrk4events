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
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { File } from '@ionic-native/file';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Kirrk4Events } from './app.component';
import { DataService } from '../services/data.service';
import { LoginMainPageModule } from '../pages/login/main/login-main.module';

import { LanguagePageModule } from '../pages/language/language.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { Ng5SliderModule } from 'ng5-slider';
import { BleService } from './../services/ble.service';
import { BLE } from '@ionic-native/ble';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

/**
 * class: AppModule.
 * Kirrk4Events application.
 * This is the main module of the application.
 * This module is generated from multiple domains.
 */
@NgModule({
  declarations: [
    Kirrk4Events
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    LoginMainPageModule,
    LanguagePageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    Ng5SliderModule,
    IonicModule.forRoot(Kirrk4Events)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Kirrk4Events
  ],
  providers: [
    DataService,
    BleService,
    StatusBar,
    SplashScreen,
    File,
    BLE,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
