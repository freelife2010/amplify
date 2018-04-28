var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { AmplifyService } from '../../providers';
var template = "\n\n  <div class=\"amplify-authenticator\">\n\n    <amplify-auth-sign-in\n      *ngIf=\"!shouldHide('SignIn')\"\n      [authState]=\"authState\"\n    ></amplify-auth-sign-in>\n\n    <amplify-auth-require-new-password\n      *ngIf=\"!shouldHide('RequireNewPassword')\"\n      [authState]=\"authState\"\n    ></amplify-auth-require-new-password>\n\n    <amplify-auth-confirm-sign-in\n      *ngIf=\"!shouldHide('ConfirmSignIn')\"\n      [authState]=\"authState\"\n    ></amplify-auth-confirm-sign-in>\n\n    <amplify-auth-sign-up\n      *ngIf=\"!shouldHide('SignUp')\"\n      [authState]=\"authState\"\n    ></amplify-auth-sign-up>\n\n    <amplify-auth-confirm-sign-up\n      *ngIf=\"!shouldHide('ConfirmSignUp')\"\n      [authState]=\"authState\"\n    ></amplify-auth-confirm-sign-up>\n\n    <amplify-auth-forgot-password\n      *ngIf=\"!shouldHide('ForgotPassword')\"\n      [authState]=\"authState\"\n    ></amplify-auth-forgot-password>\n\n    <amplify-auth-greetings\n      *ngIf=\"!shouldHide('Greetings')\"\n      [authState]=\"authState\"\n    ></amplify-auth-greetings>\n\n  </div>\n";
var AuthenticatorComponent = /** @class */ (function () {
    function AuthenticatorComponent(amplifyService) {
        this.authState = {
            state: 'signIn',
            user: null
        };
        this.hide = [];
        this.amplifyService = amplifyService;
        this.subscribe();
    }
    AuthenticatorComponent.prototype.subscribe = function () {
        var _this = this;
        this.amplifyService.authStateChange$
            .subscribe(function (state) {
            _this.authState = state;
        });
    };
    AuthenticatorComponent.prototype.shouldHide = function (comp) {
        return this.hide.filter(function (item) { return item === comp; })
            .length > 0;
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], AuthenticatorComponent.prototype, "hide", void 0);
    AuthenticatorComponent = __decorate([
        Component({
            selector: 'amplify-authenticator',
            template: template
        }),
        __metadata("design:paramtypes", [AmplifyService])
    ], AuthenticatorComponent);
    return AuthenticatorComponent;
}());
export { AuthenticatorComponent };
//# sourceMappingURL=authenticator.component.js.map