<template>
    <div class="admin__addSchool">
        <form class="form" @submit.prevent="handleSubmit">
            <div class="field">
                <input type="text" placeholder="学校名称" v-model="title">
            </div>
            <div class="field submit-field">
                <button type="submit" class="button button--submit">
                    <i class="fa fa-check fa-lg"></i>
                    创建
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        handleSubmit() {
            console.log('submit school');
        }
    }

}
</script>

<style lang="stylus">
@import '../../stylus/variable'

.admin__addSchool
    background-color $panel-bgc

</style>
