<template>
<div class="admin__view admin__view--account">

    <table class="table table--border">
        <tr>
            <td>id</td>
            <td>邮箱</td>
            <td>昵称</td>
            <td>操作</td>
        </tr>
        <tr v-for="user in users">
            <td>{{ user.id }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.name }}</td>
            <td>
                <button class="button button--none button--primary"
                    @click="viewDetail(user.id)"
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
import Resource from '../../resource'
import Store from '../../store/index'
export default {
    data() {
        return {
            users: []
        }
    },
    ready() {
        this.$http.get(`${Resource.prefix}/api/users/all`)
            .then(res => {
                this.users = res.data.data
            })
            .catch(err => {
                console.log(err)
            })
    },
    components: {
        'viewAccountComponent': require('./_view_account_modal.vue')
    },
    methods: {
        viewDetail(id) {
            Store.actions.toggleModalState()
            Store.actions.setModalType('account')
            Store.actions.setViewingAccountId(id)
        }
    }

}
</script>
<style lang="stylus" scoped>
@import '../../stylus/variable'

</style>
