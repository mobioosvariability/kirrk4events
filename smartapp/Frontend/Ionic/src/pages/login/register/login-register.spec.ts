
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
import { LoginRegister } from "./login-register";
import { UserProfileViewModel } from '../../../viewModels/userProfileViewModel';
import { UserController } from '../../../services/userController.service';
import { UserControllerMock } from '../../../../test-config/mocks/userControllerMock';
describe('LoginRegister Component', () => {
  let fixture: ComponentFixture<LoginRegister>;
  let component: LoginRegister;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Kirrk4Events,
        LoginRegister
      ],
      imports: [
        LanguagePageModule,
        TranslateModule.forChild(),
        IonicModule.forRoot(Kirrk4Events)
      ],
      providers: [
        { provide: UserController, useClass: UserControllerMock },
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
    fixture = TestBed.createComponent(LoginRegister);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('LoginRegister Component: should be created', fakeAsync(() => {
    expect(component instanceof LoginRegister).toBeTruthy();
  }));

  it('LoginRegister Component: should navigate to language page', fakeAsync(() => {
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
  it('LoginRegister Component - onCreateAccount: should use userController service to CreateAccount', fakeAsync(() => {
    var userProfile = null;
    spy = spyOn(component, 'onCreateAccount').and.callThrough();
    component.onCreateAccount(
    userProfile
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    userProfile
    );
    spy = spyOn(component._userController, 'create').and.callThrough();
    component.onCreateAccount(
    userProfile
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    userProfile
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
});
