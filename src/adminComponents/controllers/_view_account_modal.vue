<template>
<modal-component head="查看用户详情" v-show="showAccountModal">
<div class="account__modal">

    <div class="head">
        <div class="image">
            <img src="/fake/img.jpg" alt="" class="img">
        </div>
        <div class="intro">
            <h3 class="name">某人名字</h3>

            <p class="location">山东蓝翔职业技术学院</p>

            <span class="time">2015-09-15 加入</span>
        </div>
    </div>
    <div class="body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>

    <div class="controls">
        <button class="button button--none button--danger button--radius" disabled="disabled">
            <i class="fa fa-close fa-lg"></i>
            删除
        </button>
    </div>
</div>
</modal-component>
</template>
<script>
import Resource from '../../resource'
import Vuex from '../../store/index'
export default {
    data() {
        return {
            userInfo: {}
        }
    },
    ready() {
        // 这里得用Vuex来获取数据，还是严格单向数据流。
        // 下个版本再加这个功能好了。哎
        swal('Sorry', '抱歉，查看详细账户数据功能尚未完成，请等待版本更新', 'info')
    },
    components: {
        'modalComponent': require('../../commonComponents/modal.vue')
    },
    computed: {
        showAccountModal() {
            let modalState = Vuex.state.modalState
            let modalType = Vuex.state.modalType
            return modalState == true && modalType == 'account' ? true : false
        }
    }

}
</script>
<style lang="stylus" scoped>
@import '../../stylus/variable'

.account__modal
    flex-design()
    flex-direction column
    padding 1rem
    justify-content center
    align-items center

.head
    flex-design()
    justify-content space-between
    align-items center
    .image
        flex-design()
        margin-right 1rem
        img
            border-radius .5rem
            flex-design()
    .intro
        flex-design()
        flex-direction column
        margin-left 1rem
        color #888
.body
    flex-design()
    margin 1rem 0
    text-indent 2rem
.controls
    flex-design()


</style>
