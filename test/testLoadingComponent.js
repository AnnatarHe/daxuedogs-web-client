/**
 * Created by Annatar on 2015/12/20.
 * Email: iamhele1994@gmail.com
 * Github: AnnatarHe
 */

'use strict';

const expect = require('chai').expect
const assert = require('assert')

describe('loadingComponent', () => {
    describe('created', () => {
        let loadingComponent = require('../src/commonComponents/loading.vue')
        it('this component should return the created function', () => {
            expect(typeof loadingComponent.created).to.be.a('function')
        })

    })
})
