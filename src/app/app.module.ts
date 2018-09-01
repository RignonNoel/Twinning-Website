import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { MyHttpInterceptor } from './my-http-interceptor';
import { CanActivateViaAuthGuard } from './guards/CanActivateViaAuthGuard';
import { HomePageComponent} from './components/pages/home-page/home-page.component';
import { RegisterConfirmationPageComponent } from './components/pages/register-confirmation-page/register-confirmation-page.component';
import { ActivationPageComponent } from './components/pages/activation-page/activation-page.component';
import { ForgotPasswordConfirmationPageComponent } from './components/pages/forgot-password-confirmation-page/forgot-password-confirmation-page.component';
import { ResetPasswordPageComponent } from './components/pages/reset-password-page/reset-password-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { LogoutPageComponent } from './components/pages/logout-page/logout-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { ForgotPasswordPageComponent } from './components/pages/forgot-password-page/forgot-password-page.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BackgroundLayoutComponent } from './layouts/background-layout/background-layout.component';
import { Error403Component } from './components/error-403/error-403.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import {MyModalService} from './services/my-modal/my-modal.service';
import {MyModalComponent} from './components/my-modal/my-modal.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {MyModalOpenDirective} from './directives/my-modal-open-directive.directive';
import {PermissionsDirective} from './directives/permissions.directive';
import {ProfileService} from './services/profile.service';
import {AuthenticatedDirective} from './directives/authenticated.directive';
import {UserService} from './services/user.service';
import {Error404Component} from './components/error-404/error-404.component';
import { ManageComponent } from './components/pages/manage/manage.component';

const appRoutes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'manage',
        component: ManageComponent,
      },
    ]
  },
  {
    path: '',
    component: BackgroundLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
      },
      {
        path: 'login/:lastUrl',
        component: LoginPageComponent,
      },
      {
        path: 'logout',
        component: LogoutPageComponent,
      },
      {
        path: 'register',
        component: RegisterPageComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordPageComponent,
      },
      {
        path: 'register/confirmation',
        component: RegisterConfirmationPageComponent,
      },
      {
        path: 'register/activation/:token',
        component: ActivationPageComponent,
      },
      {
        path: 'forgot-password/confirmation',
        component: ForgotPasswordConfirmationPageComponent,
      },
      {
        path: 'reset-password/:token',
        component: ResetPasswordPageComponent,
      },
      {
        path: '403',
        component: Error403Component,
      },
      {
        path: '**',
        component: Error404Component,
      }
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MyModalComponent,
    DefaultLayoutComponent,
    BackgroundLayoutComponent,
    HeaderComponent,
    FooterComponent,
    LoginPageComponent,
    LogoutPageComponent,
    RegisterPageComponent,
    RegisterConfirmationPageComponent,
    ResetPasswordPageComponent,
    ForgotPasswordPageComponent,
    ForgotPasswordConfirmationPageComponent,
    HomePageComponent,
    Error403Component,
    Error404Component,
    ActivationPageComponent,
    PermissionsDirective,
    MyModalOpenDirective,
    AuthenticatedDirective,
    ManageComponent,
  ],
  imports: [
    BrowserModule,
    SimpleNotificationsModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true,
    },
    CanActivateViaAuthGuard,
    AuthenticationService,
    MyModalService,
    ProfileService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
