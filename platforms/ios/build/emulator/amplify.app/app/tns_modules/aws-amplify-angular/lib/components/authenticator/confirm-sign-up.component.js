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
var template = "\n<div class=\"amplify-form-container\" *ngIf=\"_show\">\n  <div class=\"amplify-form-body\">\n\n    <div class=\"amplify-form-row\">\n      \n      <div class=\"amplify-form-cell-left\">\n        <a class=\"amplify-form-link\"\n          (click)=\"onSignIn()\"\n        >Back to Sign In</a>\n      </div>\n\n    </div>\n\n    <div class=\"amplify-form-row\">\n      <input\n        (keyup)=\"setUsername($event.target.value)\"\n        class=\"amplify-form-input\"\n        type=\"text\"\n        placeholder=\"Username\"\n        [value]=\"username\"\n      />\n    </div>\n    <div class=\"amplify-form-row\">\n      <input #code\n        (keyup)=\"setCode(code.value)\"\n        (keyup.enter)=\"onConfirm()\"\n        class=\"amplify-form-input\"\n        type=\"text\"\n        placeholder=\"Code\"\n      />\n    </div>\n      \n    <button class=\"amplify-form-button\"\n      (click)=\"onConfirm()\">Confirm</button>\n    <button class=\"amplify-form-button\"\n      (click)=\"onResend()\">Resend</button>\n\n  </div>\n\n  <div class=\"amplify-form-footer\">\n    <div class=\"amplify-form-message-error\" *ngIf=\"errorMessage\">{{ errorMessage }}</div>\n  </div>\n\n</div>\n";
var ConfirmSignUpComponent = /** @class */ (function () {
    function ConfirmSignUpComponent(amplifyService) {
        this.amplifyService = amplifyService;
    }
    Object.defineProperty(ConfirmSignUpComponent.prototype, "authState", {
        set: function (authState) {
            this._authState = authState;
            this._show = authState.state === 'confirmSignUp';
            this.username = authState.user ? authState.user.username || '' : '';
        },
        enumerable: true,
        configurable: true
    });
    ConfirmSignUpComponent.prototype.setUsername = function (username) {
        this.username = username;
    };
    ConfirmSignUpComponent.prototype.setCode = function (code) {
        this.code = code;
    };
    ConfirmSignUpComponent.prototype.onConfirm = function () {
        var _this = this;
        this.amplifyService.auth()
            .confirmSignUp(this.username, this.code)
            .then(function () { return console.log('confirm success'); })
            .catch(function (err) { return _this._setError(err); });
    };
    ConfirmSignUpComponent.prototype.onResend = function () {
        var _this = this;
        this.amplifyService.auth().resendSignUp(this.username)
            .then(function () { return console.log('code resent'); })
            .catch(function (err) { return _this._setError(err); });
    };
    ConfirmSignUpComponent.prototype.onSignIn = function () {
        this.amplifyService.setAuthState({ state: 'signIn', user: null });
    };
    ConfirmSignUpComponent.prototype._setError = function (err) {
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
    ], ConfirmSignUpComponent.prototype, "authState", null);
    ConfirmSignUpComponent = __decorate([
        Component({
            selector: 'amplify-auth-confirm-sign-up',
            template: template
        }),
        __metadata("design:paramtypes", [AmplifyService])
    ], ConfirmSignUpComponent);
    return ConfirmSignUpComponent;
}());
export { ConfirmSignUpComponent };
//# sourceMappingURL=confirm-sign-up.component.js.map