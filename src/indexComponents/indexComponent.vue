<template>
    <div class="index-component">
        <activities-component :activities="activities"></activities-component>
    </div>
</template>

<script>
import Store from '../store/index'
export default {
    components: {
        'activitiesComponent': require('./activitiesComponent.vue')
    },
    ready() {
        Store.actions.getActivitiesDataFromServer(this)
    },
    computed: {
        activities() {
            return Store.state.activities
        }
    }
}
</script>

<style lang='stylus'>
</style>
