<template>
    <div class="department__detail">
        <div class="department__detail__title">
            <h3>{{ branch.name }}</h3>
        </div>
        <div class="department__detail__desc">
            <p>{{ branch.desc }}</p>
        </div>
        <div class="department__detail__jobs">
            <table class="department__table">
                <tr>
                    <td>
                        <i class="fa fa-bookmark-o fa-lg"></i>
                        职位
                    </td>
                    <td>
                        <i class="fa fa-info-circle fa-lg"></i>
                        介绍
                    </td>
                </tr>
                <tr v-for="job in jobs">
                    <td>{{ job.name }}</td>
                    <td>{{ job.desc }}</td>
                </tr>

            </table>
        </div>

        <sociality-component
                :weibo-link="branch.weibo_link"
                :weixin-link="branch.weixin_link"
                :qq-link="branch.qq_link"
        >
        </sociality-component>
    </div>
</template>

<script>
import Resource from '../../resource'
import Store from '../../store/index'
export default {
    components: {
        socialityComponent: require('../../commonComponents/sociality_links.vue')
    },
    data() {
        let did = this.$route.params.did
        return {
            did,
            branch: {},
            jobs: {}
        }
    },
    ready() {
        this.$http.get(`${Resource.prefix}/api/branch/${this.did}`)
            .then( res => {
                this.branch = res.data
            })
            .catch( err => console.log(err))
        this.$http.get(`${Resource.prefix}/api/jobs/${this.did}`)
            .then( res => {
                this.jobs = res.data
            })
            .catch( err => console.log(err))
    }

}
</script>

<style lang="stylus">
@import '../../stylus/variable'

.department__detail
    flex-design()
    media-width()
    background-color #e3e3e3
    box-shadow 0 0 1rem #d1d1d1
    margin .5rem auto
    flex-direction column
    &__title
        padding 1rem
        h3
            margin 0
            text-align center
    &__desc
        padding 1rem
    &__jobs
        padding 1rem
        .department__table
            width 100%
            border-color grey
            background-color #fff
            color #000
            box-shadow 0 0 1rem #d1d1d1
            tr
                transition all .35s ease

                &:hover
                    background-color $header-color
                    color #fff
                    box-shadow 0 0 1rem #ddd

            td
                border 1px solid #eee
                text-align center
                vertical-align middle
                padding 1rem

</style>
