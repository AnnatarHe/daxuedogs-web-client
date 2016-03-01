<template>
    <div class="form-container form-for-sign">
        <form class="form" @submit.prevent="submitForm" novalidate>

            <div :class="{ field:true, error: email_err }">
                <input
                    type="email"
                    v-model="email"
                    placeholder="邮箱"
                    @blur="checkEmail"
                >
                <form-error-alert
                    v-show="email_err"
                >
                </form-error-alert>
            </div>

            <div :class="{field: true, error: number_err}">
                <input
                    type="number"
                    v-model="student_id"
                    number
                    placeholder="请输入学号"
                    @blur="checkNumber"
                />
                <form-error-alert
                    v-show="number_err"
                >
                </form-error-alert>
            </div>
            <div :class="{field: true, error: name_err}">
                <input
                    type="text"
                    v-model="name"
                    placeholder="你的姓名"
                    @blur="checkName"
                />
                <form-error-alert
                    v-show="name_err"
                >
                </form-error-alert>
            </div>
            <div class="field gender-field" v-if="needGender">
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
            <div class="field" v-if="needDormitory">
                <input type="text" placeholder="宿舍号" v-model="dormitory">
            </div>

            <div class="field major-field">
                <select v-model="major_id" class="select select--white">
                    <option value="0" selected>选择你的专业</option>
                    <option v-for="major in majors" value="{{ major.id }}">{{ major.name }}</option>
                </select>
            </div>

            <div :class="{field: true, error: phone_err}">
                <input
                    type="number"
                    v-model="phone"
                    number
                    placeholder="手机号"
                    @blur="checkPhone"
                />
                <form-error-alert
                    v-show="phone_err"
                >
                </form-error-alert>
            </div>

            <div class="field submit-field">
                <button type="submit" class="button submit-button" :disabled="refuse">
                    <i class="fa fa-check"></i>
                    <span>{{ refuse == true ? '已过期，请等待下次报名' : '提交' }}</span>
                </button>
            </div>
        </form>
    </div>
</template>

<script>
// 进入报名节目下面的表单
import Vuex from '../../store/index'
import Resource from '../../resource'
export default {
    props:['id'],
    components: {
        'formErrorAlert': require('../../commonComponents/form_error_alert.vue')
    },
    ready() {
        this.$http.get(`${Resource.prefix}/api/activity/${this.id}`)
            .then(res => {
                let endtime = Date.parse(res.data.endtime)
                // 若过期，则拒绝报名
                if (Date.now() > endtime) {
                    this.refuse = true
                }
                this.needDormitory = res.data.needDormitory
                this.needGender = res.data.needGender
            })
            .catch(err => console.log(err))
        this.$http.get(`${Resource.prefix}/api/majors`)
            .then( res => {
                this.majors = res.data
            })
            .catch( err => console.log(err))
    },
    data() {
        return {
            'student_id': '',
            'email': '',
            'name': '',
            'gender': '',
            'dormitory': '',
            'activity_id': '',
            'major_id': 0,
            'phone': '',
            'email_err': false,
            'number_err': false,
            'phone_err': false,
            'name_err': false,
            'needGender': false,
            'needDormitory': false,
            'majors': [],
            'refuse': false
        }
    },
    methods: {
        submitForm() {
            if (this.email_err || this.number_err || this.phone_err || this.name_err) {
                return
            }
            let remoteSaveServer = ''
            let userInfo = {
                'student_id': this.student_id,
                'email': this.email,
                'name': this.name,
                'gender': this.gender,
                'dormitory': this.dormitory,
                'major_id': this.major_id,
                'activity_id': this.id,
                'phone': this.phone
            }
            Vuex.actions.toggleLoadingModal()

            this.$http.post(`${Resource.prefix}/api/activity/${this.id}/register`, userInfo)
                .then((res)=> {
                    Vuex.actions.toggleLoadingModal()
                    switch (res.data.status) {
                        case 200:
                            swal('报名成功', '报名成功', 'success')
                            break
                        case 429:
                            swal('报名失败', '之前已经报名过了，不用报名了', 'error')
                        default:
                            break
                    }
                }, (err) => {
                    Vuex.actions.toggleLoadingModal()
                    swal('未知错误', '未知错误，请稍后重试','error')
                    console.log(err);
                })
        },
        selectMale() {
            this.gender = 'male'
        },
        selectFemale() {
            this.gender = 'female'
        },
        checkEmail() {
            if (this.email.length < 3) {
                this.email_err = true
            }else {
                this.email_err = false
            }
        },
        checkNumber() {
            let _student_id = this.student_id.toString().length
            if ( _student_id < 7 || _student_id > 10) {
                this.number_err = true
                return
            }else {
                this.number_err = false
            }
            // 远端校验用户是否注册的逻辑
            this.$http.get(`${Resource.prefix}/api/userRegisted/${this.id}/${this.student_id}`)
                .then( res => {
                    if (res.data.status == 429) {
                        swal('拒绝', '已经报名过了，不用报名啦', 'info')
                    }
                })
                .catch( err => console.log(err))
        },
        checkName() {
            let nameLen = this.name.trim().length
            if (nameLen < 2 || nameLen > 10) {
                this.name_err = true
            }else {
                this.name_err = false
            }
        },
        checkPhone() {
            let _phone = this.phone
            let pattern = /[1,3,4,5,7,8][0-9]{10}$/g
            if ( ! pattern.test(_phone) ) {
                this.phone_err = true
            }else {
                this.phone_err = false
            }
        }
    }

}
</script>

<style lang="stylus">
@import '../../stylus/variable'

.form-for-sign
    margin 1rem auto
    padding 1rem
    @media(max-width: 768px) {
        margin .2rem auto
        padding 0
    }
    background-color $panel-bgc
    box-shadow 0 0 1rem $panel-bgc
    align-items center
    justify-content center
    .gender-field
        flex-design()
        flex-direction row
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
</style>
