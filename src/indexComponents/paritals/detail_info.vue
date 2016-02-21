<template>
    <div class="detail-info">
        <div class="image">
            <img :src="detailObj.hero" alt="">
        </div>
        <div class="content">
            <h2 class="title">
                {{ detailObj.title }}
            </h2>

            <div class="desc">
                <p>{{ detailObj.desc }}</p>
            </div>

            <div class="extra">
                <div class="registed">
                    <div class="label">
                        {{ registed }}
                    </div>
                    <span>人已报名</span>
                </div>
                <div class="end-time">{{ detailObj.endTime }}</div>
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
import Store from '../../store/index'
import Resource from '../../resource'

export default {
    props: ['id'],
    data() {
        return {
            registed: 0,
            downloadPath: `${Resource.prefix}/api/attach/${this.id}`,
            detailObj: {},
            loaded: false
        }
    },
    ready() {
        this.$http.get(`${Resource.prefix}/api/activity/${this.id}`)
            .then(res => {
                this.detailObj = res.data
                this.loaded = true
            })
            .catch(err => console.log(err))
        this.$http.get(`${Resource.prefix}/api/registed/${this.id}`)
            .then(res => this.registed = res.data)
            .catch(err => console.log(err))
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
            span
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
