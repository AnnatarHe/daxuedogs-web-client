<template>
<div class="admin__view admin__view--branch">
    <table class="table table--border">
        <tr>
            <td>编号</td>
            <td>名称</td>
            <td>操作</td>
        </tr>
        <tr v-for="branch in branches">
            <td>{{ branch.id }}</td>
            <td>{{ branch.name }}</td>
            <td>
                <button
                    type="button"
                    class="button button--none button--primary"
                    @click="editBranch(branch.id)"
                >
                    <i class="fa fa-edit fa-lg"></i>
                    编辑
                </button>

                <button
                    type="button"
                    class="button button--none button--danger"
                    @click="deleteBranch(branch.id)"
                >
                    <i class="fa fa-close fa-lg"></i>
                    删除
                </button>
            </td>
        </tr>
    </table>
    <edit-branch-component></edit-branch-component>
</div>
</template>
<script>
import Resource from '../../resource'
import Store from '../../store/index'
export default {
    data() {
        return {
            branches: []
        }
    },
    ready() {
        this.$http.get(`${Resource.prefix}/api/branchLists`)
            .then(res => {
                this.branches = res.data.data
            })
            .catch(err => console.log(err))
    },
    components: {
        'editBranchComponent': require('./_edit_department.vue')
    },
    methods: {
        editBranch(id) {
            Store.actions.toggleModalState()
            Store.actions.setModalType('branch')
            Store.actions.setEditingDepartmentId(id)
        },
        deleteBranch(id) {
            swal({
                title: "确认删除?",
                text: "确认删除此学生会部门",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "删除！",
                closeOnConfirm: false
            },
            () => {
                this.$http.delete(`${Resource.prefix}/api/branch/${id}`)
                    .then(() => {
                        swal("已删除", "已删除", "success")
                    })
            })
        }
    }
}
</script>

<style lang="stylus">
@import '../../stylus/variable'

.admin__view
    background-color $panel-bgc
</style>
