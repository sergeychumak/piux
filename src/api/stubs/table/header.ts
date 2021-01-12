import { ILoadTableHeaderResponse } from '@/additions/types'

export const tableHeader: ILoadTableHeaderResponse = {
  name: 'Тестовая форма1',
  header: {
    name: {
      component: 'AppTextTable',
      label: 'a1'
    },
    checker: {
      component: 'AppBooleanTable',
      label: 'a2'
    },
    desc: {
      component: 'AppTextTable',
      label: 'a3'
    },
    asd: {
      component: 'AppTextTable',
      label: 'a4'
    },
    checker1: {
      component: 'AppBooleanTable',
      label: 'a211'
    }
  }
}
