<template>
    <div class="team__form--leader">
        <form @submit.prevent="handleSubmit" class="form">
            <div class="field">
                <input type="text" required placeholder="队伍名称" v-model="team.team_name" @blur="checkTeam">
            </div>

            <div class="field">
                <input type="number" required placeholder="学号" v-model="team.student_id">
            </div>

            <div class="field">
                <input type="text" required placeholder="姓名" v-model="team.name">
            </div>
            <div :class="{field: true, error: emailError}">
                <input type="email" required placeholder="邮箱" v-model="team.email" @blur="checkEmail">
                <form-error-alert
                    v-show="emailError"
                ></form-error-alert>
            </div>
            <div class="field" v-show="needdormitory">
                <input type="text" placeholder="寝室号码" v-model="team.dormitory">
            </div>

            <div class="field">
                <input type="number" required placeholder="手机号码" v-model="team.phone">
            </div>

            <div class="field inline-double" v-show="needgender">
                <label class="form-label">
                    <span>性别</span>
                </label>
                <div :class="{'form-option':true, 'active': team.gender == 'male'}" @click="toggleGender">
                    <span v-if="team.gender == 'male'">
                        男孩子
                    </span>
                    <span v-else>
                        女孩子
                    </span>
                </div>
            </div>

            <div class="field major-field">
                <select v-model="team.major_id" class="select select--white">
                    <option value="{{ majors.length > 0 ? majors[0]['id'] : 0 }}" selected>专业(选填)</option>
                    <option v-for="major in majors" value="{{ major.id }}">{{ major.name }}</option>
                </select>
            </div>
            <div class="field submit-field">
                <button type="submit" class="button button--submit" :disabled="! allowClick">
                    {{ submitInfo }}
                </button>
            </div>
        </form>
    </div>
</template>

<script>
// 这边的majors 可以转移到Vuex那边弄，等这一版做完再重构吧
// 对应的在 ../paritals/form.vue
// 还有 ./sub.vue
import Vuex from '../../store/index'
import Resource from '../../resource'
import FormErrorAlert from '../../commonComponents/form_error_alert.vue'
export default {
    props: [
        "needdormitory",
        "needgender"
    ],
    components: {
        FormErrorAlert
    },
    data() {
        return {
            team: {},
            majors: [],
            emailError: false,
            allowClick: true,
            submitInfo: '申请'
        }
    },
    ready() {
        this.$set('team.gender' ,'male')
        this.$set('team.major_id', 0)
        this.$http.get(`${Resource.prefix}/api/majors`)
            .then( res => {
                this.majors = res.data
                this.team.major_id = res.data[0]['id']
            })
            .catch( err => console.log(err))
    },
    methods: {
        handleSubmit() {
            this.allowClick = false
            this.submitInfo = '正在处理...'
            this.$http.post(`${Resource.prefix}/api/activity/${this.activityId}/leader`, this.team)
                .then( res => {
                    if (res.status == 200) {
                        this.submitInfo = '报名'
                        swal('成功', `队长报名成功，请截图本页面报名号：${res.data.msg}`, 'success')
                    }else {
                        swal(res.status, `出错了，${res.msg}`, 'error')
                    }
                })
                .catch(err => {
                    console.error(err)
                    swal(res.status, `出错了，${err.msg}`, 'error')
                    this.allowClick = true
                    this.submitInfo = '报名'
                })
        },
        toggleGender() {
            let gender = this.team.gender
            if (gender == 'male') {
                this.team.gender = 'female'
            }else {
                this.team.gender = 'male'
            }
        },
        checkEmail(e) {

            let val = e.target.value
            this.emailError = /\w+@\w+\.\w+/g.test(val) ? false : true

        },
        checkTeam(e) {
            let name = e.target.value
            this.$http.get(`${Resource.prefix}/api/activity/${this.activityId}/teams`)
                .then(res => {
                    let repeated = res.data.filter(current => name == current.name)
                    if (repeated.length > 0) {
                        swal('团队已报名', '团队已报名，请告知其他三位小伙伴报名', 'info')
                        this.allowClick = false
                        this.submitInfo = '重复报名'
                    }else {
                        this.allowClick = true
                        this.submitInfo = '申请'
                    }
                })
        }
    },
    computed: {
        activityId() {
            return Vuex.state.currentActivityId
        }

    }

}
</script>

<style lang="stylus">
@import '../../stylus/variable'

.team__form--leader
    flex-design()
    button[type=submit]
        p
            margin 0

</style>
