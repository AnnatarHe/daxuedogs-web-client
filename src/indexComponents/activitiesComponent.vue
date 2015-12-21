<template>
    <div class="activities-component">

        <h3>{{ title }}</h3>
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
            'itemComponent': require('./item.vue')
        },
        data() {
            return {
                title: '活动列表'
            }
        },
        computed: {

        },
        methods: {

        }
    }

</script>

<style lang='stylus'>

</style>
