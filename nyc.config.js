'use strict'

const defaultExclude = require('@istanbuljs/schema/default-exclude')

module.exports = {
  exclude: ['test-helpers/**'].concat(defaultExclude),
}
