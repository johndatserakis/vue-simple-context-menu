<template>
    <div>

        <ul id="vue-simple-context-menu" class="vue-simple-context-menu" v-click-outside="onClickOutside">
            <li v-for="option in options" @click="optionClicked(option)" class="vue-simple-context-menu__item">
                {{option.name}}
            </li>
        </ul>

    </div>
</template>

<script>

import Vue from 'vue'
import vClickOutside from 'v-click-outside'
Vue.use(vClickOutside)

export default {
    name: 'VueSimpleContextMenu',
    props: {
        options: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            item: null,
            menuWidth: null,
            menuHeight: null
        }
    },
    computed: {
    },
    methods: {
        showMenu (event, item) {
            this.item = item

            var menu = document.getElementById("vue-simple-context-menu")
            if (!menu) {
                return
            }

            if(!this.menuWidth || !this.menuHeight) {
                menu.style.visibility = "hidden"
                menu.style.display = "block"
                this.menuWidth = menu.offsetWidth
                this.menuHeight = menu.offsetHeight
                menu.removeAttribute("style")
            }

            if ((this.menuWidth + event.pageX) >= window.innerWidth) {
                menu.style.left = (event.pageX - this.menuWidth) + "px"
            } else {
                menu.style.left = event.pageX + "px"
            }

            if ((this.menuHeight + event.pageY) >= window.innerHeight) {
                menu.style.top = (event.pageY - this.menuHeight) + "px"
            } else {
                menu.style.top = event.pageY + "px"
            }

            menu.classList.add('vue-simple-context-menu--active')
        },
        hideContextMenu () {
            document.getElementById("vue-simple-context-menu").classList.remove('vue-simple-context-menu--active');
        },
        onClickOutside (event) {
            this.hideContextMenu()
        },
        optionClicked (option) {
            this.hideContextMenu()
            this.$emit('optionClicked', {
                item: this.item,
                option: option
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    $light-grey: #ECF0F1;
    $blue: #3482B5;
    $white: #fff;

    .vue-simple-context-menu {
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        display: none;
        list-style: none;
        position: absolute;
        z-index: 1000000;
        background-color: $light-grey;
        border: 1px solid darken($light-grey, 5%);
        border-bottom-width: 0px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

        &--active {
            display: block;
        }

        &__item {
            display: flex;
            cursor: pointer;
            padding: 12px 22px;
            align-items: center;
            border-bottom: 1px solid darken($light-grey, 15%);
            transition: all 0.2s ease;

            &:hover {
                background-color: $blue;
                color: $white;
            }
        }
    }
</style>