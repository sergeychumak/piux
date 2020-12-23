import { descriptionFormByIdTest } from './stubs/descriptionFormByIdTest'

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
