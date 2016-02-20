<template>

    <footer class="footer">
        <div class="copyright">
            <i class="fa fa-copyright"></i>
            <span>daxuedogs.com</span>
        </div>
        <div class="versions">
            version: v-0.4.0
        </div>
        <div class="contact">
            <a href="#">
                <i class="fa fa-weibo"></i>
                <span>大学狗们</span>
            </a>
        </div>
    </footer>

</template>

<script>

</script>

<style lang='stylus'>
@import "../stylus/variable";

    .footer
        flex-design()
        flex-direction: row
        justify-content: space-around
        background-color: $header-color
        padding: 1rem 0
        .copyright
            color: #fff
</style>
