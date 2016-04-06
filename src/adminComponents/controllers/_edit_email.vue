<template>
<modal-component head="发送邮件。。。" v-show="showEmailModal">
    <form class="form" @submit.prevent="sendEmail">
        <div class="field">
            <input type="text" v-model="head" placeholder="邮件标题">
        </div>
        <div class="field">
            <textarea class="textarea" rows="8" placeholder="邮件的主题内容"
                v-model="content"
            ></textarea>
        </div>
        <div class="submit-field field">
            <button class="button button--none button--primary" :disabled="sending">
                <i class="fa fa-paper-plane-o fa-lg"></i>
                {{ sedingText }}
            </button>
        </div>
    </form>
</modal-component>
</template>
<script>
import Resource from '../../resource.js'
import Vuex from '../../store/index'
export default {
    data() {
        return {
            head: '',
            content: '',
            sending: false,
            sedingText: '发送'
        }
    },
    components: {
        'modalComponent': require('../../commonComponents/modal.vue')
    },
    methods: {
        sendEmail() {
            let id = Vuex.state.editingEmailMessageId
            let data = {
                head: this.head,
                message: this.content
            }
            this.sending = true
            this.sedingText = '正在发送...'
            this.$http.post(`${Resource.prefix}/api/activity/${id}/email`, data)
                .then( res => {
                    if (res.status == 200) {
                        this.sending = false
                        this.sedingText = '发送'
                        swal('邮件已发送', '邮件已发送，请耐心等候', 'success')
                    }else {
                        swal('错误', `出现错误, 请将此信息反馈至更高级管理员. statusCode: ${res.status}`, 'error')
                    }
                })
        }
    },
    computed: {
        showEmailModal() {
            let modalState = Vuex.state.modalState
            let modalType = Vuex.state.modalType
            return modalState == true && modalType == 'email' ? true : false
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '../../stylus/variable'

</style>
