<template>
    <div class="activity-component">
        <div class="image">
            <img :src="detail.hero" class="img">
        </div>
        <div class="content">
            <h5 class="title">{{ detail.title }}</h5>
            <div class="extra">
                <div class="label">{{ registed }}</div>
                <span>人报名</span>
            </div>
            <p class="desc">{{ detail.desc | cutdesc }}</p>
            <div class="link-container">
                <a v-link="{ name: 'detail', params: { id: detail.id }}"
                    class="button button-detail"
                    >
                    报名
                    <i class="fa fa-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Resource from '../resource'
export default {
    props: ['detail'],
    data() {
        return {
            registed: 0
        }
    },

    ready() {
        this.$http.get(`${Resource.prefix}/api/registed/${this.detail.id}`)
            .then( res => {
                this.registed = res.data
            }, err => {
                console.log(err)
            })
    }

}

</script>

<style lang='stylus'>
@import '../stylus/variable'
.activity-component
    border-radius .5rem
    padding .5rem 0
    margin 1rem 0
    background-color #ddd
    flex-design()
    .image
        flex-design()
        justify-content center
        align-items center
        img
            border-radius .8rem
            width $image-size-at-list
            height $image-size-at-list

    .content
        display flex
        flex 2
        flex-direction column
        padding 1rem
        .title
            margin 0
            font-size 1.5rem
            margin-bottom .8rem
        .extra
            span
                display inline-block
        .link-container
            flex-design()
            align-items center
            justify-content center
            border-radius .5rem
a.button-detail
    color #fff
    background-color deeppink
</style>
