<template>
    <div class="mask" v-show="loading" transition="scale">
        <div class="loading">
            <i class="fa fa-refresh fa-spin"></i>
            <span class="text">正在加载...</span>
        </div>
    </div>

</template>

<script>
import Store from '../store/index'

export default {
    computed: {
        loading() {
            return Store.state.loading
        }
    }

}
</script>

<style lang='stylus'>
@import "../stylus/variable"

.loading
    flex-design()
    flex-direction: column
    align-items: center
    justify-content: center
    position absolute
    top 30%
    left 25%
    width: 50%
    height: 10rem
    background-color #fff
    box-shadow 0 0 1rem #888
    border-radius .5rem
    @media screen and (max-width: 768px)
        width 90%
        left 5%
    span
        padding-top: 1rem

</style>
