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
            console.log('here in show menu')
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

            menu.classList.add('active')
        },
        hideContextMenu () {
            document.getElementById("vue-simple-context-menu").classList.remove('active');
        },
        onClickOutside (event) {
            this.hideContextMenu()
        },
        optionClicked (option) {
            // this.$root.$emit('rightClickOptionClicked', this.item, option)
        }
    },
    mounted () {
        // this.$root.$on('rightClick', (item, event) => {
        //     this.item = item
        //     this.showMenu(item, event)
        // })
    },
    components: {
    }
}
</script>

<style lang="scss" scoped>
</style>