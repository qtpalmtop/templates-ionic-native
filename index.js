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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var ${plugin_name}Original = /** @class */ (function (_super) {
    __extends(${plugin_name}Original, _super);
    function ${plugin_name}Original() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ${plugin_name}Original.prototype.show = function () { return cordova(this, "show", { "sync": true }, arguments); };
    ${plugin_name}Original.plugin_id = "${plugin_name}";
    ${plugin_name}Original.plugin = "cordova-plugin-${plugin_id.replace('-native', '')}";
    ${plugin_name}Original.pluginRef = "${plugin_name}";
    ${plugin_name}Original.repo = "https://github.com/apache/${plugin_id.replace('-native', '')}";
    ${plugin_name}Original.platforms = ["Amazon Fire OS", "Android", "iOS", "Windows"];
    return ${plugin_name}Original;
}(IonicNativePlugin));
var ${plugin_name} = new ${plugin_name}Original();
export { ${plugin_name} };
