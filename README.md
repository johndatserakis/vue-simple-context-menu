# vue-simple-context-menu

Simple context-menu component built for Vue. Works well with both left and right clicks. Nothing too fancy, just works and is simple to use.

### Demo

[View demo](https://johndatserakis.github.io/vue-simple-context-menu/)

[View on npm](https://www.npmjs.com/package/vue-simple-context-menu)

[View on GitHub](https://github.com/johndatserakis/vue-simple-context-menu)

### Install

```
# npm
npm i vue-simple-context-menu

#yarn
yarn add vue-simple-context-menu
```

Or you can include it through the browser at the bottom of your page:

`<script src="https://unpkg.com/vue-simple-context-menu"></script>`

### About

Just a simple little menu to be shown where a click happens - closes after use automatically by clicking an option or outside of the menu.

### Usage Example

```html
import VueSimpleContextMenu from 'vue-simple-context-menu'
Vue.component('vue-simple-context-menu', VueSimpleContextMenu)
```


```html
<!-- This is a basic use case where you have an array of items that you want
to allow to be clicked. In this case, `items` is an array of objects.
Each item has a click event that ties to a function. See the demo for a full example. -->

<div class="item-wrapper">
    <div v-for="item in items" @click.prevent.stop="handleClick($event, item)" class="item-wrapper__item">
        {{item.name}}
    </div>
</div>

<!-- Make sure you add the `ref` attribute, as that is what gives you the ability
to open the menu. -->

<vue-simple-context-menu
    :options="options"
    ref="vueSimpleContextMenu"
    @optionClicked="optionClicked">
</vue-simple-context-menu>

<!-- The click-handler function -->
handleClick (event, item) {
    this.$refs.vueSimpleContextMenu.showMenu(event, item)
}
```

Note - you must pass the click event-info variable to the `showMenu()` function because that's how we know where to show the menu.

Note - make sure to use `@click.prevent.stop` or `@contextmenu.prevent.stop` for right click) when setting up the click handler.

### Props

| prop    | type  | description                    |
|---------|-------|--------------------------------|
| options | Array | Array of menu options to show. Component will use the `name` parameter as the label. |

### Methods

| method    | parameters  | description                    |
|---------|-------|--------------------------------|
| showMenu |event (MouseEvent), item (Object) | Used to show the menu. Make sure to pass a MouseEvent and an Object. |

### Events

| event    | value  | description                    |
|---------|-------|--------------------------------|
| optionClicked | Object | When a menu item is clicked the component will emit an event with a value containing the clicked item and the menu option that was clicked. Register for this event to capture the selection result. |

### SASS Structure

```sass
.vue-simple-context-menu {
    &--active {
    }

    &__item {
        &:hover {
        }
    }
}
```

### Development

``` bash
# install dependencies
npm install

# serve with hot reload
npm run watch

# build demo page
npm run build:example

# build
npm run build

# publish to npm
npm version patch
npm publish
```

### Other

Go ahead and fork the project! Submit an issue if needed. Have fun!

### Thank You

Influenced by [Lucas Calazans](https://codepen.io/lucascalazans)'s [pen](https://codepen.io/lucascalazans/pen/ALvVVw). Go ahead and check out his other work.

### License

[MIT](http://opensource.org/licenses/MIT)

Packaged with a mixture of [vue-lib-template](https://github.com/biigpongsatorn/vue-lib-template) and [vue-sfc-rollup](https://github.com/team-innovation/vue-sfc-rollup).