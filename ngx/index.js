var __extends = (this && this.__extends) || (function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
  };
  return function (d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var {{plugin_name}} = /** @class */ (function (_super) {
  __extends({{plugin_name}}, _super);
  function {{plugin_name}}() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  {{plugin_name}}.prototype.show = function () { return cordova(this, "show", { "sync": true }, arguments); };
  {{plugin_name}}.plugin_id = "{{plugin_name}}";
  {{plugin_name}}.plugin = "{{cordova_plugin_id}}";
  {{plugin_name}}.pluginRef = "{{plugin_name}}";
  {{plugin_name}}.repo = "{{plugin_github}}";
  {{plugin_name}}.platforms = ["Amazon Fire OS", "Android", "iOS", "Windows"];
  {{plugin_name}} = __decorate([
    Injectable()
  ], {{plugin_name}});
  return {{plugin_name}};
}(IonicNativePlugin));
export { {{plugin_name}} };
