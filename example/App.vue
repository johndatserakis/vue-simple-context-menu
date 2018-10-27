<template>
    <div id="app">

        <a href="https://github.com/johndatserakis/vue-simple-context-menu" target="_blank" class="github-corner" aria-label="View source on Github">
            <svg width="80" height="80" viewBox="0 0 250 250" style="fill:#56A6EF; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
                <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body">
                </path>
            </svg>
        </a>

        <div class="program-name">
            vue-simple-context-menu
        </div>

        <div class="install-text">
            npm i vue-simple-context-menu
        </div>

        <div class="info-link">
            <a class="info-link__link" href="https://github.com/johndatserakis/vue-simple-context-menu">View on GitHub</a>
        </div>

        <div class="info-link">
            <a class="info-link__link" href="https://www.npmjs.com/package/vue-simple-context-menu">View on NPM</a>
        </div>

        <div class="instructions-text">
            <p>Right click on an item below.</p>
        </div>

        <div class="item-wrapper">
            <div v-for="item in itemArray1" @contextmenu.prevent.stop="handleClick1($event, item)" class="item-wrapper__item">
                {{item.name}}
            </div>
        </div>

        <div class="instructions-text">
            <p>Left click on an item below.</p>
        </div>

        <div class="item-wrapper item-wrapper--last">
            <div v-for="item in itemArray2" @click.prevent.stop="handleClick2($event, item)" class="item-wrapper__item">
                {{item.name}}
            </div>
        </div>

        <vue-simple-context-menu
            :id="'myFirstMenu'"
            :options="optionsArray1"
            :ref="'vueSimpleContextMenu1'"
            @optionClicked="optionClicked1">
        </vue-simple-context-menu>

        <vue-simple-context-menu
            :id="'mySecondMenu'"
            :options="optionsArray2"
            :ref="'vueSimpleContextMenu2'"
            @optionClicked="optionClicked2">
        </vue-simple-context-menu>

    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                itemArray1: [
                    {
                        name: 'Jim',
                        job: 'Salesman'
                    },
                    {
                        name: 'Dwight',
                        job: 'Assistant to the Regional Manager'
                    },
                    {
                        name: 'Pam',
                        job: 'Receptionist'
                    }
                ],
                itemArray2: [
                    {
                        name: 'Leslie',
                        job: 'Deputy Director'
                    },
                    {
                        name: 'Ron',
                        job: 'Parks Director'
                    },
                    {
                        name: 'Andy',
                        job: 'Shoeshiner'
                    }
                ],
                optionsArray1: [
                    {
                        name: 'Duplicate',
                        slug: 'duplicate'
                    },
                    {
                        name: 'Edit',
                        slug: 'edit'
                    },
                    {
                        name: 'Delete',
                        slug: 'delete'
                    }
                ],
                optionsArray2: [
                    {
                        name: 'Add Star',
                        slug: 'add-star'
                    },
                    {
                        name: 'Remove Star',
                        slug: 'remove-star'
                    }
                ]
            }
        },
        methods: {
            handleClick1 (event, item) {
                this.$refs.vueSimpleContextMenu1.showMenu(event, item)
            },
            handleClick2 (event, item) {
                this.$refs.vueSimpleContextMenu2.showMenu(event, item)
            },
            optionClicked1 (event) {
                window.alert(JSON.stringify(event))
            },
            optionClicked2 (event) {
                window.alert(JSON.stringify(event))
            }
        }
    }
</script>

<style>
    body {
        margin: 0;
        height: 100%;
        height: 100vh;
        width: 100%;
        font-family: Verdana, "Helvetica Neue", sans-serif;
    }

    #app {
        height: 100%;
        height: 100vh;
        width: 100%;
        background-color: #fff;
        line-height: 1.5;
    }

    .program-name {
        text-align: center;
        font-size: 1.2rem;
        margin: 60px 0 40px;
        font-weight: bold;
    }

    @media (min-width: 992px) {
        .program-name {
            font-size: 2.0rem;
        }
    }

    .install-text {
        text-align: center;
        font-size: 0.9rem;
        margin: 0 auto 40px;
        background: #eee;
        padding: 10px 20px;
        border-radius: 6px;
        width: 275px;
        font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    }

    .info-link {
        text-align: center;
        margin-bottom: 5px;
        text-decoration: none;
        color: #56A6EF;
    }

    .info-link__link {
        text-decoration: none;
        color: #56A6EF;
    }

    .info-link__link:hover {
        color: #2f4265;
    }

    .instructions-text {
        text-align: center;
        margin: 20px 0 20px;
    }

    .item-wrapper {
        width: 275px;
        background: #f6f6f6;
        display: flex;
        flex-direction: column;
        margin: 40px auto 40px;
        padding: 40px 0;
    }

    .item-wrapper--last {
        margin-bottom: 60px;
    }

    .item-wrapper__item {
        font-size: 1.2rem;
        padding: 10px;
        background: #e4e4e4;
        margin-bottom: 10px;
        text-align: center;
        border-radius: 4px;
        user-select: none;
        -webkit-user-select: none;
    }

    .item-wrapper__item:hover {
        background: #56A6EF;
        color: #fff;
        cursor: pointer;
    }

    .item-wrapper__item:active {
        background: #476398;
        color: #fff;
        cursor: pointer;
    }

    .github-corner:hover .octo-arm {
        animation:octocat-wave 560ms ease-in-out
    }
    @keyframes octocat-wave {
        0%,100% {transform:rotate(0)}
        20%,60% {transform:rotate(-25deg)}
        40%,80% {transform:rotate(10deg)}
    }
    @media (max-width:500px) {
        .github-corner:hover .octo-arm {animation:none}
        .github-corner .octo-arm {animation:octocat-wave 560ms ease-in-out}
    }
</style>
