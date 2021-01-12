import { tableHeader } from './stubs/table/header'
import { tableBody } from './stubs/table/body'
import { formDescription } from './stubs/form/description'
import { formValues } from './stubs/form/values'

const requestTime = 2000

// @params id
export function loadFormDescription () {
  return new Promise((resolve) => {
    const resp = {
      data: formDescription
    }
    resolve(resp)
  })
}

// @params id
export function loadValueForm () {
  return new Promise((resolve) => {
    const resp = {
      data: formValues
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
