<template>
    <li class="admin__navbar__lists__item">
        <div class="admin__navbar__list__title">
            <span>活动</span>
        </div>
        <ul class="admin__navbar__list admin__navbar__list--with-grey">
            <li><a
                    v-link="{name: 'all', activeClass: 'active'}"
                >
                <i class="fa fa-chevron-up fa-lg"></i>
                活动纵览
            </a></li>
            <li><a
                    v-link="{name: 'activityAdd', activeClass: 'active'}"
                >
                <i class="fa fa-child fa-lg"></i>
                添加活动
            </a></li>
        </ul>
    </li>

</template>

<script>
import Store from '../../store/index'
export default {
    // 这里做权限控制
    computed: {
        permission() {
            return Store.state.authObj
        }
    }

}
</script>

<style lang="stylus">
@import '../../stylus/variable'

</style>
