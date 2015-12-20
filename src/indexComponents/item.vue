<template>
    <div class="activity-component">
        <div class="image">
            <img :src="img" class="img">
        </div>
        <div class="content">
            <h5 class="title">{{ title }}</h5>
            <div class="extra">
                <div class="label">{{ registed }}</div>
                <span>人报名</span>
            </div>
            <p class="desc">{{ desc }}</p>
            <a class="button detail">报名</a>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['detail']

        computed: {
            title() {
                return detail.title
            }
        }
    }

</script>

<style lang='stylus'>

</style>