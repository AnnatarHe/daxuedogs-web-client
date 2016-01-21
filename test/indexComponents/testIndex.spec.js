'use strict'
import Vue from 'vue'
import {expect} from 'chai'

describe('index page test', () => {
    describe('yield test', () => {
        it('just a yield test', () => {
            const foo = () => true
            expect(foo()).to.be.true
        })
    })

})
