<template>
    <div class="detail-component">
        <detail-info-component :id="id" :detailObj="detailObj"></detail-info-component>
        <div class="div">
            <div class="description">
                <span>下面报名</span>
                <br>
                <i class="fa fa-angle-double-down fa-lg"></i>
            </div>

        </div>
        <form-component :id="id" v-if="team == false"></form-component>
        <team-component :id="id" v-else></team-component>
    </div>
</template>
<script>
// 这边的性能非常差，因为每次一加载这个页面就会发起两个同样的ajax请求，完全一样的
// 因为如果在父组件（就是这里）请求，放到Vuex那边异步加载，那么两个组件就会有一段时间是没有数据的，会造成出错。
// 这里就出现了bug，即便不渲染此组件，仍旧会出错。所以不得不分别发起同样的请求
// 现在，我准备写第三个请求。为了获取活动是否是团队报名模块。又是一样的请求。。。。。fuck!!!
import Vuex from '../store/index'
import Resource from '../resource'
export default {
    ready() {
        this.$http.get(`${Resource.prefix}/api/activity/${this.id}`)
            .then( res => {
                if (res.data.team == true) {
                    this.team = res.data.team
                }
            })
        Vuex.actions.setCurrentActivityId(this.id)
        Vuex.actions.getActivityTeams(this.$http)
    },
    data() {
        return {
            id: this.$route.params.id,
            detailObj: {},
            loaded: false,
            team: false
        }
    },
    components: {
        'detailInfoComponent': require('./paritals/detail_info.vue'),
        'formComponent': require('./paritals/form.vue'),
        'teamComponent': require('./teams/index.vue')
    }
}
</script>
<style lang="stylus">
@import '../stylus/variable'
.div
    flex-design()
    media-width()
    margin 1rem auto
    justify-content center
    align-items center
    position relative
    .description
        display flex
        flex-direction column
        justify-content center
        align-items center
        color #888
    &:before
        content ''
        position absolute
        height 2px
        width 45%
        display block
        background-color #ddd
        top 50%
        left 0

    &:after
        content ''
        position absolute
        height 2px
        width 45%
        display block
        background-color #ddd
        top 50%
        right 0
</style>
