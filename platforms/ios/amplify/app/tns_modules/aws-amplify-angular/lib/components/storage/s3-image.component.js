var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AmplifyService } from '../../providers';
var template = "\n  <img\n    class=\"amplify-image\"\n    (click)=\"onImageClicked()\"\n    src=\"{{url}}\"\n  />\n";
var S3ImageComponent = /** @class */ (function () {
    function S3ImageComponent(amplifyService) {
        this.selected = new EventEmitter();
        this.amplifyService = amplifyService;
    }
    S3ImageComponent.prototype.onImageClicked = function () {
        this.selected.emit(this.url);
    };
    Object.defineProperty(S3ImageComponent.prototype, "path", {
        set: function (imagePath) {
            var _this = this;
            if (!imagePath) {
                return;
            }
            this.amplifyService.storage()
                .get(imagePath)
                .then(function (url) { return _this.url = url; })
                .catch(function (err) { return console.error(err); });
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], S3ImageComponent.prototype, "selected", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], S3ImageComponent.prototype, "path", null);
    S3ImageComponent = __decorate([
        Component({
            selector: 'amplify-s3-image',
            template: template
        }),
        __metadata("design:paramtypes", [AmplifyService])
    ], S3ImageComponent);
    return S3ImageComponent;
}());
export { S3ImageComponent };
//# sourceMappingURL=s3-image.component.js.map