<template>
<form class="form admin__addActivity" @submit.prevent="handleSubmit">
    <div class="field">
        <input type="text" placeholder="活动名" v-model="title">
    </div>
    <div class="field">
        <input type="file" id="fileUploader" class="input__file--green">
    </div>
    <div class="field">
        <textarea class="textarea" rows="8" placeholder="请输入简介" v-model="desc"></textarea>
    </div>
    <div class="field inline-double">
        <label class="form-label">
            <span>需要性别选项吗</span>
        </label>
        <div :class="{'form-option':true, 'active': gender}" @click="toggleGenderOptions">
            <span v-if="gender == true">
                需要
            </span>
            <span v-else>
                不需要
            </span>
        </div>


    </div>
    <div class="field inline-double">
        <label class="form-label">
            <span>需要寝室数据吗</span>
        </label>
        <div :class="{'form-option':true, 'active': dormitory}" @click="toggleDorOptions">
            <span v-if="dormitory == true">
                需要
            </span>
            <span v-else>
                不需要
            </span>
        </div>
    </div>

    <div class="field">
        <input type="date" name="name" v-model="endtime">
    </div>

    <div class="submit-field">
        <button class="button button--submit" type="submit">
            <i class="fa fa-check fa-lg"></i>
            提交
        </button>
    </div>


</form>
</template>

<script>
export default {
    data() {
        // 搞定当前日期，使之适合date标签
        const _date = new Date()
        const year = _date.getFullYear()
        const month = (function() {
            let month = _date.getMonth() + 1
            if (month < 10) {
                month = '0' + month
            }
            return month
        }())
        const day = _date.getDate()
        const str = `${year}-${month}-${day}`
        // 搞定啦～

        return {
            title: '',
            desc: '',
            endtime: str,
            gender: false,
            dormitory: false
        }
    },

    methods: {
        handleSubmit() {
            // 构造表单数据
            let formData = new FormData()
            let file = document.querySelector('#fileUploader').files[0]
            formData.append('title', this.title)
            formData.append('file', file)
            formData.append('desc', this.desc)
            formData.append('endtime', this.endtime)
            formData.append('needGender', this.gender)
            formData.append('needDormitory', this.dormitory)

            this.$http.post('http://dev.iamhele.com/api/activity/create', formData)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })


        },
        toggleGenderOptions() {
            this.gender = ! this.gender
            console.log('toggle gender options')
        },
        toggleDorOptions() {
            this.dormitory = ! this.dormitory
            console.log('toggle dormitory options')
        }
    }

}
</script>

<style lang="stylus">
@import '../../stylus/variable'

.admin__addActivity
    background-color $panel-bgc

    .inline-double
        border-radius 1rem
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
