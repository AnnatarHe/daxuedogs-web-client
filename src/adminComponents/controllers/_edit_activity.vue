<template>
    <modal-component head="编辑活动信息" v-if="showActivityModal">
        <form class="form modal__form--not-justify" @submit.prevent="updateActivity">
            <div class="field">
                <input type="text" placeholder="活动名" :value="title" @change="updateTitle">
            </div>
            <div class="field">
                <textarea class="textarea" rows="8" placeholder="请输入简介" :value="desc" @change="updateDesc"></textarea>
            </div>
            <div class="field inline-double">
                <label class="form-label">
                    <span>需要性别选项吗</span>
                </label>
                <div :class="{'form-option':true, 'active': gender}" @click="updateGender">
                    <span v-if="gender == true">
                        需要
                    </span>
                    <span v-else>
                        不需要
                    </span>
                </div>

            </div>
            <div class="field inline-double">
                <label class="form-label">
                    <span>需要寝室数据吗</span>
                </label>
                <div :class="{'form-option':true, 'active': dormitory}" @click="updateDormitory">
                    <span v-if="dormitory == true">
                        需要
                    </span>
                    <span v-else>
                        不需要
                    </span>
                </div>
            </div>

            <div class="field">
                <input type="date" name="name" :value="endtime" @change="updateEndtime">
            </div>

            <div class="submit-field">
                <button class="button button--submit" type="submit">
                    <i class="fa fa-check fa-lg"></i>
                    更新
                </button>
            </div>

        </form>
    </modal-component>

</template>
<script>
import Vuex from '../../store/index'
export default {
    ready() {
        console.log(this)
    },
    components: {
        'modalComponent': require('../../commonComponents/modal.vue')
    },
    methods: {
        updateActivity() {
            // 构造表单数据
            let formData = new FormData()
            formData.append('title', this.title)
            formData.append('desc', this.desc)
            formData.append('endtime', this.endtime)
            formData.append('needGender', this.gender)
            formData.append('needDormitory', this.dormitory)

            let id = Vuex.state.editingActivityId

            this.$http.post(`http://dev.iamhele.com/api/activity/${id}/update`, formData)
                .then(res => {
                    if (res.status == 200) {
                        swal('更新成功', '更新成功啦，请刷新页面查看', 'success')
                    }else {
                        swal('错误', `出错了，请联系更高级的管理员来解决此事。statusCode: ${res.status}`, 'error')
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        },
        updateTitle(e) {
            Vuex.actions.updateActivityTitle(e.target.value)
        },
        updateDesc(e) {
            Vuex.actions.updateActivityDesc(e.target.value)
        },
        updateGender() {
            Vuex.actions.updateActivityGender()
        },
        updateDormitory(e) {
            Vuex.actions.updateActivityDormitory()
        },
        updateEndtime(e) {
            Vuex.actions.updateActivityEndtime(e.target.value)
        }
    },
    computed: {
        showActivityModal() {
            let modalState = Vuex.state.modalState
            let modalType = Vuex.state.modalType
            if (modalState == true && modalType == 'activity') {
                return true
            }else {
                return false
            }
        },
        title() {
            return Vuex.state.updateActivityTitle
        },
        desc() {
            return Vuex.state.updateActivityDesc
        },
        gender() {
            return Vuex.state.updateActivityGender
        },
        dormitory() {
            return Vuex.state.updateActivityDormitory
        },
        endtime() {
            return Vuex.state.updateActivityEndtime
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '../../stylus/variable'
.modal__form--not-justify
    justify-content space-between
    .submit-field
        margin-bottom 1rem
    .inline-double
        border-radius 1rem
        span
            padding 1rem
            color #fff

        .form-label
            background-color $header-color
            justify-content center
            align-items center
        .form-option
            cursor pointer
            transition all .35s ease-in
            align-items center
            justify-content center
            background-color $alert-font-success-color
            &.active
                background-color $header-color
</style>
