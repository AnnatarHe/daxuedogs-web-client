<template>
    <div class="department-container">
        <loading-component v-if="cardsData.length == 0"></loading-component>
        <div class="cards" v-else>
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
        'cardComponent': require('./_card.vue'),
        'loadingComponent': require('../../commonComponents/loading-inline.vue')
    },
    data() {
        return {
            cardsData: []
        }
    },
    ready() {
        this.$http.get(`${Resource.prefix}/api/branchLists`)
            .then( res => {
                this.cardsData = res.data.data
                console.log(res.data.data)
            })
            .catch( err => console.log(err))
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
