
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
import { IonicPage, NavController } from 'ionic-angular';
import { UserProfileViewModel } from '../../../viewModels/userProfileViewModel';
import { Observable } from 'rxjs';
import { UserController } from '../../../services/userController.service';
import { LanguagePage } from '../../language/language';


/**
 * class: LoginRegister.
 * RegisterLayout.
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'login-register',
  segment: 'login/register'
})
@Component({
  selector: 'login-register',
  templateUrl: 'login-register.html'
})
export class LoginRegister {
  user: UserProfileViewModel;
  acceptCondition = false;

  constructor(
    public _userController: UserController,
    public _nav: NavController
  ) {
    this.user = {} as UserProfileViewModel;
  }

  /**
   * method: onCreateAccount
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param userProfile `UserProfileViewModel`.
   * @returns A `Subscription<any>`.
   */
  public onCreateAccount(
    userProfile: UserProfileViewModel
  ) {
    /*
    return this._userController.create(
      userProfile
    ).subscribe();
    */
  }

  /**
   * method: onLanguage.
   * That method enables to enter language
   * page with a button.
   */
  /*
  public onLanguage() {
    this._nav.push(LanguagePage);
  }
  */
  onGoBack() {
    this._nav.pop();
  }

  onAcceptCondition(event: any) {
    this.acceptCondition = event.checked;
  }

  onCreateUser() {
    this._userController.saveUser(this.user).then(
      (res) => {
        sessionStorage.setItem('firstName', this.user.firstName);
        sessionStorage.setItem('lastName', this.user.lastName);
        this._nav.push('home-main');
      },
      (err) => console.log(' Create user error :: ', err)
    );
  }

}
