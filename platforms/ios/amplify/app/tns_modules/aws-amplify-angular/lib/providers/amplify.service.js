var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import Amplify, { Logger } from 'aws-amplify';
import { authDecorator } from './auth.decorator';
var logger = new Logger('AmplifyService');
var AmplifyService = /** @class */ (function () {
    function AmplifyService() {
        this._authState = new Subject();
        this.authStateChange$ = this._authState.asObservable();
        authDecorator(this._authState);
        this._auth = Amplify.Auth;
        this._analytics = Amplify.Analytics;
        this._storage = Amplify.Storage;
        this._api = Amplify.API;
        this._cache = Amplify.Cache;
        this._pubsub = Amplify.PubSub;
    }
    AmplifyService.prototype.auth = function () { return this._auth; };
    AmplifyService.prototype.analytics = function () { return this._analytics; };
    AmplifyService.prototype.storage = function () { return this._storage; };
    AmplifyService.prototype.api = function () { return this._api; };
    AmplifyService.prototype.cache = function () { return this._cache; };
    AmplifyService.prototype.pubsub = function () { return this._pubsub; };
    AmplifyService.prototype.authState = function () { return this._authState; };
    AmplifyService.prototype.setAuthState = function (state) { this._authState.next(state); };
    AmplifyService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], AmplifyService);
    return AmplifyService;
}());
export { AmplifyService };
//# sourceMappingURL=amplify.service.js.map