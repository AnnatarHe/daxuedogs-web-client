<template>
    <div class="loading__container" transition="scale">
        <div class="loading__content">
            <i class="fa fa-refresh fa-spin"></i>
            <span class="text">正在加载...</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '../stylus/variable'

.loading__container
    flex-design()
    flex-center()
    padding 5rem 0
    flex-direction column
    .loading__content
        flex-design()
        flex-center()
        flex-direction column
        .text
            margin-top 1rem

</style>
