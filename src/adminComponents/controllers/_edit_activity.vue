<template>
    <modal-component head="编辑活动信息" v-if="showActivityModal">
        <form class="form modal__form--not-justify" @submit.prevent="updateActivity">
            <div class="field">
                <input type="text" placeholder="活动名" :value="activityData.title" @input="updateTitle">
            </div>
            <div class="field">
                <input type="file" id="fileUpdate" class="input__file--green">
            </div>
            <div class="field">
                <textarea class="textarea" rows="8" placeholder="请输入简介" :value="activityData.desc" @input="updateDesc"></textarea>
            </div>
            <div class="field inline-double">
                <label class="form-label">
                    <span>需要性别选项吗</span>
                </label>
                <div :class="{'form-option':true, 'active': activityData.gender}" @click="updateGender">
                    <span v-if="activityData.gender == true">
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
                <div :class="{'form-option':true, 'active': activityData.dormitory}" @click="updateDormitory">
                    <span v-if="activityData.dormitory == true">
                        需要
                    </span>
                    <span v-else>
                        不需要
                    </span>
                </div>
            </div>

            <div class="field">
                <input type="date" name="name" :value="activityData.endtime" @input="updateEndtime">
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
    data() {

    },
    components: {
        'modalComponent': require('../../commonComponents/modal.vue')
    },
    methods: {
        updateActivity() {
            // 构造表单数据
            let formData = new FormData()
            let file = document.querySelector('#fileUpdate').files[0]
            formData.append('title', this.title)
            formData.append('hero', file)
            formData.append('desc', this.desc)
            formData.append('endtime', this.endtime)
            formData.append('needGender', this.gender)
            formData.append('needDormitory', this.dormitory)

            this.$http.save('/url', formData)
                .then(res => {
                    console.log(res)
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
        activityData() {
            return Vuex.state.updateActivity
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
