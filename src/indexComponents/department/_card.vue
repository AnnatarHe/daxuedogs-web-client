<template>
    <div class="card">

        <div class="img">
            <img
                :src="carddata.img"
                alt="department hero image"
                v-link="{ name: 'departmentDetail', params: { did: carddata.id }}"
            />
        </div>

        <div class="desc">
            <div class="desc-title">
                <h6>{{ carddata.title }}</h6>
            </div>
            <!-- <div class="desc-content"></div> -->
            <div class="sociality">
                <a class="social" :href="carddata.weiboLink">
                    <i class="fa fa-weibo fa-lg"></i>
                </a>
                <a class="social" :href="carddata.weixinLink">
                    <i class="fa fa-weixin fa-lg"></i>
                </a>
                <a class="social" :href="carddata.qqLink">
                    <i class="fa fa-qq fa-lg"></i>
                </a>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: ['carddata']
}
</script>

<style lang="stylus">
@import '../../stylus/variable'

.card
    background-color #e3e3e3
    border-radius .5rem
    margin 1rem
    .img
        cursor pointer
    .desc
        display flex
        align-items center
        justify-content center
        flex-direction column

        h6
            margin 1rem 0
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
                background-color #666
                color #fff

</style>
