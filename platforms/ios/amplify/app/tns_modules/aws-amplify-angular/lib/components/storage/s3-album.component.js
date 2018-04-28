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
var template = "\n<div class=\"amplify-album-container\">\n  <amplify-s3-image\n    class=\"amplify-image-container\"\n    *ngFor=\"let item of list\"\n    path=\"{{item.path}}\"\n    (selected)=\"onImageSelected($event)\"\n  ></amplify-s3-image>\n</div>\n";
var S3AlbumComponent = /** @class */ (function () {
    function S3AlbumComponent(amplifyService) {
        this.selected = new EventEmitter();
        this.amplifyService = amplifyService;
    }
    S3AlbumComponent.prototype.onImageSelected = function (event) {
        this.selected.emit(event);
    };
    Object.defineProperty(S3AlbumComponent.prototype, "path", {
        set: function (path) {
            if (!path) {
                return;
            }
            var that = this;
            this.amplifyService.storage()
                .list(path)
                .then(function (data) {
                that.list = data.map(function (item) {
                    return { path: item.key };
                });
            })
                .catch(function (err) { return console.error(err); });
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], S3AlbumComponent.prototype, "selected", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], S3AlbumComponent.prototype, "path", null);
    S3AlbumComponent = __decorate([
        Component({
            selector: 'amplify-s3-album',
            template: template
        }),
        __metadata("design:paramtypes", [AmplifyService])
    ], S3AlbumComponent);
    return S3AlbumComponent;
}());
export { S3AlbumComponent };
//# sourceMappingURL=s3-album.component.js.map