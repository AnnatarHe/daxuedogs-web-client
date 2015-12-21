<template>
    <div class="activity-component">
        <div class="image">
            <img :src="detail.hero" class="img">
        </div>
        <div class="content">
            <h5 class="title">{{ detail.title }}</h5>
            <div class="extra">
                <div class="label">{{ registed }}</div>
                <span>人报名</span>
            </div>
            <p class="desc">{{ detaildesc }}</p>
            <a :href="detail.id" class="button detail">报名</a>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['detail'],

    }

</script>

<style lang='stylus'>
@import '../stylus/variable'
    .activity-component
        flex-design()

        .content
            a
                color #000
</style>
