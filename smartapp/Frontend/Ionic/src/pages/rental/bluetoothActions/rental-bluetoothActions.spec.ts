
import { IonicModule, NavController, Platform } from 'ionic-angular';
import { NavMock } from '../../../../test-config/mocks/navMock';
import { PlatformMock } from '../../../../test-config/mocks/platformMock';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplashScreenMock } from '../../../../test-config/mocks/splashScreenMock';
import { StatusBar } from '@ionic-native/status-bar';
import { StatusBarMock } from '../../../../test-config/mocks/statusBarMock';
import { Title } from '@angular/platform-browser';
import { TitleMock } from '../../../../test-config/mocks/titleMock';
import { async, ComponentFixture, fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateServiceMock } from '../../../../test-config/mocks/translateServiceMock';
import { LanguagePageModule } from '../../language/language.module';
import { LanguagePage } from '../../language/language';
import { Kirrk4Events } from '../../../app/app.component';
import { RentalBluetoothActions } from "./rental-bluetoothActions";
describe('RentalBluetoothActions Component', () => {
  let fixture: ComponentFixture<RentalBluetoothActions>;
  let component: RentalBluetoothActions;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Kirrk4Events,
        RentalBluetoothActions
      ],
      imports: [
        LanguagePageModule,
        TranslateModule.forChild(),
        IonicModule.forRoot(Kirrk4Events)
      ],
      providers: [
        { provide: Platform, useClass: PlatformMock },
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: TranslateService, useClass: TranslateServiceMock },
        { provide: NavController, useClass: NavMock },
        { provide: Title, useClass: TitleMock },
      ]
    }).compileComponents();
  }));

  beforeEach(async() => {
    fixture = TestBed.createComponent(RentalBluetoothActions);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('RentalBluetoothActions Component: should be created', fakeAsync(() => {
    expect(component instanceof RentalBluetoothActions).toBeTruthy();
  }));

  it('RentalBluetoothActions Component: should navigate to language page', fakeAsync(() => {
    spy = spyOn(component, 'onLanguage').and.callThrough();
    component.onLanguage();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._nav, 'push').and.callThrough();
    component.onLanguage();
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(LanguagePage);
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('PUSH');
    });
  }));
  it('RentalBluetoothActions Component - onPutKeyInBag: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onPutKeyInBag').and.callThrough();
    component.onPutKeyInBag();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('RentalBluetoothActions Component - onCloseTrunk: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onCloseTrunk').and.callThrough();
    component.onCloseTrunk();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

});
