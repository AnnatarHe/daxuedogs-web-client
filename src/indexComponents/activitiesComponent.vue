<template>
    <div class="activities-component">

        <!-- <h3>{{ title }}</h3> -->
        <item-component
            v-for="activity in activities"
            :detail="activity"
            >
        </item-component>
    </div>
</template>

<script>

export default {
    props: ['activities'],
    components: {
        'itemComponent': require('./item.vue'),
        'alertComponent': require('../commonComponents/alert.vue')
    },
    data() {
        return {
            title: '活动列表'
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
    // align-items center
    // justify-content center

</style>
