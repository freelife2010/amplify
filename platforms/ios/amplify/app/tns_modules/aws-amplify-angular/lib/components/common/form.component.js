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
var template = "\n<div class=\"amplify-form\">\n  <div class=\"form-header\">\n    <div class=\"form-title\">{{ title }}</div>\n  </div>\n  <div class=\"form-body\">\n    <ng-content select=\"[form-body]\"></ng-content>\n  </div>\n  <div class=\"form-footer\">\n    <ng-content select=\"[form-footer]\"></ng-content>\n  </div>\n</div>\n";
var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    Object.defineProperty(FormComponent.prototype, "title", {
        set: function (title) {
            this.title = title;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], FormComponent.prototype, "title", null);
    FormComponent = __decorate([
        Component({
            selector: 'amplify-form',
            template: template
        })
    ], FormComponent);
    return FormComponent;
}());
export { FormComponent };
//# sourceMappingURL=form.component.js.map