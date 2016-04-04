<template>
    <div class="team__form--sub">
        <form @submit.prevent="handleSubmit" class="form">
            <div class="field major-field">
                <select class="select select-white" v-model="sub.team_id">
                    <option value="0" selected="selected">请选择你的队伍</option>
                    <option v-for="team in teams" value="{{ team.id }}">{{ team.name }}</option>
                </select>
            </div>

            <div class="field">
                <input type="number" required placeholder="学号" v-model="sub.student_id">
            </div>
            <div class="field">
                <input type="text" required placeholder="姓名" v-model="sub.name">
            </div>
            <div class="field" :class="{field: true, error: emailError}">
                <input type="email" required placeholder="邮箱" v-model="sub.email" @blur="checkEmail">
                <form-error-alert
                    v-show="emailError"
                ></form-error-alert>
            </div>
            <div class="field" v-show="needdormitory">
                <input type="text" placeholder="寝室号码" v-model="sub.dormitory">
            </div>

            <div class="field inline-double" v-show="needgender">
                <label class="form-label">
                    <span>性别</span>
                </label>
                <div :class="{'form-option':true, 'active': sub.gender == 'male'}" @click="toggleGender">
                    <span v-if="sub.gender == 'male'">
                        男孩子
                    </span>
                    <span v-else>
                        女孩子
                    </span>
                </div>
            </div>

            <div class="field">
                <input type="number" required placeholder="手机号码" v-model="sub.phone">
            </div>

            <div class="field major-field">
                <select v-model="sub.major_id" class="select select--white">
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
    components: {
        FormErrorAlert
    },
    props: [
        'id',
        'needgender',
        'needdormitory'
    ],
    data() {
        return {
            sub: {},
            majors: [],
            teams: [],
            emailError: false,
            allowClick: true,
            submitInfo: '报名'
        }
    },
    ready() {
        this.$set('sub.gender', 'male')
        this.$http.get(`${Resource.prefix}/api/activity/${this.id}/teams`)
            .then(res => {
                this.teams = res.data
            })
        this.$http.get(`${Resource.prefix}/api/majors`)
            .then( res => {
                this.majors = res.data
            })
            .catch( err => console.log(err))
    },
    methods: {
        handleSubmit() {
            this.allowClick = false
            this.submitInfo = '正在处理...'
            this.$http.post(`${Resource.prefix}/api/activity/${this.activityId}/sub`, this.sub)
                .then( res => {
                    if (res.status == 200) {
                        this.submitInfo = '成功'
                        this.allowClick = true
                        swal('报名成功', '加上队长只能有四个人哦', 'success')
                    }else {
                        swal(res.status, `出错了，${res.msg}`, 'error')
                    }
                })
        },

        toggleGender() {
            if (this.sub.gender == 'male') {
                this.sub.gender = 'female'
            }else {
                this.sub.gender = 'male'
            }
        },

        checkEmail(e) {
            let val = e.target.value
            this.emailError = /\w+@\w+\.\w+/g.test(val) ? false : true

        }

    },
    computed: {
        activityId() {
            return Vuex.state.currentActivityId
        },
        teams() {
            return Vuex.state.activityTeams
        }
    }

}
</script>

<style lang="stylus">
@import '../../stylus/variable'

.team__form--sub
    flex-design()
</style>
