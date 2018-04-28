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
var template = "\n<div class=\"amplify-form-container\" *ngIf=\"_show\">\n  <div class=\"amplify-form-body\">\n\n    <div class=\"amplify-form-row\">\n      \n      <div class=\"amplify-form-cell-left\">\n        <a class=\"amplify-form-link\"\n          (click)=\"onSignIn()\"\n        >Back to Sign In</a>\n      </div>\n\n    </div>\n\n    <div class=\"amplify-form-row\">\n      <input\n        (keyup)=\"setUsername($event.target.value)\"\n        class=\"amplify-form-input\"\n        type=\"text\"\n        placeholder=\"Username\"\n        [value]=\"username\"\n      />\n    </div>\n    <div class=\"amplify-form-row\">\n      <input #code\n        (keyup)=\"setCode(code.value)\"\n        class=\"amplify-form-input\"\n        type=\"text\"\n        placeholder=\"Code\"\n      />\n    </div>\n    <div class=\"amplify-form-row\">\n      <input #password\n        (keyup)=\"setPassword(password.value)\"\n        (keyup.enter)=\"onSubmit()\"\n        class=\"amplify-form-input\"\n        type=\"password\"\n        placeholder=\"Password\"\n      />\n    </div>\n    <div class=\"amplify-form-row\">\n    <button class=\"amplify-form-button\"\n      (click)=\"onSend()\"\n    >Send Code</button>\n    <button class=\"amplify-form-button\"\n      (click)=\"onSubmit()\"\n    >Submit</button>\n    </div>\n  </div>\n  <div class=\"amplify-form-footer\">\n    <div class=\"amplify-form-message-error\" *ngIf=\"errorMessage\">{{ errorMessage }}</div>\n  </div>\n</div>\n";
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(amplifyService) {
        this.amplifyService = amplifyService;
    }
    Object.defineProperty(ForgotPasswordComponent.prototype, "authState", {
        set: function (authState) {
            this._authState = authState;
            this._show = authState.state === 'forgotPassword';
            this.username = authState.user ? authState.user.username || '' : '';
        },
        enumerable: true,
        configurable: true
    });
    ForgotPasswordComponent.prototype.setUsername = function (username) {
        this.username = username;
    };
    ForgotPasswordComponent.prototype.setCode = function (code) {
        this.code = code;
    };
    ForgotPasswordComponent.prototype.setPassword = function (password) {
        this.password = password;
    };
    ForgotPasswordComponent.prototype.onSend = function () {
        var _this = this;
        this.amplifyService.auth().forgotPassword(this.username)
            .then(function () { return console.log('code sent'); })
            .catch(function (err) { return _this._setError(err); });
    };
    ForgotPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.amplifyService.auth()
            .forgotPasswordSubmit(this.username, this.code, this.password)
            .then(function () {
            var user = { username: _this.username };
            _this.amplifyService.setAuthState({ state: 'signIn', user: user });
        })
            .catch(function (err) { return _this._setError(err); });
    };
    ForgotPasswordComponent.prototype.onSignIn = function () {
        this.amplifyService.setAuthState({ state: 'signIn', user: null });
    };
    ForgotPasswordComponent.prototype._setError = function (err) {
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
    ], ForgotPasswordComponent.prototype, "authState", null);
    ForgotPasswordComponent = __decorate([
        Component({
            selector: 'amplify-auth-forgot-password',
            template: template
        }),
        __metadata("design:paramtypes", [AmplifyService])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
export { ForgotPasswordComponent };
//# sourceMappingURL=forgot-password.component.js.map