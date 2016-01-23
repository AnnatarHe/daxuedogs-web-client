<template>
<div class="admin__view admin__view--branch">
    <table class="table table--border">
        <tr>
            <td>
                编号
            </td>
            <td>
                名称
            </td>
            <td>
                操作
            </td>
        </tr>
        <tr>
            <td>1</td>
            <td>hello</td>
            <td>
                <button
                    type="button"
                    class="button button--none button--primary"
                    @click="editBranch"
                >
                    <i class="fa fa-edit fa-lg"></i>
                    编辑
                </button>

                <button
                    type="button"
                    class="button button--none button--danger"
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
import Store from '../../store/index'
export default {
    components: {
        'editBranchComponent': require('./_edit_department.vue')
    },
    methods: {
        editBranch() {
            Store.actions.toggleModalState()
            Store.actions.setModalType('branch')
            Store.actions.setEditingDepartmentId(1)
        }
    }
}
</script>

<style lang="stylus">
@import '../../stylus/variable'

.admin__view
    background-color $panel-bgc
</style>
