import { tDescriptionForm } from '@/additions/types'

export const descriptionFormByIdTest: tDescriptionForm = {
  form: {
    name: 'Тестовая форма'
  },
  data: [
    {
      component: 'appInput',
      id: 'name',
      props: {
        label: 'Тестовое название'
      }
    },
    {
      component: 'appInput',
      id: 'desc',
      props: {
        label: 'Тестовое описание 123',
        placeholder: 'text'
      }
    }
  ]
}
