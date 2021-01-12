<template>
  <div class="dynamic-form-page">
    <div v-if="loading">
      loading...
    </div>
    <template v-else>
      <div>{{ name }}</div>
      <table class="table">
        <thead>
        <tr>
          <th
            v-for="(element, key) in header"
            :key="key"
          >
            {{ element.label }}
          </th>
        </tr>
        <tr v-for="(elementBody, keyBody) in body" :key="keyBody">
          <td v-for="(elementHeader, keyHeader) in header" :key="`${keyBody}-${keyHeader}`">
            <component
              :is="elementHeader.component"
              :value="elementBody[keyHeader]"
            />
          </td>
        </tr>
        </thead>
      </table>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import { mapComponentsTable } from '@/components/map'
import Store from '@/store'
import { ITableHeader, ISimpleObject, ILoadTableHeaderResponse } from '@/additions/types'

export default defineComponent({
  name: 'dynamic-table-page',
  components: {},
  props: {
    id: { // route props
      type: String,
      default: ''
    }
  },
  data (): {
    loading: boolean;
    name: string;
    header: ITableHeader;
    body: ISimpleObject;
    } {
    return {
      loading: true,
      name: '',
      header: {},
      body: {}
    }
  },
  methods: {
    async getHeader (id: string) {
      await Store
        .dispatch('loadTableHeader', id)
        .then((res: ILoadTableHeaderResponse) => {
          const { name: nameRes } = res
          const { header: headerRes } = res
          this.name = nameRes
          this.header = headerRes
        })
    },
    async getBody (id: string) {
      await Store
        .dispatch('loadTableBody', id)
        .then((res: ISimpleObject) => {
          this.body = res
        })
    },
    loadComponent (key: string, path: string) {
      return new Promise((resolve) => {
        const component = defineAsyncComponent(() =>
          import(/* webpackChunkName: "table/[request]" */ `@/components/${path}`)
        )
        Object.assign(this.$options.components, {
          [key]: component
        })
        resolve(component)
      })
    }
  },
  async created () {
    await this.getHeader(this.id)
    const arrayComponents: any = []
    Object.keys(this.header).forEach((element: string) => {
      const { header: { [element]: key } } = this
      const { [key.component]: path } = mapComponentsTable
      arrayComponents.push(this.loadComponent(key.component, path))
    })
    Promise.all(arrayComponents).then(async () => {
      await this.getBody(this.id)
      this.loading = false
    })
  }
})
</script>

<style scoped lang="scss">
  .dynamic-form-page {
  }
</style>
