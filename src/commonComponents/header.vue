<template>
    <header class="header">
        <div class="left-icon">
            <div class="more-button" @click="toggleNav">
                <i class="fa fa-bars fa-lg"></i>
            </div>
        </div>
        <div class="right login-container">

        </div>
    </header>

    <navbar-component v-show="navStatus" transition="expand"></navbar-component>
</template>

<script>
    import Store from '../store/index'
    import navbarComponent from './navbar.vue'

    export default {
        components: {
            navbarComponent
        },
        computed: {
            navStatus() {
                return Store.state.nav
            }
        },
        methods: {
            toggleNav: Store.actions.toggleNavbar,
        }
    }
</script>

<style lang='stylus'>
@import '../stylus/variable'

    .header
        flex-design()
        background-color: teal
        .left-icon
            flex-design()
            .more-button
                padding: 1rem
                color: #fff
                transition: all .35s ease-in
                &:hover
                    background-color: #fff
                    color: #000
        .login-container
            flex-design()
            padding: 1rem
    // 切换效果的动画
    .expand-transition
      transition: all .3s ease
      height: 10rem
      padding: 10rem
      background-color: #eee
      overflow: hidden

    /* .expand-enter 定义进入的开始状态 */
    /* .expand-leave 定义离开的结束状态 */
    .expand-enter, .expand-leave
      height: 0
      padding: 0 10rem
      opacity: 0
</style>