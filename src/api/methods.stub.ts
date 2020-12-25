import { descriptionFormByIdTest } from './stubs/descriptionFormByIdTest'
import { valueFormByIdTest } from './stubs/valueFormByIdTest'

const requestTime = 2000

// @params id
export function loadDescriptionFormByIdTest () {
  return new Promise((resolve) => {
    const resp = {
      data: descriptionFormByIdTest
    }
    resolve(resp)
  })
}

// @params id
export function loadValueFormByIdTest () {
  return new Promise((resolve) => {
    const resp = {
      data: valueFormByIdTest
    }
    resolve(resp)
  })
}
