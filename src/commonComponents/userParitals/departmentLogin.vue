<template>
    <div>
        <form @submit.prevent="login" class="form department-login-form">
            <div class="field">
                <input
                    type="text"
                    placeholder="用户名"
                    v-model="username"
                />
                <error-component v-show="username_err"></error-component>
            </div>
            <div class="field">
                <input
                    type="password"
                    placeholder="密码"
                    v-model="password"
                />
                <error-component v-show="password_err"></error-component>
            </div>
            <div class="field submit-field">
                <button type="submit" class="button login-btn">
                    <i class="fa fa-check fa-lg"></i>
                    登陆
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import Store from '../../store/index'
export default {
    components: {
        'errorComponent': require('../form_error_alert.vue')
    },
    data() {
        return {
            username: '',
            password: '',
            username_err: false,
            password_err: false
        }
    },
    methods: {
        login() {
            if (this.username.length < 3) {
                this.username_err = true
                return
            }
            this.username_err = false
            if (this.password.length < 3) {
                this.password_err = true
                return
            }
            this.password_err = false
            // 提交表单登陆
            // Store.actions.toggleLoadingModal()
            let _info = {
                username: this.username,
                password: this.password
            }
            console.log(_info)
        }
    }

}
</script>

<style lang="stylus">
@import '../../stylus/variable'

.department-login-form
    background-color #ddd
    .login-btn
        background-color $header-color
        color #ffffff
        border none
        padding .5rem 2rem
</style>
