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
var template = "\n<div class=\"amplify-greeting\">\n    <span class=\"amplify-greeting-text\">{{ greeting }}</span>\n    <button class=\"amplify-form-button amplify-greeting-sign-out\"\n        *ngIf=\"signedIn\"\n        (click)=\"onSignOut()\"\n      >Sign Out</button>\n</div>\n";
var GreetingsComponent = /** @class */ (function () {
    function GreetingsComponent(amplifyService) {
        this.amplifyService = amplifyService;
        this.subscribe();
    }
    GreetingsComponent.prototype.subscribe = function () {
        var _this = this;
        this.amplifyService.authStateChange$
            .subscribe(function (state) { return _this.setAuthState(state); });
    };
    GreetingsComponent.prototype.setAuthState = function (authState) {
        this.authState = authState;
        this.signedIn = authState.state === 'signedIn';
        this.greeting = this.signedIn
            ? "Hello " + authState.user.username
            : "";
    };
    GreetingsComponent.prototype.onSignOut = function () {
        this.amplifyService.auth().signOut();
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], GreetingsComponent.prototype, "authState", void 0);
    GreetingsComponent = __decorate([
        Component({
            selector: 'amplify-auth-greetings',
            template: template
        }),
        __metadata("design:paramtypes", [AmplifyService])
    ], GreetingsComponent);
    return GreetingsComponent;
}());
export { GreetingsComponent };
//# sourceMappingURL=greetings.component.js.map