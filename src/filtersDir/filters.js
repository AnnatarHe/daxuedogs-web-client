'use strict'

exports.cutDesc = (value) => {
   return value.substr(0, 30) + ' ...'
}

exports.cutTime = (value) => {
    return value.split(' ')[0]
}
