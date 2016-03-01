<template>
    <div class="mask" transition="scale" v-show="modalState">
        <div class="modal-container">
            <div class="modal-title">
                <h3>{{ title }}</h3>
            </div>
            <hr />
            <div class="modal-content">
                <ul class="login-methods">
                    <li :class="{item: true, active: currentMethod == 1}"
                        @click="choseUserLogin"
                    >
                        <i class="fa fa-user fa-lg"></i>
                        <span>同学登入</span>
                    </li>
                    <li :class="{item: true, active: currentMethod == 2}"
                        @click="choseUserSignup"
                    >
                        <i class="fa fa-user-plus fa-lg"></i>
                        <span>同学注册</span>
                    </li>
                    <li :class="{item: true, active: currentMethod == 3}"
                        @click="choseDepartmentSignup"
                    >
                        <i class="fa fa-bookmark-o fa-lg"></i>
                        <span>学生会申请</span>
                    </li>
                    <li :class="{item: true, active: currentMethod == 4}"
                        @click="choseDepartmentLogin"
                    >
                        <i class="fa fa-sign-in fa-lg"></i>
                        <span>学生会登入</span>
                    </li>
                </ul>

            <user-login-component v-show="currentMethod == 1"></user-login-component>
            <user-signup-component v-show="currentMethod == 2"></user-signup-component>

            <department-signup-component v-show="currentMethod == 3"></department-signup-component>
            <department-login-component v-show="currentMethod == 4"></department-login-component>

            </div>
            <div class="modal-footer">
                <button
                    type="button"
                    class="button close-modal"
                    @click="closeModal"
                >
                <i class="fa fa-times fa-lg"></i>
                关闭</button>
            </div>
        </div>
    </div>
</template>

<script>
import Store from '../../store/index'
// 弹出一个模糊框，然后用户选择管理员登入，普通用户登入，注册和部门账户申请这几个机制
//
// 这里是弹出框主输出
export default {
    components: {
        'userLoginComponent': require('./userLogin.vue'),
        'userSignupComponent': require('./userSignup.vue'),
        'departmentLoginComponent': require('./departmentLogin.vue'),
        'departmentSignupComponent': require('./departmentSignup.vue')
    },
    data() {
        return {
            'title': '登入系统',
            'currentMethod': 4
        }
    },
    computed: {
        modalState() {
            return Store.state.userModalState
        }
    },
    methods: {
        closeModal() {
            Store.actions.toggleUserModal()
        },
        choseUserLogin() {
            this.currentMethod = 1
        },
        choseUserSignup() {
            this.currentMethod = 2
        },
        choseDepartmentSignup() {
            this.currentMethod = 3
        },
        choseDepartmentLogin() {
            this.currentMethod = 4
        }

    }

}
</script>

<style lang="stylus">
@import '../../stylus/variable'

.modal-container
    flex-design()
    width 80%
    flex-direction column
    justify-content center
    margin 3rem auto 0 auto
    background-color #fff
    border-radius .5rem
    padding 1rem
    @media screen and (max-width: 768px)
        width 90%

    hr
        width 100%
        height 1px
        display flex
        margin 3rem 0 1rem 0
        background-color rgba(255,255,255,.5)
    .modal-title
        flex-design()
        flex-direction row
        align-items flex-start
        h3
            margin 0

    .modal-footer
        flex-design()
        justify-content flex-end
        margin-top 1rem
        .close-modal
            background-color #03A9F4
            border none
            border-radius .2rem
            color #fff
            padding .5rem 2rem
    i
        padding-right .3rem
.login-methods
    list-style none
    flex-design()
    flex-direction row
    border 1px solid #888
    border-radius .2rem
    padding 0
    .item
        flex-design()
        align-items center
        justify-content center
        padding 1rem
        background-color #ddd
        border-right 1px solid #888
        cursor pointer
        &:last-child
            border-right none
        &.active
            background-color #888
            color #fff

</style>
