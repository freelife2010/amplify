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
var template = "\n<div class=\"amplify-form-container\" *ngIf=\"_show\">\n  <div class=\"amplify-form-body\">\n\n    <div class=\"amplify-form-row\">\n      <div class=\"amplify-form-cell-left\">\n        <a class=\"amplify-form-link\"\n          (click)=\"onSignIn()\"\n        >Back to Sign In</a>\n      </div>\n    </div>\n\n    <div class=\"amplify-form-row\">\n      <input #code\n        (keyup)=\"setCode(code.value)\"\n        (keyup.enter)=\"onConfirm()\"\n        class=\"amplify-form-input\"\n        type=\"text\"\n        placeholder=\"Code\"\n      />\n    </div>\n    <button class=\"amplify-form-button\"\n      (click)=\"onConfirm()\"\n    >Confirm</button>\n  </div>\n  <div class=\"amplify-form-footer\">\n    <div class=\"amplify-form-message-error\" *ngIf=\"errorMessage\">{{ errorMessage }}</div>\n  </div>\n</div>\n";
var ConfirmSignInComponent = /** @class */ (function () {
    function ConfirmSignInComponent(amplifyService) {
        this.amplifyService = amplifyService;
    }
    Object.defineProperty(ConfirmSignInComponent.prototype, "authState", {
        set: function (authState) {
            this._authState = authState;
            this._show = authState.state === 'confirmSignIn';
        },
        enumerable: true,
        configurable: true
    });
    ConfirmSignInComponent.prototype.setCode = function (code) {
        this.code = code;
    };
    ConfirmSignInComponent.prototype.onConfirm = function () {
        var _this = this;
        var user = this._authState.user;
        var challengeName = user.challengeName;
        var mfaType = challengeName === 'SOFTWARE_TOKEN_MFA' ? challengeName : null;
        this.amplifyService.auth()
            .confirmSignIn(user, this.code, mfaType)
            .then(function () {
            _this.amplifyService.setAuthState({ state: 'signedIn', user: user });
        })
            .catch(function (err) { return _this._setError(err); });
    };
    ConfirmSignInComponent.prototype.onSignIn = function () {
        this.amplifyService.setAuthState({ state: 'signIn', user: null });
    };
    ConfirmSignInComponent.prototype._setError = function (err) {
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
    ], ConfirmSignInComponent.prototype, "authState", null);
    ConfirmSignInComponent = __decorate([
        Component({
            selector: 'amplify-auth-confirm-sign-in',
            template: template
        }),
        __metadata("design:paramtypes", [AmplifyService])
    ], ConfirmSignInComponent);
    return ConfirmSignInComponent;
}());
export { ConfirmSignInComponent };
//# sourceMappingURL=confirm-sign-in.component.js.map