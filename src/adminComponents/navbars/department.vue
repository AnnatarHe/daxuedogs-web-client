<template>
<li class="admin__navbar__lists__item">
    <div class="admin__navbar__list__title">
        <span>学生会</span>
    </div>
    <ul class="admin__navbar__list admin__navbar__list--with-grey">
        <li>
            <a v-link="{name: 'school', activeClass: 'active'}">
                <i class="fa fa-building fa-lg"></i>
                查看学校
            </a>
        </li>
        <li><a
                v-link="{name: 'schoolsAdd', activeClass: 'active'}"
            >
            <i class="fa fa-hospital-o fa-lg"></i>
            添加学校
        </a></li>
        <li>
            <a v-link="{name: 'branch', activeClass: 'active'}">
                <i class="fa fa-calculator fa-lg"></i>
                查看部门
            </a>
        </li>
        <li><a
                v-link="{name: 'branchAdd', activeClass: 'active'}"
            >
            <i class="fa fa-code-fork fa-lg"></i>
            添加部门
        </a></li>
    </ul>
</li>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
@import '../../stylus/variable'

</style>
