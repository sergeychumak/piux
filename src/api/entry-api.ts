const mode = 'stub'
// const mode = 'api'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const methodsModule = require(`./methods.${mode}`)

export default {
  ...methodsModule
}
