import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name {{plugin_name}}
 * @description This plugin just shows the {{plugin_name}} demo.
 * @usage
 * ```typescript
 * import { {{plugin_name}} } from '{{plugin_id}}';
 *
 * private 变量首字母小写
 * constructor(private {{plugin_name}}: {{plugin_name}}) { }
 *
 * ...
 * 这里变量首字母小写
 * this.{{plugin_name}}.show();
 *
 * ```
 */
export declare class {{plugin_name}} extends IonicNativePlugin {
  /**
   * Shows the {{plugin_name}}
   */
  show(arg0, success, error): void;


