<template>
<form class="form admin__addActivity" @submit.prevent="handleSubmit">
    <div class="field">
        <input type="text" placeholder="活动名" value="">
    </div>
    <div class="field">
        <textarea class="textarea" rows="8" placeholder="请输入简介"></textarea>
    </div>
    <div class="field inline-double">
        <label class="form-label">
            需要性别选项吗
        </label>
        <div class="form-option">
            需要
        </div>


    </div>
    <div class="field inline-double">
        <label class="form-label">
            需要寝室数据吗
        </label>
        <div class="form-option">
            需要
        </div>
    </div>

    <div class="field">
        <input type="date" name="name" value="">
    </div>


</form>
</template>

<script>
export default {

    methods: {
        handleSubmit() {
            console.log('handleSubmit');
        }
    }

}
</script>

<style lang="stylus">
@import '../../stylus/variable'

.admin__addActivity
    background-color $panel-bgc


</style>
