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
import { includes } from './common';
var template = "\n<div class=\"amplify-form-container\" *ngIf=\"_show\">\n  <div class=\"amplify-form-header\"></div>\n  <div class=\"amplify-form-body\">\n    \n    <div class=\"amplify-form-row\">\n      \n      <div class=\"amplify-form-cell-left\">\n        <a class=\"amplify-form-link\"\n          (click)=\"onSignIn()\"\n        >Sign In</a>\n      </div>\n      \n      <div class=\"amplify-form-cell-right\">\n        <a class=\"amplify-form-link\"\n          (click)=\"onSignUp()\"\n        >Sign Up</a>\n      </div>\n\n    </div>\n\n    <div class=\"amplify-form-row\">\n      <input\n        (keyup)=\"setUsername($event.target.value)\"\n        class=\"amplify-form-input\"\n        type=\"text\"\n        placeholder=\"Username\"\n        [value]=\"username\"\n      />\n    </div>\n\n    <div class=\"amplify-form-row\">\n      <input #password\n        (keyup)=\"setPassword(password.value)\"\n        (keyup.enter)=\"onSignIn()\"\n        class=\"amplify-form-input\"\n        type=\"password\"\n        placeholder=\"Password\"\n      />\n    </div>\n\n    <div class=\"amplify-form-row\">\n\n      <div class=\"amplify-form-cell-right\">\n        <a class=\"amplify-form-link\"\n          (click)=\"onForgotPassword()\"\n        >Forgot Password</a>\n      </div>\n\n    </div>\n\n    <button class=\"amplify-form-button\"\n      (click)=\"onSignIn()\"\n    >Sign In</button>\n\n  </div>\n\n  <div class=\"amplify-form-footer\">\n    <div class=\"amplify-form-message-error\" *ngIf=\"errorMessage\">{{ errorMessage }}</div>\n  </div>\n\n</div>\n";
var SignInComponent = /** @class */ (function () {
    function SignInComponent(amplifyService) {
        this.amplifyService = amplifyService;
    }
    Object.defineProperty(SignInComponent.prototype, "authState", {
        set: function (authState) {
            this._authState = authState;
            this._show = includes(['signIn', 'signedOut', 'signedUp'], authState.state);
            this.username = authState.user ? authState.user.username || '' : '';
        },
        enumerable: true,
        configurable: true
    });
    SignInComponent.prototype.setUsername = function (username) {
        this.username = username;
    };
    SignInComponent.prototype.setPassword = function (password) {
        this.password = password;
    };
    SignInComponent.prototype.onSignIn = function () {
        var _this = this;
        this.amplifyService.auth().signIn(this.username, this.password)
            .then(function (user) { return _this.amplifyService.setAuthState({ state: 'confirmSignIn', user: user }); })
            .catch(function (err) { return _this._setError(err); });
    };
    SignInComponent.prototype.onForgotPassword = function () {
        var user = this.username ? { username: this.username } : null;
        this.amplifyService.setAuthState({ state: 'forgotPassword', user: user });
    };
    SignInComponent.prototype.onSignUp = function () {
        var user = this.username ? { username: this.username } : null;
        this.amplifyService.setAuthState({ state: 'signUp', user: user });
    };
    SignInComponent.prototype._setError = function (err) {
        if (!err) {
            this.errorMessage = null;
            return;
        }
        this.errorMessage = err.message || err;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SignInComponent.prototype, "authState", null);
    SignInComponent = __decorate([
        Component({
            selector: 'amplify-auth-sign-in',
            template: template
        }),
        __metadata("design:paramtypes", [AmplifyService])
    ], SignInComponent);
    return SignInComponent;
}());
export { SignInComponent };
//# sourceMappingURL=sign-in.component.js.map