import { IonicNativePlugin } from '@ionic-native/core';
import { {{plugin_name}} } from "./ngx";
/**
 * @name {{plugin_name}}
 * @description This plugin just shows the toast demo.
 * @usage
 * \`\`\`typescript
 * import { {{plugin_name}} } from '{{plugin_id}}';
 *
 * constructor(private {{plugin_name.replace(plugin_name[0], plugin_name[0].toLocaleLowerCase())}}: {{plugin_name}}) { }
 *
 * ...
 *
 * this.{{plugin_name.replace(plugin_name[0], plugin_name[0].toLocaleLowerCase())}}.show();
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
