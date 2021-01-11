import { descriptionFormByIdTest } from './stubs/descriptionFormByIdTest'
import { tableHeader } from './stubs/table/header'
import { tableBody } from './stubs/table/body'
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

// @params id
export function loadTableHeader () {
  return new Promise((resolve) => {
    const resp = {
      data: tableHeader
    }
    resolve(resp)
  })
}

// @params id
export function loadTableBody () {
  return new Promise((resolve) => {
    const resp = {
      data: tableBody
    }
    resolve(resp)
  })
}
