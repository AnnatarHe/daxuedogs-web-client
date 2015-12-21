<template>

    <div class="loading">
        <i class="fa fa-refresh fa-spin"></i>
        <span class="text">正在加载...</span>
    </div>

</template>

<script>
export default {
    created() {}

}
</script>

<style lang='stylus'>
    @import "../stylus/variable";

    .loading
        flex-design()
        flex-direction: column
        align-items: center
        justify-content: center
        position absolute
        left: 40%
        top: 5rem
        width: 10rem
        height: 10rem
        span
            padding-top: 1rem

</style>