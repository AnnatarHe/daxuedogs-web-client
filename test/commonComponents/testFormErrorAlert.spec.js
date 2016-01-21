'use strict'
import Vue from 'vue'
import FormErrAlert from '../../src/commonComponents/form_error_alert.vue'
import {expect} from 'chai'

describe('form error will show it', () => {
    describe('form error', () => {
        const vm = new Vue({
            template: '<div><form-err-alert></form-err-alert</div>',
            components: {
                formErrAlert: FormErrAlert
            }
        }).$mount()
        it('it was mounted', () => {
            expect(vm.$el).to.be.instanceof(Object)
        })
        it('form error show cuowu', () => {
            const msg = vm.$el.querySelector('span').innerHTML.trim()
            expect(msg).to.have.string('错误')
        })
        it('the icon should be circle', () => {
            const hasClassFa = vm.$el.querySelector('i').className
            expect(hasClassFa).to.have.string('fa-exclamation-circle')
        })
        it('the instance should has class name called form-err-alert', () => {
            const hasTheErrorClass = vm.$el.querySelector('div').className
            expect(hasTheErrorClass).to.have.string('form-err-alert')
        })
    })
})
