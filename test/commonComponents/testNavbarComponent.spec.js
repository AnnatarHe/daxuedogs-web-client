'use strict';
import Vue from 'vue'
const testNavbarComponent = require('../../src/commonComponents/navbar.vue')

// 测试首页第一个链接是指向首页的
describe('navbarComponent', () => {
    describe('context should be loading... be Chinese', () => {
        it('loading in chinese', () => {
            const vm = new Vue({
                template: '<div><navbar></navbar><div>',
                components: {
                    'navbar': testNavbarComponent
                }
            }).$mount()
            expect(vm.$el.querySelector('.navbar-list li span').textContent).toBe('首页')
        })
    })
})
