
import { Observable } from 'rxjs';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { DataServiceMock } from '../../test-config/mocks/dataServiceMock';
import { DataService } from './data.service';
import { UserController } from './userController.service';
import { UserProfileViewModel } from '../viewModels/userProfileViewModel';

describe('UserController service', () => {
  let userControllerSpy: UserController;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserController,
        { provide: DataService, useClass: DataServiceMock }
      ]
    });
    userControllerSpy = TestBed.get(UserController);
  });
  it('UserController service: should create', fakeAsync(() => {
    const createApi = '/api/user/create';
    spy = spyOn(userControllerSpy, 'create').and.callThrough();
    userControllerSpy.create(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(userControllerSpy._dataService, 'post').and.callThrough();
    userControllerSpy.create(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${createApi}`,
      {
      userProfile: null
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('UserController service: should get', fakeAsync(() => {
    const getApi = '/api/user/get';
    spy = spyOn(userControllerSpy, 'get').and.callThrough();
    userControllerSpy.get(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      0
    );
    spy = spyOn(userControllerSpy._dataService, 'get').and.callThrough();
    userControllerSpy.get(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getApi}`,
      {
      userId: JSON.stringify(0)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('UserController service: should signIn', fakeAsync(() => {
    const signInApi = '/api/user/signIn';
    spy = spyOn(userControllerSpy, 'signIn').and.callThrough();
    userControllerSpy.signIn(
      'test',
      'test'
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      'test',
      'test'
    );
    spy = spyOn(userControllerSpy._dataService, 'get').and.callThrough();
    userControllerSpy.signIn(
      'test',
      'test'
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${signInApi}`,
      {
      email: JSON.stringify('test'),
      password: JSON.stringify('test')
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

});
