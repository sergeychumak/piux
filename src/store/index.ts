import { createStore } from 'vuex'
import defaultExport from '../api/entry-api'

const { loadFormDescription,
  loadTableHeader,
  loadTableBody,
  loadValueForm } = defaultExport

export default createStore({
  state: {},
  mutations: {},
  actions: {
    loadFormDescription (id) {
      return loadFormDescription(id)
        .then((resp: { data: any }) => {
          return resp.data
        })
    },
    loadFormValue (id) {
      return loadValueForm(id)
        .then((resp: { data: any }) => {
          return resp.data
        })
    },
    loadTableHeader (id) {
      return loadTableHeader(id)
        .then((resp: { data: any }) => {
          return resp.data
        })
    },
    loadTableBody (id) {
      return loadTableBody(id)
        .then((resp: { data: any }) => {
          return resp.data
        })
    }
  },
  modules: {}
})
