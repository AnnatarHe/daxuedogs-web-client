<template>
    <div class="admin__addSchool">
        <form class="form" @submit.prevent="handleSubmit">
            <div class="field">
                <input type="text" placeholder="学校名称" v-model="title">
            </div>
            <div class="field submit-field">
                <button type="submit" class="button button--submit">
                    <i class="fa fa-check fa-lg"></i>
                    创建
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import Resource from '../../resource'
export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        handleSubmit() {
            this.$http.post(`${Resource.prefix}/api/school/create`, {
                name: this.title
            })
            .then(res => {
                if (res.data.status) {
                    swal('创建学校成功', '创建学习成功啦', 'success')
                }else {
                    swal(res.data.status, `${res.data.msg}`, 'error')
                }
            })
        }
    }
}
</script>

<style lang="stylus">
@import '../../stylus/variable'

.admin__addSchool
    background-color $panel-bgc

</style>
