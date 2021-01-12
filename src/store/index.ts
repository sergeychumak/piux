import { createStore } from 'vuex'
import defaultExport from '../api/entry-api'
import { ILoadTableHeaderResponse,
  ILoadFormDescriptionResponse,
  ISimpleObject } from '@/additions/types'

const { loadFormDescription,
  loadTableHeader,
  loadTableBody,
  loadValueForm } = defaultExport

export default createStore({
  state: {},
  mutations: {},
  actions: {
    loadFormDescription (id): ILoadFormDescriptionResponse {
      return loadFormDescription(id)
        .then((resp: { data: ILoadFormDescriptionResponse }) => {
          return resp.data
        })
    },
    loadFormValue (id): ISimpleObject {
      return loadValueForm(id)
        .then((resp: { data: ISimpleObject }) => {
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
