<template>
    <div class="activities-component">
        <loading-component v-if="activities.length == 0"></loading-component>
        <item-component v-else
            v-for="activity in activities"
            :detail="activity"
            >
        </item-component>
    </div>
</template>

<script>
import Vuex from '../store/index'
export default {
    // props: ['activities'],
    components: {
        'itemComponent': require('./item.vue'),
        'alertComponent': require('../commonComponents/alert.vue'),
        'loadingComponent': require('../commonComponents/loading-inline.vue')
    },
    data() {
        return {
            title: '活动列表'
        }
    },
    computed: {
        activities() {
            return Vuex.state.activities
        }
    }
}

</script>

<style lang='stylus'>
@import '../stylus/variable'

.activities-component
    media-width()
    flex-design()
    flex-direction column
    margin 0 auto

</style>
