
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
/**
 * class: VehicleInformationViewModel
 * You should add a description of your entity here.
 * This viewModel is a reference used in Concerns or
 * in APIs' parameters or return types.
 * This model is generated from ViewModel domain.
 */
export class VehicleInformationViewModel {
  /**
   * property.
   */
  public brand: string;
  /**
   * property.
   */
  public model: string;
  /**
   * property.
   */
  public color: string;
  /**
   * property.
   */
  public licencePlate: string;
  /**
   * property.
   */
  public fuelLevel: string;
  /**
   * property.
   */
  public fuelType: string;
  /**
   * property.
   */
  public totalKms: string;
  constructor(
    brand1: string,
    model1: string,
    color1: string,
    licencePlate1: string,
    fuelLevel1: string,
    fuelType1: string,
    totalKms1: string
  ) {
    this.brand = brand1;
    this.model = model1;
    this.color = color1;
    this.licencePlate = licencePlate1;
    this.fuelLevel = fuelLevel1;
    this.fuelType = fuelType1;
    this.totalKms = totalKms1;
  }
}
