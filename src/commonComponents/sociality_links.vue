<template>
<div class="sociality">
    <a class="social social-weibo" :href="weiboLink">
        <i class="fa fa-weibo fa-lg"></i>
    </a>
    <a class="social social-weixin" :href="weixinLink">
        <i class="fa fa-weixin fa-lg"></i>
    </a>
    <a class="social social-qq" :href="qqLink">
        <i class="fa fa-qq fa-lg"></i>
    </a>
</div>
</template>

<script>
export default {
    props: ['weiboLink', 'weixinLink', 'qqLink']

}
</script>

<style lang="stylus">
@import '../stylus/variable'
.sociality
    flex-design()
    flex-direction row
    width 100%
    border-top 1px solid #888
    .social
        flex-design()
        align-items center
        justify-content center
        padding 1rem 0
        transition all .35s ease
        color #000
        &:hover
            background-color #eee
            color #fff
        &.social-weibo:hover
            color #E6162D
        &.social-weixin:hover
            color #348903
        &.social-qq:hover
            color #3D95D5
</style>
