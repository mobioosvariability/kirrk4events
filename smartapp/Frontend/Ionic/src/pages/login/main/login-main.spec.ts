
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
import { LoginMain } from "./login-main";
describe('LoginMain Component', () => {
  let fixture: ComponentFixture<LoginMain>;
  let component: LoginMain;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Kirrk4Events,
        LoginMain
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
    fixture = TestBed.createComponent(LoginMain);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('LoginMain Component: should be created', fakeAsync(() => {
    expect(component instanceof LoginMain).toBeTruthy();
  }));

  it('LoginMain Component: should navigate to language page', fakeAsync(() => {
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
  it('LoginMain Component - onGoToSignIn: should navigate to login-signIn page', fakeAsync(() => {
    spy = spyOn(component, 'onGoToSignIn').and.callThrough();
    component.onGoToSignIn();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._nav, 'push').and.callThrough();
    component.onGoToSignIn();
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('login-signIn');
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('PUSH');
    });
  }));

  it('LoginMain Component - onGoToRegister: should navigate to login-register page', fakeAsync(() => {
    spy = spyOn(component, 'onGoToRegister').and.callThrough();
    component.onGoToRegister();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._nav, 'push').and.callThrough();
    component.onGoToRegister();
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('login-register');
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('PUSH');
    });
  }));

});
