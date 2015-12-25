<template>
    <header class="header">
        <div class="left-icon">
            <div class="more-button" @click="toggleNav">
                <i class="fa fa-bars fa-lg"></i>
            </div>
        </div>
        <div class="status">
            <h2>{{ currentStatus }}</h2>
        </div>

        <div class="right login-container">
            <div class="more-button" @click="toggleModal">
                <i class="fa fa-user fa-lg"></i>
            </div>
        </div>
    </header>

    <navbar-component v-show="navStatus" transition="expand"></navbar-component>
    <user-modal-component
    >
     </user-modal-component>

     <loading-component></loading-component>
</template>

<script>
    import Store from '../store/index'

    export default {
        components: {
            'navbarComponent': require('./navbar.vue'),
            'userModalComponent': require('./userParitals/indexModal.vue'),
            'loadingComponent': require('./loading.vue')
        },
        computed: {
            navStatus() {
                return Store.state.nav
            },
            currentStatus() {
                return Store.state.headerTitle
            }
        },
        methods: {
            toggleNav: Store.actions.toggleNavbar,
            toggleModal: Store.actions.toggleUserModal
        }
    }
</script>

<style lang='stylus'>
@import '../stylus/variable'

.header
    flex-design()
    background-color $header-color
    .left-icon
        flex-design()
        align-items center
        justify-content flex-start
    .more-button
        padding 1rem
        color #fff
        transition all .35s ease-in
        &:hover
            background-color #fff
            color #000
    .status
        flex-design()
        align-items center
        justify-content center
        h2
            margin 0
            color #fff

    .login-container
        flex-design()
        justify-content flex-end

</style>
