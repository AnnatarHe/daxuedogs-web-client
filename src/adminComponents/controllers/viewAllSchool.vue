<template>
<div class="admin__view admin__view--school">
    <table class="table table--border">
        <tr>
            <td>编号</td>
            <td>名称</td>
            <td>操作</td>
        </tr>
        <tr v-for="school in schools">
            <td>{{ school.id }}</td>
            <td>{{ school.name }}</td>
            <td>
                <button class="button button--none button--primary" type="button" disabled="disabled">
                    <i class="fa fa-edit fa-lg"></i>
                    编辑
                </button>
                <button class="button button--none button--danger" type="button" disabled="disabled">
                    <i class="fa fa-close fa-lg"></i>
                    删除
                </button>
            </td>
        </tr>
    </table>
</div>
</template>
<script>
import Resource from '../../resource'
export default {
    data() {
        return {
            schools: []
        }
    },
    ready() {
        this.$http.get(`${Resource.prefix}/api/school/all`)
            .then(res => {
                this.schools = res.data.data
            })
            .catch(err => {
                console.log(err)
            })
    }
}
</script>

<style lang="stylus">
@import '../../stylus/variable'

</style>
