<template>

    <div>
        <header-component></header-component>
        <alert-component></alert-component>
        <div class="container">
            <div class="admin__view">
                <navbar-component></navbar-component>
                <router-view
                        class="view"
                        keep-alive
                        transition
                        transition-mode="out-in"
                ></router-view>
            </div>


        </div>
        <footer-component></footer-component>

    </div>
</template>

<script>

export default {
    components: {
        HeaderComponent: require('./header.vue'),
        FooterComponent: require('../commonComponents/footer.vue'),
        AlertComponent: require('../commonComponents/alert.vue'),
        NavbarComponent: require('./navbar.vue')
    }
}
</script>

<style lang='stylus'>
@require '../stylus/global'
.admin__view
    flex-design()
    flex-direction row
.view
    display flex
    flex 3
    opactity: 1
    transition: all .35s ease-in
    padding 1rem

    &.v-enter, &.v-leave
        opactity: 0
        display: none

</style>
