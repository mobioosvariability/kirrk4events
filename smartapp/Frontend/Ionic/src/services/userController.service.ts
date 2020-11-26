
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
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserProfileViewModel } from '../viewModels/userProfileViewModel';

import { DataService } from './data.service';

import * as XLSX from 'xlsx';

import { File } from '@ionic-native/file'

/**
 * class: UserController.
 * User Api.
 * This service is generated from API domain.
 */
@Injectable()
export class UserController {
  public _createApi = '/api/user/create';
  public _getApi = '/api/user/get';
  public _signInApi = '/api/user/signIn';
  constructor(public _dataService: DataService, private file: File){}
    /**
     * method: create.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param userProfileParam `UserProfileViewModel`.
     * @returns `UserProfileViewModel>`.
     */
    public create(
        userProfileParam: UserProfileViewModel
    ): Observable<UserProfileViewModel> {
        return this._dataService.post(
          `${this._createApi}`,
          {
              userProfile: userProfileParam
          },
         {});
    }
    /**
     * method: get.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param userIdParam `number`.
     * @returns `UserProfileViewModel>`.
     */
    public get(
        userIdParam: number
    ): Observable<UserProfileViewModel> {
        return this._dataService.get(
          `${this._getApi}`,
          {
              userId: JSON.stringify(userIdParam)
          });
    }
    /**
     * method: signIn.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param emailParam `string`.
     * @param passwordParam `string`.
     * @returns `UserProfileViewModel>`.
     */
    public signIn(
        emailParam: string,
        passwordParam: string
    ): Observable<UserProfileViewModel> {
        return this._dataService.get(
          `${this._signInApi}`,
          {
              email: JSON.stringify(emailParam),
              password: JSON.stringify(passwordParam)
          });
    }

  async saveUser(user: UserProfileViewModel) {
    let wbUser: any[][] = [];
    let workBook: XLSX.WorkBook;
    let wbContent: string;

    wbUser.push([new Date().toLocaleDateString(), user.email, user.firstName, user.lastName, user.country, user.company]);

    // Read à workbook
    await this.file.readAsBinaryString(this.file.externalRootDirectory + '/Kirrk4Events/', 'Kirrk4EventsUsers.xlsx').then(
      (res) => {
        wbContent = res;
        if (wbContent !== undefined && wbContent !== null) {
          workBook = XLSX.read(wbContent, {type: 'binary'});
          const ws = workBook.Sheets[workBook.SheetNames[0]];
          XLSX.utils.sheet_add_aoa(ws, wbUser, {origin: -1});
        } else {
          const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(wbUser);
          workBook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workBook, ws, 'Users');
        }

        // Write a workbook
        const wbout: ArrayBuffer = XLSX.write(workBook, {bookType: 'xlsx', type: 'array'});
        const blob = new Blob([wbout], {type: 'application/octet-stream'});
        this.file.writeFile(this.file.externalRootDirectory + '/Kirrk4Events/', 'Kirrk4EventsUsers.xlsx', blob, {replace: true})
            .then()
            .catch((err) => console.log(err));

      },
      (err) => {
        const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(wbUser);
        workBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workBook, ws, 'Users');

        const wbout: ArrayBuffer = XLSX.write(workBook, {bookType: 'xlsx', type: 'array'});
        const blob = new Blob([wbout], {type: 'application/octet-stream'});

        //Check if directory exists
        this.file.checkDir(this.file.externalRootDirectory, 'Kirrk4Events').then(
          (res) => {
            this.file.writeFile(this.file.externalRootDirectory + '/Kirrk4Events/', 'Kirrk4EventsUsers.xlsx', blob, {replace: true})
                .then()
                .catch((err) => console.log());
          },
          (err) => {
            this.file.createDir(this.file.externalRootDirectory, 'Kirrk4Events', false).then(
              (res) => {
                this.file.writeFile(this.file.externalRootDirectory + '/Kirrk4Events/', 'Kirrk4EventsUsers.xlsx', blob, {replace: true})
                    .then()
                    .catch((err) => console.log(err));
              },
              (err) => {
                console.log('Create dir err : ', err);
              }
            );
          }
        )

      }
    );

  }
}
