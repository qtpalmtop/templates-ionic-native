import { IonicNativePlugin } from '@ionic-native/core';
import { {{plugin_name}} } from "./ngx";
/**
 * @name {{plugin_name}}
 * @description This plugin just shows the toast demo.
 * @usage
 * \`\`\`typescript
 * import { {{plugin_name}} } from '{{plugin_id}}';
 * private 变量首字母小写
 * constructor(private {{plugin_name}}: {{plugin_name}}) { }
 *
 * ...
 * 这里变量首字母小写
 * this.{{plugin_name}}.show();
 *
 * \`\`\`
 */
export declare class {{plugin_name}}Original extends IonicNativePlugin {
  /**
   * Shows the toast
   */
  show(arg0, success, error): void;
}

export declare const {{plugin_name}}: {{plugin_name}}Original;
