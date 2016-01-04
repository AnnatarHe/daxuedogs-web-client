<template>
    <div class="department__detail">
        <div class="department__detail__title">
            <h3>Foo</h3>
        </div>
        <div class="department__detail__desc">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="department__detail__jobs">
            <table class="department__table">
                <tr>
                    <td>
                        <i class="fa fa-bookmark-o fa-lg"></i>
                        职位
                    </td>
                    <td>
                        <i class="fa fa-info-circle fa-lg"></i>
                        介绍
                    </td>
                </tr>
                <tr>
                    <td>foo</td>
                    <td>bar</td>
                </tr>

            </table>
        </div>

        <sociality-component
                weibo-link="javascript:;"
                weixin-link="javascript:;"
                qq-link="javascript:;"
        >
        </sociality-component>
    </div>
</template>

<script>
import Store from '../../store/index'
export default {
    components: {
        socialityComponent: require('../../commonComponents/sociality_links.vue')
    },
    data() {
        const did = this.$route.params.did
        return {
            did
        }
    },
    ready() {
        // 从远端获取数据, 都准备好啦~用Store就好了
    }

}
</script>

<style lang="stylus">
@import '../../stylus/variable'

.department__detail
    flex-design()
    media-width()
    background-color #e3e3e3
    box-shadow 0 0 1rem #d1d1d1
    margin .5rem auto
    flex-direction column
    &__title
        padding 1rem
        h3
            margin 0
            text-align center
    &__desc
        padding 1rem
    &__jobs
        padding 1rem
        .department__table
            width 100%
            border-color grey
            background-color #fff
            color #000
            box-shadow 0 0 1rem #d1d1d1
            tr
                transition all .35s ease

                &:hover
                    background-color $header-color
                    color #fff
                    box-shadow 0 0 1rem #ddd

            td
                border 1px solid #eee
                text-align center
                vertical-align middle
                padding 1rem

</style>
