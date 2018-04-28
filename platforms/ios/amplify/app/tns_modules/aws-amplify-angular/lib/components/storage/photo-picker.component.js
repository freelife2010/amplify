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
var template = "\n<div class=\"amplify-photo-picker-container\">\n  <div class=\"amplify-photo-picker-preview\">\n    <img\n      class=\"amplify-photo-picker-preview\"\n      src=\"{{photoUrl}}\"\n      *ngIf=\"hasPhoto\"\n      (error)=\"onPhotoError()\"\n    />\n  </div>\n  <div>\n    <input type=\"file\" \n      class=\"amplify-upload-input\"\n      accept=\"image/*\"\n      (change)=\"pick($event)\"/>\n  </div>\n\n</div>\n";
var PhotoPickerComponent = /** @class */ (function () {
    function PhotoPickerComponent() {
        this.hasPhoto = false;
        this.picked = new EventEmitter();
        this.loaded = new EventEmitter();
    }
    Object.defineProperty(PhotoPickerComponent.prototype, "url", {
        set: function (url) {
            this.photoUrl = url;
            this.hasPhoto = true;
        },
        enumerable: true,
        configurable: true
    });
    PhotoPickerComponent.prototype.pick = function (evt) {
        var file = evt.target.files[0];
        if (!file) {
            return;
        }
        var name = file.name, size = file.size, type = file.type;
        this.picked.emit(file);
        var that = this;
        var reader = new FileReader();
        reader.onload = function (e) {
            var target = e.target;
            var url = target.result;
            that.photoUrl = url;
            that.hasPhoto = true;
            that.loaded.emit(url);
        };
        reader.readAsDataURL(file);
    };
    PhotoPickerComponent.prototype.onPhotoError = function () {
        this.hasPhoto = false;
    };
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PhotoPickerComponent.prototype, "url", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], PhotoPickerComponent.prototype, "picked", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], PhotoPickerComponent.prototype, "loaded", void 0);
    PhotoPickerComponent = __decorate([
        Component({
            selector: 'amplify-photo-picker',
            template: template
        })
    ], PhotoPickerComponent);
    return PhotoPickerComponent;
}());
export { PhotoPickerComponent };
//# sourceMappingURL=photo-picker.component.js.map