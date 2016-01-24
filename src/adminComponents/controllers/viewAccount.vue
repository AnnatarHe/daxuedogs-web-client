<template>
<div class="admin__view admin__view--account">

    <table class="table table--border">
        <tr>
            <td>id</td>
            <td>名字</td>
            <td>操作</td>
        </tr>
        <tr>
            <td>1</td>
            <td>学生会</td>
            <td>
                <button class="button button--none button--primary"
                    @click="viewDetail"
                >
                    <i class="fa fa-search fa-lg"></i>
                    查看详情
                </button>
            </td>
        </tr>
    </table>
    <view-account-component></view-account-component>
</div>
</template>
<script>
import Store from '../../store/index'
export default {
    components: {
        'viewAccountComponent': require('./_view_account_modal.vue')
    },
    methods: {
        viewDetail() {
            Store.actions.toggleModalState()
            Store.actions.setModalType('account')
            Store.actions.setViewingAccountId(1)
        }
    }

}
</script>
<style lang="stylus" scoped>
@import '../../stylus/variable'

</style>
