// Import vue component
import component from './vue-simple-context-menu.vue';

export function install(app) {
  if (install.installed) return;

  install.installed = true;
  app.component('VueSimpleContextMenu', component);
}

const plugin = { install };

// To auto-install when Vue is found
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// To allow usage as a module (npm/webpack/etc.) export component
export default component;

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
