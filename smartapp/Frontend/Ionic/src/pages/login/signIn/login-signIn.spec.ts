
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
import { LoginSignIn } from "./login-signIn";
import { UserProfileViewModel } from '../../../viewModels/userProfileViewModel';
import { UserController } from '../../../services/userController.service';
import { UserControllerMock } from '../../../../test-config/mocks/userControllerMock';
describe('LoginSignIn Component', () => {
  let fixture: ComponentFixture<LoginSignIn>;
  let component: LoginSignIn;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Kirrk4Events,
        LoginSignIn
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
    fixture = TestBed.createComponent(LoginSignIn);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('LoginSignIn Component: should be created', fakeAsync(() => {
    expect(component instanceof LoginSignIn).toBeTruthy();
  }));

  it('LoginSignIn Component: should navigate to language page', fakeAsync(() => {
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
  it('LoginSignIn Component - onSignIn: should use userController service to SignIn', fakeAsync(() => {
    var email = 'test';
    var password = 'test';
    spy = spyOn(component, 'onSignIn').and.callThrough();
    component.onSignIn(
    email,
    password
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    email,
    password
    );
    spy = spyOn(component._userController, 'signIn').and.callThrough();
    component.onSignIn(
    email,
    password
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    email,
    password
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
});
