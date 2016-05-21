'use strict'
const faker = require('faker')

module.exports = function() {
    let data = {
        'activity': [
            {
                'title': faker.lorem.words(),
                'img': faker.image.image()
            }
        ]
    }
    return data
}
