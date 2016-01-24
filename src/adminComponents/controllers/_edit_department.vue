<template>

    <modal-component head="编辑部门信息">
        <form class="form">
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
                <button type="submit" class="button button--submit">
                    <i class="fa fa-check fa-lg"></i>
                    更新
                </button>
            </div>
        </form>
    </modal-component>

</template>
<script>
export default {
    ready() {
        // 抓取数据
        // 1. 此部门的数据
        // 2. 学校列表
    },
    data() {
        return {
            title: '',
            school: 0,
            desc: '',
            qqLink: '',
            weiboLink: '',
            wechatLink: ''
        }
    },
    components: {
        'modalComponent': require('../../commonComponents/modal.vue')
    }
}
</script>
<style lang="stylus">
@import '../../stylus/variable'

</style>
