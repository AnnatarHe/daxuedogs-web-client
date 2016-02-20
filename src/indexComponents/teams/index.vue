<template>
    <div class="form-container form-for-sign team__form">
        <div class="team__form__header">
            <a href="javascript:;" :class="{active: state == 1}" @click="pick(1)">队长报名</a>
            <a href="javascript:;" :class="{active: state == 2}" @click="pick(2)">队员报名</a>
        </div>
        <div class="team__form__body">
            <leader-component v-show="state == 1"></leader-component>
            <sub-component v-show="state == 2"></sub-component>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            state: 1
        }
    },
    components: {
        'leaderComponent': require('./leader.vue'),
        'subComponent': require('./sub.vue')
    },
    methods: {
        /**
         * 选择队长还是队员选项卡
         * @param  {card} id
         * 1: leader 队长报名
         * 2: sub 队员报名
         * @return {[type]}    [description]
         */
        pick(id) {
            this.state = id
        }
    }

}
</script>

<style lang="stylus" scoped>
@import '../../stylus/variable'
.team__form
    flex-direction column
    background-color #fff
    &__header
        width 100%
        flex-design()
        border 1px solid $panel-bgc
        border-bottom none
        a
            padding 1rem 0
            flex-design()
            flex-center()
            color #000
            border-bottom 1px solid $panel-bgc
            &.active
                background-color $panel-bgc
                border-bottom none
    &__body
        width 100%
        flex-design()
        background-color $panel-bgc


</style>
