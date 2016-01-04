<template>
    <div class="admin__navbar">
        <ul class="admin__navbar__lists">


            <li class="admin__navbar__lists__item">
                <div class="admin__navbar__list__title">
                    <span>总览</span>
                </div>
                <ul class="admin__navbar__list admin__navbar__list--with-grey">
                    <li><a href="#">
                        <i class="fa fa-chevron-up fa-lg"></i>
                        所有数据
                    </a></li>
                </ul>
            </li>

            <hr class="admin__navbar__hr">

            <activity-controller>
            </activity-controller>

            <hr class="admin__navbar__hr">

            <department-controller>
            </department-controller>

            <hr class="admin__navbar__hr">

            <li class="admin__navbar__lists__item">
                <ul class="admin__navbar__buttons">
                    <li><a href="#">
                        <i class="fa fa-arrow-left fa-lg"></i>
                        LOGOUT
                    </a></li>
                </ul>
            </li>

        </ul>
    </div>
</template>

<script>
// 导航栏，因为有点儿大，所以拆分组件了
export default {
    components: {
        'activityController': require('./navbars/activities.vue'),
        'departmentController': require('./navbars/department.vue')
    }

}
</script>

<style lang="stylus">
@import '../stylus/variable'

.admin__navbar
    flex-design()
    padding 1rem
    background-color #333
    color #fff
    &__hr
        width 100%
        height 1px
        border none
        background-color #fff
        margin-bottom 2rem
    &__buttons
        flex-design()
        list-style none
        padding 0
        justify-content center
        align-items center
        li
            flex-design()
            justify-content center
            align-items center
            a
                flex-design()
                justify-content center
                align-items center
                padding 1rem
                background-color $alert-font-error-color
                transition all .35s ease-in
                &:hover
                    box-shadow 0 0 1rem darken($alert-font-error-color, 10%), inset 0 0 1rem rgba(255,255,255,.15)
.admin__navbar__lists
    flex-design()
    flex-direction column
    list-style none
    padding 0
    &__item
        flex-design()
        flex-direction column

.admin__navbar__list
    flex-design()
    flex-direction column
    list-style none
    padding 0
    li
        a
            flex-design()
            padding 1rem 2rem
            &:hover
                background-color #e3e3e3
                color #000
            .active
                background-color #e3e3e3
                color #000



</style>
