import { createStore } from 'vuex'
import defaultExport from '../api/entry-api'
import { tDescriptionForm } from '@/additions/types'

const { loadDescriptionFormByIdTest,
  loadTableHeader,
  loadTableBody,
  loadValueFormByIdTest } = defaultExport

export default createStore({
  state: {},
  mutations: {},
  actions: {
    loadDescriptionForm (id): tDescriptionForm {
      return loadDescriptionFormByIdTest(id)
        .then((resp: { data: tDescriptionForm }) => {
          return resp.data
        })
    },
    loadValueForm (id) {
      return loadValueFormByIdTest(id)
        .then((resp: { data: { [index: string]: any } }) => {
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
