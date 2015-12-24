'use strict';
import Vue from 'vue'
const testFooterComponent = require('../src/commonComponents/footer.vue')

// 测试首页第一个链接是指向首页的
describe('navbarComponent', () => {
    describe('context should be loading... be Chinese', () => {
        const vm = new Vue({
            template: '<div><footer-c></footer-c><div>',
            components: {
                'footerC': testFooterComponent
            }
        }).$mount()
        it('footer at span should be daxuedogs.com', () => {
            expect(vm.$el.querySelector('.copyright span').textContent.trim()).toBe('daxuedogs.com')
        })
        it('footer at span should be weibo link', () => {
            expect(vm.$el.querySelector('.contact span').textContent.trim()).toBe('大学狗们')
        })
    })
})
