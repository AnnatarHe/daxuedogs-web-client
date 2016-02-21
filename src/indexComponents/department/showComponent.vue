<template>
    <div class="department-container">
        <div class="cards">
            <card-component
                v-for="cardData in cardsData"
                :carddata="cardData"
            ></card-component>
        </div>
    </div>
</template>

<script>
import Resource from '../../resource'
export default {
    components: {
        'cardComponent': require('./_card.vue')
    },
    ready() {
        this.$http.get(`${Resource.prefix}/api/branchLists`)
            .then( res => {
                this.cardsData = res.data.data
                console.log(res.data.data)
            })
            .catch( err => console.log(err))
    },
    data() {
        let _cardData = [
            {
                'id': 6,
                'img': '/fake/img.jpg',
                'title': 'fuck',
                'weiboLink': 'javascript:;',
                'weixinLink': 'javascript:;',
                'qqLink': 'javascript:;'
            },
            {
                'id': 1,
                'img': '/fake/img.jpg',
                'title': 'shit',
                'weiboLink': 'javascript:;',
                'weixinLink': 'javascript:;',
                'qqLink': 'javascript:;'
            },
            {
                'id': 2,
                'img': '/fake/img.jpg',
                'title': 'shit',
                'weiboLink': 'javascript:;',
                'weixinLink': 'javascript:;',
                'qqLink': 'javascript:;'
            },
            {
                'id': 3,
                'img': '/fake/img.jpg',
                'title': 'shit',
                'weiboLink': 'javascript:;',
                'weixinLink': 'javascript:;',
                'qqLink': 'javascript:;'
            },
            {
                'id': 4,
                'img': '/fake/img.jpg',
                'title': 'shit',
                'weiboLink': 'javascript:;',
                'weixinLink': 'javascript:;',
                'qqLink': 'javascript:;'
            },
            {
                'id': 5,
                'img': '/fake/img.jpg',
                'title': 'shit',
                'weiboLink': 'javascript:;',
                'weixinLink': 'javascript:;',
                'qqLink': 'javascript:;'
            }
        ]
        return {
            'cardsData': _cardData
        }
    }

}
</script>

<style lang="stylus">
@import '../../stylus/variable'

.department-container
    flex-design()
    media-width()
    margin 0 auto

    .cards
        flex-design()
        flex-wrap wrap
        flex-direction row
        align-items center
        justify-content center
</style>
