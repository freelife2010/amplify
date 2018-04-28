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
var template = "\n<div class=\"amplify-form-container\" *ngIf=\"_show\">\n  <div class=\"amplify-form-body\">\n\n    <div class=\"amplify-form-row\">\n\n      <div class=\"amplify-form-cell-left\">\n        <a class=\"amplify-form-link\"\n          (click)=\"onSignIn()\"\n        >Sign In</a>\n      </div>\n\n      <div class=\"amplify-form-cell-right\">\n        <a class=\"amplify-form-link\"\n          (click)=\"onSignUp()\"\n        >Sign Up</a>\n      </div>\n\n    </div>\n\n    <div class=\"amplify-form-row\">\n      <input #username\n        (keyup)=\"setUsername(username.value)\"\n        class=\"amplify-form-input\"\n        type=\"text\"\n        placeholder=\"Username\"\n      />\n    </div>\n    <div class=\"amplify-form-row\">\n      <input #password\n        (keyup)=\"setPassword(password.value)\"\n        (keyup.enter)=\"onSignUp()\"\n        class=\"amplify-form-input\"\n        type=\"password\"\n        placeholder=\"Password\"\n      />\n    </div>\n    <div class=\"amplify-form-row\">\n      <input #email\n        (keyup)=\"setEmail(email.value)\"\n        class=\"amplify-form-input\"\n        type=\"text\"\n        placeholder=\"Email\"\n      />\n    </div>\n    <div class=\"amplify-form-row\">\n      <input #phone_number\n        (keyup)=\"setPhoneNumber(phone_number.value)\"\n        class=\"amplify-form-input\"\n        type=\"text\"\n        placeholder=\"Phone Number\"\n      />\n    </div>\n    <div class=\"amplify-form-row\">\n      <div class=\"amplify-form-cell-right\">\n        <a class=\"amplify-form-link\"\n          (click)=\"onConfirmSignUp()\"\n        >Confirm a Code</a>\n      </div>\n    </div>\n    <button class=\"amplify-form-button\"\n      (click)=\"onSignUp()\"\n    >Sign Up</button>\n  </div>\n  <div class=\"amplify-form-footer\">\n    <div class=\"amplify-form-message-error\" *ngIf=\"errorMessage\">{{ errorMessage }}</div>\n  </div>\n</div>\n";
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(amplifyService) {
        this.amplifyService = amplifyService;
    }
    Object.defineProperty(SignUpComponent.prototype, "authState", {
        set: function (authState) {
            this._authState = authState;
            this._show = authState.state === 'signUp';
        },
        enumerable: true,
        configurable: true
    });
    SignUpComponent.prototype.setUsername = function (username) {
        this.username = username;
    };
    SignUpComponent.prototype.setPassword = function (password) {
        this.password = password;
    };
    SignUpComponent.prototype.setEmail = function (email) {
        this.email = email;
    };
    SignUpComponent.prototype.setPhoneNumber = function (phone_number) {
        this.phone_number = phone_number;
    };
    SignUpComponent.prototype.onSignUp = function () {
        var _this = this;
        this.amplifyService.auth()
            .signUp(this.username, this.password, this.email, this.phone_number)
            .then(function (user) { return _this.amplifyService.setAuthState({ state: 'confirmSignUp', user: null }); })
            .catch(function (err) { return _this._setError(err); });
    };
    SignUpComponent.prototype.onSignIn = function () {
        this.amplifyService.setAuthState({ state: 'signIn', user: null });
    };
    SignUpComponent.prototype.onConfirmSignUp = function () {
        this.amplifyService.setAuthState({ state: 'confirmSignUp', user: null });
    };
    SignUpComponent.prototype._setError = function (err) {
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
    ], SignUpComponent.prototype, "authState", null);
    SignUpComponent = __decorate([
        Component({
            selector: 'amplify-auth-sign-up',
            template: template
        }),
        __metadata("design:paramtypes", [AmplifyService])
    ], SignUpComponent);
    return SignUpComponent;
}());
export { SignUpComponent };
//# sourceMappingURL=sign-up.component.js.map