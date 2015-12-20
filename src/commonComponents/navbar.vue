<template>
    <nav class="navbar">
        <h3 class="navbar-title">
            大学狗们
        </h3>
        <ul class="navbar-list">
            <li v-link="{ path: '/'}">首页</li>
            <li v-link="{ path: '/loading' }">Loading</li>
        </ul>
    </nav>
</template>

<script>

</script>

<style lang='stylus'>
    @import "../stylus/variable";
    .navbar
        flex-design()
        flex-direction: column


</style>