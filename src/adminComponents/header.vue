<template>
    <div class="admin__header">
        <div class="admin__header__left">
            <a v-link="{name:'summary'}"
                class="admin__header__title"
                >
                <i class="fa fa-home fa-lg"></i>
                后台管理
            </a>
        </div>
        <div class="admin__header__right">
            <a href="javascript:;"
                class="admin__header__right__user"
            >
                <img src="/fake/img.jpg" alt="avatar" />
                AnnatarHe
            </a>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'modalComponent': require('../commonComponents/modal.vue')
    }

}
</script>

<style lang="stylus">
@import '../stylus/variable'

.admin__header
    flex-design()
    background-color $header-color
    align-items center
    &__left
        flex-design()
        align-items flex-start
        // padding 1rem
        .admin__header__title
            display flex
            align-items center
            justify-content center
            font-size 1.2rem
            padding 1.2rem
            &:hover
                background-color $header-second-color
    &__right
        flex-design()
        align-items center
        justify-content flex-end
        padding-right 1rem
        &__user
            display flex
            align-items center
            justify-content center
            padding 1rem
            img
                height $image-size-at-header-user-avatar
                width $image-size-at-header-user-avatar
                border-radius 50%
                margin-right 1rem
            &:hover
                background-color $header-second-color

</style>
