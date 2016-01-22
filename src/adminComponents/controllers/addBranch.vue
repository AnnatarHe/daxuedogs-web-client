<template>
    <div class="admin__addBranch">
        <form class="form" @submit.prevent="handleSubmit">
            <div class="field">
                <input type="text" placeholder="部门名称" v-model="title">
            </div>
            <div class="field">
                <select class="select select--white" v-model="school">
                    <option value="0" selected>学校</option>
                </select>
            </div>
            <div class="field">
                <textarea class="textarea" cols="5" placeholder="简短的介绍" v-model="desc"></textarea>
            </div>
            <div class="field">
                <input type="url" placeholder="QQ 链接的地址" v-model="qqLink">
            </div>
            <div class="field">
                <input type="url" placeholder="微博 链接的地址" v-model="weiboLink">
            </div>
            <div class="field">
                <input type="url" placeholder="微信 链接的地址" v-model="wechatLink">
            </div>
            <div class="field submit-field">
                <button class="button button--submit">
                    <i class="fa fa-check fa-lg"></i>
                    创建部门
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            desc: '',
            school: 0,
            qqLink: '',
            weiboLink: '',
            wechatLink: ''
        }
    },
    methods: {
        handleSubmit() {
            console.log('submit');
        }
    }

}
</script>

<style lang="stylus">
@import '../../stylus/variable'

.admin__addBranch
    background-color $panel-bgc
</style>
