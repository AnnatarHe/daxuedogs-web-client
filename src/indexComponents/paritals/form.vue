<template>
    <div class="form-container form-for-sign">
        <form class="form" @submit.prevent="submitForm">

            <div class="field">
                <input
                    type="email"
                    v-model="email"
                    placeholder="邮箱"
                >
            </div>

            <div class="field">
                <input
                    type="number"
                    v-model="student_id"
                    number
                    placeholder="请输入学号"
                />
            </div>
            <div class="field">
                <input
                    type="text"
                    v-model="name"
                    placeholder="你的姓名"
                />
            </div>
            <div class="field gender-field">
                <label for="gender">性别</label>
                <div class="gender-options">
                    <div :class="{'active': gender == 'male' ? true : false}" @click="selectMale">
                        <i class="fa fa-male fa-2x"></i>
                        <span>男孩子</span>
                    </div>
                    <div :class="{'active': gender == 'female' ? true : false}" @click="selectFemale">
                        <i class="fa fa-female fa-2x"></i>
                        <span>女孩子</span>
                    </div>
                </div>
            </div>

            <div class="field major-field">
                <select v-model="major_id">
                    <option value="0" selected>选择你的专业</option>
                    <option value="1">电子商务</option>
                    <option value="2">电子商务</option>
                    <option value="3">电子商务</option>
                </select>
            </div>

            <div class="field">
                <input
                    type="number"
                    v-model="phone"
                    number
                    placeholder="手机号"
                />
            </div>

            <div class="field submit-field">
                <button type="submit" class="button submit-button">
                    <i class="fa fa-check"></i>
                    <span>提交</span>
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {

    data() {
        return {
            'student_id': '',
            'email': '',
            'name': '',
            'gender': '',
            'dormitory': '',
            'activity_id': '',
            'major_id': '',
            'phone': ''
        }
    },

    methods: {
        submitForm() {
            console.log('form post');
        },
        selectMale() {
            this.gender = 'male'
        },
        selectFemale() {
            this.gender = 'female'
        }
    }

}
</script>

<style lang="stylus">
@import '../../stylus/variable'

.form-for-sign
    margin 1rem auto
    padding 1rem
    background-color $panel-bgc
    box-shadow 0 0 1rem $panel-bgc
    align-items center
    justify-content center
    .gender-field
        label
            flex-design()
            align-items center
            justify-content flex-start
    .gender-options
        display flex
        flex 2
        flex-direction row
        align-items center
        justify-content center
        .active
            background-color $header-color
            color #fff
        div
            align-items center
            justify-content center
            flex-design()
            padding 1rem
            transition all .35s ease
            cursor pointer
            border-radius .3rem
            span
                padding-left 2rem
            &:hover
                background-color $header-color
                color #fff
    .major-field
        select
            width 100%
            font-size 1.1rem
            border-radius .3rem
            padding 1rem

</style>
