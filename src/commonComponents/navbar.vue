<template>
    <nav class="navbar">
        <!-- <h3 class="navbar-title">
            大学狗们
        </h3> -->
        <ul class="navbar-list">
            <li v-link="{ path: '/' }">
                <i class="fa fa-home fa-lg"></i>
                <span>首页</span>

            </li>
            <li v-link="{ path: '/loading' }">
                <i class="fa fa-th fa-lg"></i>
                <span>Loading</span>
            </li>
        </ul>
    </nav>
</template>

<script>

</script>

<style lang='stylus'>
    @import "../stylus/variable";
    .navbar
        color: #fff
        flex-design()
        flex-direction: column
        align-items: center
        justify-content: center
        list-style: none
        .navbar-title
            display: flex
            flex: 1
            margin: 1.3rem 0 0 0
            font-size: 1.3rem
        .navbar-list
            display: flex
            flex: 5
            flex-direction: column
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
                    background-color: deeppink


</style>
