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
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Title } from '@angular/platform-browser';

import { LoginMain } from '../pages/login/main/login-main';

import { TranslateService } from '@ngx-translate/core';
/**
 * class: Kirrk4Events.
 * Kirrk4Events application.
 * This is the main component of the application.
 * This component is generated from multiple domains.
 */
@Component({
  templateUrl: 'app.html'
})
export class Kirrk4Events {
  @ViewChild('nav') public _nav: NavController;

  constructor(
    public _translateService: TranslateService,
    public _platform: Platform,
    public _statusBar: StatusBar,
    public _splashScreen: SplashScreen,
    public _title: Title
   ) {
    this._platform.ready().then(() => {
      this._statusBar.backgroundColorByHexString('#4f10b5');
      this._splashScreen.hide();
      this._nav.setRoot(LoginMain);
      this._translateService.setDefaultLang('En');
      this._translateService.use('En');
      this._translateService.get('applicationTitle').subscribe(name => {
        this._title.setTitle(name);
      });
    });
  }

  /**
   * method: selected.
   * That method enables to change page
   * through the global menu.
   * @param route `string`.
   */
  selected(route: string) {
    this._nav.setRoot(route);
  }
}
