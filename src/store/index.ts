import { createStore } from 'vuex'
import defaultExport from '../api/entry-api'
import { ILoadTableHeaderResponse, ISimpleObject } from '@/additions/types'

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
    loadTableHeader (id): ILoadTableHeaderResponse {
      return loadTableHeader(id)
        .then((resp: { data: ILoadTableHeaderResponse }) => {
          return resp.data
        })
    },
    loadTableBody (id): ISimpleObject[] {
      return loadTableBody(id)
        .then((resp: { data: ISimpleObject[] }) => {
          return resp.data
        })
    }
  },
  modules: {}
})
