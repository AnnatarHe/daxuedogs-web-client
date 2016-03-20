<template>
    <div class="detail-info">
        <div class="image">
            <img :src="prefix + detailObj.hero" alt="">
        </div>
        <div class="content">
            <h2 class="title">
                {{ detailObj.title || '加载中...' }}
            </h2>

            <div class="desc">
                <p>{{ detailObj.desc || '加载中...' }}</p>
            </div>

            <div class="extra">
                <div class="registed">
                    <div class="label">
                        {{ detailObj.registed_count || '加载中...' }}
                    </div>
                    <span>人已报名</span>
                </div>
                <div class="end-time">{{ detailObj.endtime || '加载中...' }}</div>
                <div class="attach">
                    <a :href="downloadPath" class="attach-button button">
                        <i class="fa fa-download fa-lg"></i>
                        <span>获取附件</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 进入报名界面上面的那一个信息模块
import Vuex from '../../store/index'
import Resource from '../../resource'

export default {
    props: ['id'],
    data() {
        return {
            downloadPath: `${Resource.prefix}/api/attach/${this.id}`,
            detailObj: {},
            loaded: false,
            // 给图片加个前缀
            prefix: Resource.prefix
        }
    },
    ready() {
        this.$http.get(`${Resource.prefix}/api/activity/${this.id}/withRegisted`)
            .then(res => {
                this.detailObj = res.data
                this.loaded = true
            })
            .catch(err => console.log(err))
    },
    computed: {
    }

}
</script>

<style lang="stylus">
@import '../../stylus/variable'

.detail-info
    flex-design()
    media-width()
    margin 1rem auto
    padding 1rem
    @media(max-width: 768px) {
        margin .2rem auto
        padding 0
        flex-direction column
    }
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
            width $image-size-at-list
    .content
        padding-left .5rem
        flex-design()
        flex-direction column
        .extra
            span
                display inline-block
            .end-time
                padding 1rem 0
                color #888
    .attach
        flex-design()
        justify-content flex-end
        margin 0 .5rem .5rem 0
        .attach-button
            color #fff
            background-color #FF9800

</style>
