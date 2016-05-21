<template>
    <div class="activity-component">
        <div class="image">
            <img :src="prefix + detail.hero" class="img" alt="加载中...">
        </div>
        <div class="content">
            <h5 class="title">{{ detail.title || 'loading' }}</h5>
            <div class="extra">
                <div class="label">{{ detail.registed_count || 0 }}</div>
                <span>支队伍报名</span>
            </div>
            <p class="desc">{{ detail.desc || 'loading' | cutdesc  }}</p>
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
            registed: 0,
            prefix: Resource.prefix
        }
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
    @media (max-width: 768px)
        flex-direction column
    .image
        flex-design()
        justify-content center
        align-items center
        img
            border-radius .8rem
            width $image-size-at-list
    .content
        flex-design()
        flex-direction column
        padding 1rem
        .title
            margin 0
            font-size 1.5rem
            margin-bottom .8rem
        .extra
            .label
                color #fff
            span
                display inline-block
        .link-container
            flex-design()
            align-items center
            justify-content center
            border-radius .5rem
a.button-detail
    color #fff
    background-color #31b0df
</style>
