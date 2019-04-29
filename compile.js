const fs = require('fs')
const escodegen = require('escodegen')

const tree = JSON.parse(fs.readFileSync('/dev/stdin').toString())

console.log(escodegen.generate(tree, {
  format: {
    indent: {
      style: '  ',
    },
  },
}))
