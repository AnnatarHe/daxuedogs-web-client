<template>
    <div class="team__form--leader">
        <form @submit.prevent="handleSubmit" class="form">
            <div class="field">
                <input type="text" placeholder="队伍名称" v-model="team.team_name">
            </div>

            <div class="field">
                <input type="number" placeholder="学号" v-model="team.student_id">
            </div>
            <div class="field">
                <input type="text" placeholder="姓名" v-model="team.name">
            </div>
            <div class="field">
                <input type="email" placeholder="邮箱" v-model="team.email">
            </div>
            <div class="field">
                <input type="text" placeholder="寝室号码" v-model="team.dormitory">
            </div>
            <div class="field">
                <input type="text" placeholder="性别" v-model="team.gender">
            </div>
            <div class="field">
                <input type="number" placeholder="手机号码" v-model="team.phone">
            </div>

            <div class="field major-field">
                <select v-model="team.major_id" class="select select--white">
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
import Resource from '../../resource'
export default {
    data() {
        return {
            team: {},
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
            console.log('handleSubmit')
        },

    }

}
</script>

<style lang="stylus">
@import '../../stylus/variable'

.team__form--leader
    flex-design()

</style>
