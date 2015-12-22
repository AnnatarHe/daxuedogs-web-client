<template>
    <div class="form-err-alert">
        <i class="fa fa-exclamation-circle fa-lg"></i>
        <span>错误</span>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
@import '../../stylus/variable'

.form-err-alert
    display flex
    justify-content center
    align-items center
    background-color $alert-container-error-color
    color $alert-font-error-color
    width 20%
    i
        padding-right .3rem
</style>
