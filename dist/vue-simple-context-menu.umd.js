(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('v-click-outside')) :
    typeof define === 'function' && define.amd ? define(['exports', 'vue', 'v-click-outside'], factory) :
    (factory((global.VueSimpleContextMenu = {}),global.Vue,global.vClickOutside));
}(this, (function (exports,Vue,vClickOutside) { 'use strict';

    Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;
    vClickOutside = vClickOutside && vClickOutside.hasOwnProperty('default') ? vClickOutside['default'] : vClickOutside;

    (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=".vue-simple-context-menu[data-v-718435e8] { top: 0; left: 0; margin: 0; padding: 0; display: none; list-style: none; position: absolute; z-index: 1000000; background-color: #ECF0F1; border-bottom-width: 0px; font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif; box-shadow: 0 3px 6px 0 rgba(51, 51, 51, 0.2); border-radius: 4px; } .vue-simple-context-menu--active[data-v-718435e8] { display: block; } .vue-simple-context-menu__item[data-v-718435e8] { display: flex; color: #333; cursor: pointer; padding: 5px 15px; align-items: center; } .vue-simple-context-menu__item[data-v-718435e8]:hover { background-color: #3482B5; color: #fff; } .vue-simple-context-menu li[data-v-718435e8]:first-of-type { margin-top: 4px; } .vue-simple-context-menu li[data-v-718435e8]:last-of-type { margin-bottom: 4px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
    Vue.use(vClickOutside);

    var component = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ul',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.onClickOutside),expression:"onClickOutside"}],staticClass:"vue-simple-context-menu",attrs:{"id":_vm.id}},_vm._l((_vm.options),function(option){return _c('li',{staticClass:"vue-simple-context-menu__item",on:{"click":function($event){_vm.optionClicked(option);}}},[_vm._v(" "+_vm._s(option.name)+" ")])}))])},staticRenderFns: [],_scopeId: 'data-v-718435e8',
        name: 'VueSimpleContextMenu',
        props: {
            id: {
                type: String,
                required: true
            },
            options: {
                type: Array,
                required: true
            }
        },
        data: function data () {
            return {
                item: null,
                menuWidth: null,
                menuHeight: null
            }
        },
        computed: {
        },
        methods: {
            showMenu: function showMenu (event, item) {
                this.item = item;

                var menu = document.getElementById(this.id);
                if (!menu) {
                    return
                }

                if(!this.menuWidth || !this.menuHeight) {
                    menu.style.visibility = "hidden";
                    menu.style.display = "block";
                    this.menuWidth = menu.offsetWidth;
                    this.menuHeight = menu.offsetHeight;
                    menu.removeAttribute("style");
                }

                if ((this.menuWidth + event.pageX) >= window.innerWidth) {
                    menu.style.left = (event.pageX - this.menuWidth + 2) + "px";
                } else {
                    menu.style.left = (event.pageX - 2) + "px";
                }

                if ((this.menuHeight + event.pageY) >= window.innerHeight) {
                    menu.style.top = (event.pageY - this.menuHeight + 2) + "px";
                } else {
                    menu.style.top = (event.pageY - 2) + "px";
                }

                menu.classList.add('vue-simple-context-menu--active');
            },
            hideContextMenu: function hideContextMenu () {
                document.getElementById(this.id).classList.remove('vue-simple-context-menu--active');
            },
            onClickOutside: function onClickOutside (event) {
                this.hideContextMenu();
            },
            optionClicked: function optionClicked (option) {
                this.hideContextMenu();
                this.$emit('optionClicked', {
                    item: this.item,
                    option: option
                });
            }
        }
    }

    // Import vue component

    // install function executed by Vue.use()
    function install(Vue$$1) {
    	if (install.installed) { return; }
    	install.installed = true;
    	Vue$$1.component('VueSimpleContextMenu', component);
    }

    // Create module definition for Vue.use()
    var plugin = {
    	install: install,
    };

    // To auto-install when vue is found
    var GlobalVue = null;
    if (typeof window !== 'undefined') {
    	GlobalVue = window.Vue;
    } else if (typeof global !== 'undefined') {
    	GlobalVue = global.Vue;
    }
    if (GlobalVue) {
    	GlobalVue.use(plugin);
    }

    // It's possible to expose named exports when writing components that can
    // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
    // export const RollupDemoDirective = component;

    exports.install = install;
    exports.default = component;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
