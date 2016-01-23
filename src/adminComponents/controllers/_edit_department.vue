<template>

    <modal-component head="编辑部门信息">
        <form class="form">
            <div class="field">
                <input type="text" name="name" placeholder="hahahahah" value="">
            </div>
            <div class="field">
                <input type="text" name="name" placeholder="hahahahah" value="">
            </div>
            <div class="field">
                <input type="text" name="name" placeholder="hahahahah" value="">
            </div>
            <div class="field submit-field">
                <button type="submit" class="button button--submit">
                    submit
                </button>
            </div>
        </form>
    </modal-component>

</template>
<script>
export default {
    components: {
        'modalComponent': require('../../commonComponents/modal.vue')
    }
}
</script>
<style lang="stylus">
@import '../../stylus/variable'

</style>
