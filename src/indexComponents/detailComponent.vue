<template>
    <div class="detail-component">
        <detail-info-component :id="id" :detailObj="detailObj"></detail-info-component>
        <div class="div">

            <div class="description">
                <span>下面报名</span>
                <br>
                <i class="fa fa-angle-double-down fa-lg"></i>
            </div>

        </div>
        <form-component :id="id"></form-component>
    </div>
</template>
<script>
import Store from '../store/index'
export default {
    data() {
        return {
            'id': this.$route.params.id,
            'detailObj': {},
            'loaded': false
        }
    },
    ready() {
        
    },
    // created() {
    //     Store.actions.getCurrentActivity(this, this.id)
    // },
    components: {
        'detailInfoComponent': require('./paritals/detail_info.vue'),
        'formComponent': require('./paritals/form.vue'),
    }
}
</script>
<style lang="stylus">
@import '../stylus/variable'
.div
    flex-design()
    media-width()
    margin 1rem auto
    justify-content center
    align-items center
    position relative
    .description
        display flex
        flex-direction column
        justify-content center
        align-items center
        color #888
    &:before
        content ''
        position absolute
        height 2px
        width 45%
        display block
        background-color #ddd
        top 50%
        left 0

    &:after
        content ''
        position absolute
        height 2px
        width 45%
        display block
        background-color #ddd
        top 50%
        right 0
</style>
