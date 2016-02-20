<template>
<div class="admin__account--check">

    <table class="table table--border">
        <tr>
            <td>id</td>
            <td>名称</td>
            <td>操作</td>
        </tr>
        <tr>
            <td>1</td>
            <td>体育部</td>
            <td>
                <button
                    class="button button--none button--danger"
                    @click="checkAccount"
                >
                    <i class="fa fa-check fa-lg"></i>
                    审核通过
                </button>
            </td>
        </tr>
    </table>

</div>
</template>
<script>
export default {
    methods: {
        checkAccount() {
            swal('抱歉', '抱歉，此功能尚在开发中，请等待版本更新', 'info')
        }
    }

}
</script>
<style lang="stylus" scoped>
@import '../../stylus/variable'

// .admin__account--check


</style>
