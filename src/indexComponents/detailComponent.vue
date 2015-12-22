<template>

    <div class="detail-component">
        <detail-info-component :info="info"></detail-info-component>

        <form-component></form-component>
    </div>

</template>
<script>
import Store from '../store/index'
export default {
    data() {
        return {
            'id': this.$route.params.id
        }
    },
    computed: {
        info() {
            return Store.state.currentActivity
        }
    },
    created() {
        Store.actions.getCurrentActivity(this, this.id)
    },
    components: {
        'detailInfoComponent': require('./paritals/detail_info.vue'),
        'formComponent': require('./paritals/form.vue')
    }
}
</script>
<style lang="stylus">

</style>
