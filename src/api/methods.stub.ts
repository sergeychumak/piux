import { tableHeader } from './stubs/table/header'
import { tableBody } from './stubs/table/body'
import { formDescription } from './stubs/form/description'
import { formValues } from './stubs/form/values'
import { ILoadTableHeaderResponse,
  ILoadFormDescriptionResponse,
  ISimpleObject } from '@/additions/types'

// @params id
export function loadFormDescription (): Promise<{ data: ILoadFormDescriptionResponse }> {
  return new Promise((resolve) => {
    const resp = {
      data: formDescription
    }
    resolve(resp)
  })
}

// @params id
export function loadValueForm (): Promise<{ data: ISimpleObject }> {
  return new Promise((resolve) => {
    const resp = {
      data: formValues
    }
    resolve(resp)
  })
}

// @params id
export function loadTableHeader (): Promise<{ data: ILoadTableHeaderResponse }> {
  return new Promise((resolve) => {
    const resp = {
      data: tableHeader
    }
    resolve(resp)
  })
}

// @params id
export function loadTableBody (): Promise<{ data: ISimpleObject[] }> {
  return new Promise((resolve) => {
    const resp = {
      data: tableBody
    }
    resolve(resp)
  })
}
