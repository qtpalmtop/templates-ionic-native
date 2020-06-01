import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name ${plugin_name}
 * @description This plugin just shows the ${plugin_name.replace(plugin_name[0], plugin_name[0].toLocaleLowerCase())} demo.
 * @usage
 * \`\`\`typescript
 * import { ${plugin_name} } from '${plugin_id}';
 *
 * constructor(private ${plugin_name.replace(plugin_name[0], plugin_name[0].toLocaleLowerCase())}: ${plugin_name}) { }
 *
 * ...
 *
 * this.${plugin_name.replace(plugin_name[0], plugin_name[0].toLocaleLowerCase())}.show();
 *
 * \`\`\`
 */
export declare class ${plugin_name} extends IonicNativePlugin {
  /**
   * Shows the ${plugin_name.replace(plugin_name[0], plugin_name[0].toLocaleLowerCase())}
   */
  show(arg0, success, error): void;


