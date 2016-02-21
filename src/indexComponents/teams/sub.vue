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
            <div class="field">
                <input type="email" required placeholder="邮箱" v-model="sub.email">
            </div>
            <div class="field">
                <input type="text" required placeholder="寝室号码" v-model="sub.dormitory">
            </div>
            <div class="field">
                <input type="text" required placeholder="性别" v-model="sub.gender">
            </div>
            <div class="field">
                <input type="number" required placeholder="手机号码" v-model="sub.phone">
            </div>

            <div class="field major-field">
                <select v-model="sub.major_id" class="select select--white">
                    <option value="0" selected>选择你的专业</option>
                    <option v-for="major in majors" value="{{ major.id }}">{{ major.name }}</option>
                </select>
            </div>
            <div class="field submit-field">
                <button type="submit" class="button button--submit">
                    申请
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
export default {
    data() {
        return {
            sub: {},
            majors: []
        }
    },
    ready() {
        this.$http.get(`${Resource.prefix}/api/majors`)
            .then( res => {
                this.majors = res.data
            })
            .catch( err => console.log(err))
    },
    methods: {
        handleSubmit() {
            this.$http.post(`${Resource.prefix}/api/activity/${this.activityId}/sub`, this.sub)
                .then( res => {
                    if (res.status == 200) {
                        swal('成功', '队长报名成功，请通知队员报名', 'success')
                    }else {
                        swal(res.status, `出错了，${res.msg}`, 'error')
                    }
                })
        },

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
