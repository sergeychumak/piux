import { ILoadFormDescriptionResponse } from '@/additions/types'

export const formDescription: ILoadFormDescriptionResponse = {
  name: 'Тестовая форма',
  description: [
    {
      id: 'name',
      component: 'AppInputForm',
      props: {
        label: 'Тестовое название'
      }
    },
    {
      id: 'checker',
      component: 'AppLabelForm',
      props: {
        label: 'Тестовое чекер'
      }
    },
    {
      id: 'desc',
      component: 'AppInputForm',
      props: {
        label: 'Тестовое описание 123',
        placeholder: 'text'
      }
    }
  ]
}
