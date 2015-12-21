<template>
    <div class="index-component">
        <activities-component :activities="activities"></activities-component>
    </div>
</template>

<style lang='stylus'>
</style>

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
