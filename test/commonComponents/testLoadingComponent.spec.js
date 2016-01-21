/**
 * Created by Annatar on 2015/12/20.
 * Email: iamhele1994@gmail.com
 * Github: AnnatarHe
 */

'use strict';
import Vue from 'vue'
const testLoadingComponent = require('../../src/commonComponents/loading.vue')

describe('loadingComponent', () => {
    describe('context should be loading... be Chinese', () => {
        it('loading in chinese', () => {
            const vm = new Vue({
                template: '<div><loading></loading><div>',
                components: {
                    'loading': testLoadingComponent
                }
            }).$mount()
            expect(vm.$el.querySelector('span.text').textContent).toBe('正在加载...')
        })
    })
})
