
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

import { RentalCardViewModel } from '../viewModels/rentalCardViewModel';
import { VehicleInformationViewModel } from '../viewModels/vehicleInformationViewModel';

import { DataService } from './data.service';

/**
 * class: RentalController.
 * Rental api.
 * This service is generated from API domain.
 */
@Injectable()
export class RentalController {
  public _listApi = '/api/rental/list';
  public _getApi = '/api/rental/get';
  constructor(public _dataService: DataService){}
    /**
     * method: list.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param userIdParam `number`.
     * @returns `RentalCardViewModel>`.
     */
    public list(
        userIdParam: number
    ): Observable<RentalCardViewModel> {
        return this._dataService.get(
          `${this._listApi}`,
          {
              userId: JSON.stringify(userIdParam)
          });
    }
    /**
     * method: get.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param rentalIdParam `number`.
     * @returns `VehicleInformationViewModel>`.
     */
    public get(
        rentalIdParam: number
    ): Observable<VehicleInformationViewModel> {
        return this._dataService.get(
          `${this._getApi}`,
          {
              rentalId: JSON.stringify(rentalIdParam)
          });
    }
}
