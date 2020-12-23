import { createStore } from 'vuex'
import defaultExport from '../api/entry-api'

const { loadDescriptionFormByIdTest } = defaultExport

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    loadTest (id) {
      return loadDescriptionFormByIdTest(id)
        .then((resp: { data: any }) => {
          return resp.data
        })
    }
  },
  modules: {
  }
})
