<template>
<div class="admin__view admin__view--activity">
    <table class="table table--border">
        <tr>
            <td>编号</td>
            <td>活动名</td>
            <td>报名数</td>
            <td>操作</td>
        </tr>
        <tr v-for='activity in activities'>
            <td>{{ activity.id }}</td>
            <td>{{ activity.title }}</td>
            <td>{{ activity.registed_count }}</td>
            <td>
                <button class="button button--none button--primary"
                    @click="editActivity(activity.id)"
                >
                    <i class="fa fa-edit fa-lg"></i>
                    编辑
                </button>
                <button class="button button--none button--success"
                    @click="sendEmail(activity.id)"
                >
                    <i class="fa fa-envelope-square fa-lg"></i>
                    邮件
                </button>
                <button class="button button--none button--danger"
                    @click="deleteActivity(activity.id)"
                >
                    <i class="fa fa-close fa-lg"></i>
                    删除
                </button>

            </td>
        </tr>
    </table>
    <edit-activity-component></edit-activity-component>
    <send-email-component></send-email-component>
</div>
</template>

<script>
import Store from '../../store/index'
// 这里可以调用Canvas展示数据图表
export default {
    data() {
        return {
            activities: []
        }
    },
    ready() {
        this.$http.get('http://dev.iamhele.com/api/activity/lists/with/registed')
            .then(res => {
                console.log(res.data.data)
                this.activities = res.data.data
            })
            .catch(err => {
                console.log(err)
            })
    },
    components: {
        'editActivityComponent': require('./_edit_activity.vue'),
        'sendEmailComponent': require('./_edit_email.vue')
    },
    methods: {
        editActivity(id) {
            Store.actions.toggleModalState()
            Store.actions.setModalType('activity')
            Store.actions.setEditingActivityId(id)
            Store.actions.getCurrentActivity(this, id)
        },
        sendEmail(id) {
            Store.actions.toggleModalState()
            Store.actions.setModalType('email')
            Store.actions.setEditingEmailMessageId(id)
        },
        deleteActivity(id) {
            alert('但尚未实现此功能')
        }
    },
    computed: {
        isActivity() {
            return Store.state.modalType == 'activity' ? true : false
        },
        isEmailSender() {
            return Store.state.modalType == 'email' ? true : false
        }
    }

}
</script>

<style lang="stylus">
@import '../../stylus/variable'

</style>
