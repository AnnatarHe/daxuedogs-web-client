<template>
<modal-component head="发送邮件。。。" v-show="showEmailModal">
    <form class="form" @submit.prevent="sendEmail">
        <div class="field">
            <input type="text" v-model="title" placeholder="邮件标题">
        </div>
        <div class="field">
            <textarea class="textarea" rows="8" placeholder="邮件的主题内容"></textarea>
        </div>
        <div class="submit-field field">
            <button class="button button--none button--primary">
                <i class="fa fa-paper-plane-o fa-lg"></i>
                发送
            </button>
        </div>
    </form>
</modal-component>
</template>
<script>
import Store from '../../store/index'
export default {
    components: {
        'modalComponent': require('../../commonComponents/modal.vue')
    },
    methods: {
        sendEmail() {
            console.log('send email');
        }
    },
    computed: {
        showEmailModal() {
            let modalState = Store.state.modalState
            let modalType = Store.state.modalType
            return modalState == true && modalType == 'email' ? true : false
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '../../stylus/variable'

</style>
