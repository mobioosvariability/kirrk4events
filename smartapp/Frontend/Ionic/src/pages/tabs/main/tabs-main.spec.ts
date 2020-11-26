
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
import { TabsMain } from "./tabs-main";
describe('TabsMain Component', () => {
  let fixture: ComponentFixture<TabsMain>;
  let component: TabsMain;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Kirrk4Events,
        TabsMain
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
    fixture = TestBed.createComponent(TabsMain);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('TabsMain Component: should be created', fakeAsync(() => {
    expect(component instanceof TabsMain).toBeTruthy();
  }));

  it('TabsMain Component: should navigate to language page', fakeAsync(() => {
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
  it('TabsMain Component - onInit: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onInit').and.callThrough();
    component.onInit();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

});
