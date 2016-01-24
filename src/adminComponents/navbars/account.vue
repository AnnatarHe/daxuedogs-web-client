<template>
    <li class="admin__navbar__lists__item">
        <div class="admin__navbar__list__title">
            <span>账户管理</span>
        </div>
        <ul class="admin__navbar__list admin__navbar__list--with-grey">
            <li><a
                    v-link="{name: 'account', activeClass: 'active'}"
                >
                <i class="fa fa-eye fa-lg"></i>
                查看账户
            </a></li>
            <li><a
                    v-link="{name: 'accountAdd', activeClass: 'active'}"
                >
                <i class="fa fa-plus fa-lg"></i>
                添加账户
            </a></li>
        </ul>
    </li>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
@import '../../stylus/variable'

</style>
