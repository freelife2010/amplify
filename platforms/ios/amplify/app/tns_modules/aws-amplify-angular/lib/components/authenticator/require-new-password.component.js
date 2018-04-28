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
var template = "\n<div class=\"amplify-form-container\" *ngIf=\"_show\">\n  <div class=\"amplify-form-body\">\n\n  <div class=\"amplify-form-row\">\n\n      <div class=\"amplify-form-cell-left\">\n        <a class=\"amplify-form-link\"\n          (click)=\"onSignIn()\"\n        >Back to Sign In</a>\n      </div>\n\n    </div>\n\n    <div class=\"amplify-form-row\">\n      <input #password\n        (keyup)=\"setPassword(password.value)\"\n        (keyup.enter)=\"onSubmit()\"\n        class=\"amplify-form-input\"\n        type=\"password\"\n        placeholder=\"Password\"\n      />\n    </div>\n    \n    <div class=\"amplify-form-row\">\n      <button class=\"amplify-form-button\"\n        (click)=\"onSubmit()\"\n      >Submit</button>\n    </div>\n\n  </div>\n\n  <div class=\"amplify-form-footer\">\n    <div class=\"amplify-form-message-error\" *ngIf=\"errorMessage\">{{ errorMessage }}</div>\n  </div>\n  \n</div>\n";
var RequireNewPasswordComponent = /** @class */ (function () {
    function RequireNewPasswordComponent(amplifyService) {
        this.amplifyService = amplifyService;
    }
    Object.defineProperty(RequireNewPasswordComponent.prototype, "authState", {
        set: function (authState) {
            this._authState = authState;
            this._show = authState.state === 'reauireNewPassword';
        },
        enumerable: true,
        configurable: true
    });
    RequireNewPasswordComponent.prototype.setPassword = function (password) {
        this.password = password;
    };
    RequireNewPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = this._authState.user;
        var requiredAttributes = user.challengeParam.requiredAttributes;
        this.amplifyService.auth()
            .completeNewPassword(user, this.password, requiredAttributes)
            .then(function () {
            _this.amplifyService.setAuthState({ state: 'signIn', user: user });
        })
            .catch(function (err) { return _this._setError(err); });
    };
    RequireNewPasswordComponent.prototype.onSignIn = function () {
        this.amplifyService.setAuthState({ state: 'signIn', user: null });
    };
    RequireNewPasswordComponent.prototype._setError = function (err) {
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
    ], RequireNewPasswordComponent.prototype, "authState", null);
    RequireNewPasswordComponent = __decorate([
        Component({
            selector: 'amplify-auth-require-new-password',
            template: template
        }),
        __metadata("design:paramtypes", [AmplifyService])
    ], RequireNewPasswordComponent);
    return RequireNewPasswordComponent;
}());
export { RequireNewPasswordComponent };
//# sourceMappingURL=require-new-password.component.js.map