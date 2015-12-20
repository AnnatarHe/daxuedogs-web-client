<template>

    <div>
        <header-component></header-component>
        <div class="container">
            <router-view
                    class="view"
                    keep-alive
                    transition
                    transition-mode="out-in"
            ></router-view>
        </div>

        <footer-component></footer-component>
    </div>
</template>

<script>
    import HeaderComponent from '../commonComponents/header.vue'
    import FooterComponent from '../commonComponents/footer.vue'

    export default {
        components: {
            HeaderComponent,
            FooterComponent
        }
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