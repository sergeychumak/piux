const mode = 'stub'
// const mode = 'api'

const methodsModule = require(`./methods.${mode}`)

export default {
  ...methodsModule
}
