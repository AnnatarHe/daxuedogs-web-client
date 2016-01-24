<template>
<div class="admin__view admin__view--activity">
    <table class="table table--border">
        <tr>
            <td>编号</td>
            <td>活动名</td>
            <td>报名数</td>
            <td>操作</td>
        </tr>
        <tr>
            <td>1</td>
            <td>foo</td>
            <td>1</td>
            <td>
                <button class="button button--none button--primary"
                    @click="editActivity"
                >
                    <i class="fa fa-edit fa-lg"></i>
                    编辑
                </button>
                <button class="button button--none button--success">
                    <i class="fa fa-envelope-square fa-lg"></i>
                    邮件
                </button>
                <button class="button button--none button--danger">
                    <i class="fa fa-close fa-lg"></i>
                    删除
                </button>

            </td>
        </tr>
    </table>
    <edit-activity-component></edit-activity-component>
</div>
</template>

<script>
import Store from '../../store/index'
// 这里可以调用Canvas展示数据图表
export default {
    components: {
        'editActivityComponent': require('./_edit_activity.vue')
    },
    methods: {
        editActivity() {
            Store.actions.toggleModalState()
            Store.actions.setModalType('activity')
            Store.actions.setEditingActivityId(1)
        }
    }

}
</script>

<style lang="stylus">
@import '../../stylus/variable'

</style>
