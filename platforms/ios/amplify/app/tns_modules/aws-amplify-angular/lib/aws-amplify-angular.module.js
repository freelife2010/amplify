var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmplifyService } from './providers/amplify.service';
import { PhotoPickerComponent, S3ImageComponent, S3AlbumComponent } from './components/storage';
import { SignInComponent, AuthenticatorComponent, RequireNewPasswordComponent, ConfirmSignInComponent, SignUpComponent, ConfirmSignUpComponent, ForgotPasswordComponent, GreetingsComponent } from './components';
var AmplifyAngularModule = /** @class */ (function () {
    function AmplifyAngularModule() {
    }
    AmplifyAngularModule = __decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            declarations: [
                PhotoPickerComponent,
                S3ImageComponent,
                S3AlbumComponent,
                SignInComponent,
                AuthenticatorComponent,
                RequireNewPasswordComponent,
                ConfirmSignInComponent,
                SignUpComponent,
                ConfirmSignUpComponent,
                ForgotPasswordComponent,
                GreetingsComponent
            ],
            providers: [AmplifyService],
            exports: [
                PhotoPickerComponent,
                S3ImageComponent,
                S3AlbumComponent,
                SignInComponent,
                AuthenticatorComponent,
                RequireNewPasswordComponent,
                ConfirmSignInComponent,
                SignUpComponent,
                ConfirmSignUpComponent,
                ForgotPasswordComponent,
                GreetingsComponent
            ]
        })
    ], AmplifyAngularModule);
    return AmplifyAngularModule;
}());
export { AmplifyAngularModule };
//# sourceMappingURL=aws-amplify-angular.module.js.map