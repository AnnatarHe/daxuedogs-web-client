<template>
    <nav class="navbar">
        <ul class="navbar-list">
            <li v-link="{ name: 'index' }">
                <i class="fa fa-home fa-lg"></i>
                <span>首页</span>
            </li>
            <li v-link="{ name: 'departmentList' }">
                <i class="fa fa-th fa-lg"></i>
                <span>部门</span>
            </li>
            <li v-link="{ name: 'index' }">
                <i class="fa fa-th-list fa-lg"></i>
                <span>活动</span>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style lang='stylus'>
@import "../stylus/variable";
.navbar
    color: #fff
    flex-design()
    background-color $header-color
    flex-direction: column
    align-items: center
    justify-content: center
    list-style: none
    .navbar-title
        display: flex
        flex: 1
        margin: 0
        font-size: 1.3rem
    .navbar-list
        display: flex
        flex: 1
        flex-direction: column
        margin: 0
        padding: 0
        width: 100%
        li
            flex-design()
            padding: 1rem
            width: 100%
            cursor: pointer
            justify-content: center
            align-items center
            i.fa
                padding:0 1rem
            &:hover
                background-color: darken($header-color, 10%)

</style>
