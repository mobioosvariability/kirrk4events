
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
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import {RentalMainPageModule} from '../../rental/main/rental-main.module';

/**
 * class: HomeMain.
 * Home page contains the next rental card.
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'home-main',
  segment: 'home/main'
})
@Component({
  selector: 'home-main',
  templateUrl: 'home-main.html'
})
export class HomeMain implements OnInit {

  public departureDate: Date;

  //Pages to display in the tabs
  homePage:any = 'home-main';
  RentalPage:any = '';
  VehiclePage:any = '';
  accountPage:any = '';
  helpPage:any = '';

  userName: string;

  constructor(
    public _nav: NavController,
    public modalCtrl: ModalController
  ) {
  }

  ngOnInit() {
    this.departureDate = new Date(Date.now());
    this.userName = sessionStorage.getItem('firstName');
  }

  /**
   * method: onStartRental
   * That method is a navigation method.
   */
  public onStartRental() {
    this._nav.push('rental-main');
  }

}
