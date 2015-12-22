<template>
    <div :class="className" transition="fade" v-show="alertStatus">
        <div class="alert-container">
            <div class="head">
                <h5>{{ info.title }}</h5>
                <div class="close">
                    <div class="close-btn"
                        @click="close"
                        @mouseenter="showAlt"
                        @mouseleave="hideAlt"
                        >
                        <i class="fa fa-close fa-lg"></i>
                    </div>
                </div>
                <span class="alt"
                    v-show="altStatus"
                    transition="altTrans"
                    >
                关闭 </span>
            </div>
            <span class="msg">{{ info.msg }}</span>
        </div>

    </div>
</template>

<script>
import Store from '../store/index'
// alert 组件
// 使用方式
// <alert-component
//     type="error"
//     msg="你有信息填写错误啦"
//     title="信息填写错误"
//     >
// </alert-component>
export default {


    data() {
        return {
            'altStatus': false
        }
    },
    computed: {
        info() {
            return Store.state.alertMsg
        },
        className() {
            let isError = this.info.type === 'error' ? true : false
            let isSucess = this.info.type === 'success' ? true : false

            return {
                'alert': true,
                'alert-error': isError,
                'alert-success': isSucess
            }
        },
        alertStatus() {
            return this.info.msg.length > 0 ? true : false
        }

    },
    methods: {
        close() {
            this.$remove()
        },
        showAlt() {
            this.altStatus = true
        },
        hideAlt() {
            this.altStatus = false
        }
    }

}
</script>

<style lang="stylus">
@import '../stylus/variable'

.alert
    margin-top 1rem
    flex-design()
    flex-direction column
    align-items center
    justify-content center
    .alert-container
        media-width()
        flex-design()
        flex-direction column
        border-radius 1rem
        padding 1rem
        h5
            font-size 1.2rem
            margin: 0 0 1rem 0
        .msg
            display flex
            flex 3
            font-size 1rem
    &.alert-success
        .alert-container
            background-color $alert-container-success-color
            color teal
    &.alert-error
        .alert-container
            background-color $alert-container-error-color
            color $alert-font-error-color
    .head
        flex-design()
        flex-direction row
        align-items center
        justify-content space-around
        position relative
        h5
            flex-design()
        .close
            flex-design()

            justify-content flex-end
            .close-btn
                padding 1rem
                cursor pointer
                transition all .35s ease
                &:hover
                    background-color $header-color
                    color lighten($alert-font-error-color, 80%)
                    box-shadow 0 0 1rem darken($header-color, 20%)
        span.alt
            display flex
            padding .7rem
            position absolute
            bottom -3rem
            right -0.2rem
            background-color #ddd
            box-shadow 0 0 1rem #888
            &:after
                content ''
                position absolute
                width 0
                height 0
                bottom 100%
                right 1rem
                border-right .8rem solid transparent
                border-bottom 1rem solid #ddd
                border-left .8rem solid transparent
    .altTrans-transition
        transition all .35s ease
        opacity 1
    .altTrans-enter, .altTrans-leave
        opacity 0
.fade-transition
    transition all .35s ease
    height 13rem
.fade-enter, .fade-leave
    height 0
    opacity 0


</style>
