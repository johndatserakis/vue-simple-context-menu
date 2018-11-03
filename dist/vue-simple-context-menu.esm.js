import Vue from 'vue';
import vClickOutside from 'v-click-outside';

//
Vue.use(vClickOutside);

var script = {
    name: 'VueSimpleContextMenu',
    props: {
        elementId: {
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
    methods: {
        showMenu: function showMenu (event, item) {
            this.item = item;

            var menu = document.getElementById(this.elementId);
            if (!menu) {
                return
            }

            if (!this.menuWidth || !this.menuHeight) {
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
            var element = document.getElementById(this.elementId);
            if (element) {
                element.classList.remove('vue-simple-context-menu--active');
            }
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

/* script */
            var __vue_script__ = script;
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [
    _c(
      "ul",
      {
        directives: [
          {
            name: "click-outside",
            rawName: "v-click-outside",
            value: _vm.onClickOutside,
            expression: "onClickOutside"
          }
        ],
        staticClass: "vue-simple-context-menu",
        attrs: { id: _vm.elementId }
      },
      _vm._l(_vm.options, function(option) {
        return _c(
          "li",
          {
            staticClass: "vue-simple-context-menu__item",
            on: {
              click: function($event) {
                _vm.optionClicked(option);
              }
            }
          },
          [_vm._v("\n            " + _vm._s(option.name) + "\n        ")]
        )
      })
    )
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = "data-v-65f428bc";
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/johndatserakis/Documents/Code/vue-simple-context-menu/src/vue-simple-context-menu.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var component = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  )

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

export default component;
export { install };
