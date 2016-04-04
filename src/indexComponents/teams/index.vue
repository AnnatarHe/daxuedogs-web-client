<template>
    <div class="form-container form-for-sign team__form">
        <div class="team__form__header">
            <a href="javascript:;" :class="{active: state == 1}" @click="pick(1)">队长报名</a>
            <a href="javascript:;" :class="{active: state == 2}" @click="pick(2)">队员报名</a>
        </div>
        <div class="team__form__body">
            <leader-component
                v-show="state == 1"
                :needGender="needGender"
                :needDormitory="needDormitory"
                ></leader-component>
            <sub-component
                v-show="state == 2"
                :id="id"
                :needGender="needGender"
                :needDormitory="needDormitory"
             ></sub-component>
        </div>
    </div>
</template>

<script>
import Resource from '../../resource'
export default {
    props: ['id'],
    data() {
        return {
            state: 1,
            needGender: false,
            needDormitory: false
        }
    },
    ready() {
            this.$http.get(`${Resource.prefix}/api/activity/${this.id}`)
                .then(res => {
                    let data = res.data
                    if (data.needGender == 1) {
                        this.needGender = true
                    }

                    if (data.needDormitory == 1) {
                        this.needDormitory = true
                    }
                })
                .catch(err => {
                    console.warn(err)
                })
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

<style lang="stylus">
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

    .inline-double
        border-radius 1rem
        background-color #eee
        span
            padding 1rem
            color #fff

        .form-label
            background-color $header-color
            justify-content center
            align-items center
        .form-option
            cursor pointer
            transition all .35s ease-in
            align-items center
            justify-content center
            background-color $alert-font-success-color
            &.active
                background-color $header-color

</style>
