<template>

    <div>
        <header-component></header-component>
        <alert-component></alert-component>
        <div class="container">
            <router-view
                    class="view"
                    transition="scale"
                    transition-mode="out-in"
            ></router-view>
        </div>
        <footer-component></footer-component>

    </div>
</template>

<script>

    export default {
        components: {
            HeaderComponent: require('../commonComponents/header.vue'),
            FooterComponent: require('../commonComponents/footer.vue'),
            AlertComponent: require('../commonComponents/alert.vue'),
        },
        computed: {

        },
    }
</script>

<style lang='stylus'>
@require '../stylus/global'

.view
    opactity: 1
    transition: all .35s ease-in
    &.v-enter, &.v-leave
        opactity: 0
        display: none

</style>
