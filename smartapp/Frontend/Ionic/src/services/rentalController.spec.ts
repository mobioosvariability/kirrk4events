
import { Observable } from 'rxjs';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { DataServiceMock } from '../../test-config/mocks/dataServiceMock';
import { DataService } from './data.service';
import { RentalController } from './rentalController.service';
import { RentalCardViewModel } from '../viewModels/rentalCardViewModel';
import { VehicleInformationViewModel } from '../viewModels/vehicleInformationViewModel';

describe('RentalController service', () => {
  let rentalControllerSpy: RentalController;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RentalController,
        { provide: DataService, useClass: DataServiceMock }
      ]
    });
    rentalControllerSpy = TestBed.get(RentalController);
  });
  it('RentalController service: should list', fakeAsync(() => {
    const listApi = '/api/rental/list';
    spy = spyOn(rentalControllerSpy, 'list').and.callThrough();
    rentalControllerSpy.list(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      0
    );
    spy = spyOn(rentalControllerSpy._dataService, 'get').and.callThrough();
    rentalControllerSpy.list(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${listApi}`,
      {
      userId: JSON.stringify(0)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('RentalController service: should get', fakeAsync(() => {
    const getApi = '/api/rental/get';
    spy = spyOn(rentalControllerSpy, 'get').and.callThrough();
    rentalControllerSpy.get(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      0
    );
    spy = spyOn(rentalControllerSpy._dataService, 'get').and.callThrough();
    rentalControllerSpy.get(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getApi}`,
      {
      rentalId: JSON.stringify(0)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

});
