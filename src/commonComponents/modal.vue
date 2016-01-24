<template>
    <div class="mask" transition="scale">
        <div class="modal modal--default">
            <div class="modal__head">
                <h3>{{ head }}</h3>
            </div>
            <div class="modal__body">
                <div class="content">
                    <slot></slot>
                </div>

            </div>
            <div class="modal__footer">
                <div class="close">
                    <button type="button"
                        class="button button--none button--danger button--radius"
                        @click="closeModal"
                    >
                        <i class="fa fa-close fa-lg"></i>
                        关闭
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import Store from '../store/index'
export default {
    props: ['head'],
    computed: {
        modalState() {
            return Store.state.modalState
        }
    },
    methods: {
        closeModal() {
            Store.actions.toggleModalState()
        }
    }

}
</script>

<style lang="stylus">
@import '../stylus/variable'
</style>
