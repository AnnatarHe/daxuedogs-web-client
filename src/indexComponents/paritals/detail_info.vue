<template>
    <div class="detail-info">
        <div class="image">
            <img :src="info.hero" alt="">
        </div>
        <div class="content">
            <h2 class="title">
                {{ info.title }}
            </h2>

            <div class="desc">
                <p>{{ info.desc }}</p>
            </div>

            <div class="extra">
                <div class="registed">
                    <div class="label">
                        {{ info.registed }}
                    </div>
                    <span>人已报名</span>
                </div>
                <div class="end-time">{{ info.endTime }}</div>
                <div class="attach">
                    <a :href="info.id" class="attach-button button">
                        <i class="fa fa-download fa-lg"></i>
                        <span>获取附件</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Store from '../../store/index'

export default {
    props: ['info']

}
</script>

<style lang="stylus">
@import '../../stylus/variable'

.detail-info
    flex-design()
    media-width()
    margin 1rem auto
    padding 1rem
    box-shadow 0 0 1rem #ddd
    background-color $panel-bgc
    align-items center
    justify-content center
    .image
        flex-design()
        align-items center
        justify-content center
        img
            border-radius 1rem
    .content
        padding-left .5rem
        display flex
        flex 2
        flex-direction column
        .extra
            .label
                background-color lighten($header-color, 10%)
                padding .5rem 1rem
                color #fff
            .label, span
                display inline-block
            .end-time
                padding 1rem 0
                color #888
    .attach
        flex-design()
        justify-content flex-end
        .attach-button
            color #fff
            background-color deeppink

</style>
