<template>
  <div class="dynamic-form-page">
    <div v-if="loading">
      loading...
    </div>
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
<!--        <tr v-for="(elementBody, keyBody) in body" :key="keyBody">-->
<!--          <td v-for="(elementHeader, keyHeader) in header" :key="`${keyBody}-${keyHeader}`">-->
<!--            <component-->
<!--              :is="elementHeader.component"-->
<!--              :value="elementBody[keyHeader]"-->
<!--            />-->
<!--          </td>-->
<!--        </tr>-->
      </thead>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import Store from '@/store'

// ==========================
// TYPE
// ==========================
type THeader = { [index: string]: TElementHeader }
type TElementHeader = {
  component: string;
  label: string;
}

// ==========================
// MAP
// ==========================
const mapComponents: {[index: string]: string} = {
  AppTextTable: 'table/app-text-table',
  AppBooleanTable: 'table/app-boolean-table'
}
// ==========================
// ==========================
// ==========================

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
    header: THeader;
    } {
    return {
      loading: true,
      name: '',
      header: {}
    }
  },
  methods: {
    loadComponent11111 (header: THeader) {
      // const asd = 1000
      // if (header) {
      //   setTimeout(() => {
      //     // return new Promise((resolve) => {
      //     //   resolve('123')
      //     // })
      //     const aaa: any = []
      //     Object.keys(header).forEach((element) => {
      //       const { [element]: key } = header
      //       const { [key.component]: path } = mapComponents
      //       console.log('loadComponent: ', key.component, path)
      //       // this.defComponent(key.component, path)
      //       // console.log(key.component, `@/components/${path}`)
      //       const test = defineAsyncComponent(() =>
      //         import(/* webpackChunkName: "table/[request]" */ `@/components/${path}`)
      //       )
      //       aaa.push(test)
      //       // await Object.assign(this.$options.components, {
      //       //   [key.component]: test
      //       // })
      //     })
      //     return new Promise(test)
      //   }, asd)
      // }
    },
    test () {
      console.log('asd')
    },
    async aaasss (path: string) {
      const aaaa = 2000
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('2')
          resolve()
        }, aaaa)
      })
      // const aaaa = 2000
      // const asyncComponent = await defineAsyncComponent(() =>
      //   import(/* webpackChunkName: "table/[request]" */ `@/components/${path}.vue`)
      // )
      //
      // setTimeout(() => {
      //   console.log('2')
      //   return asyncComponent
      // }, aaaa)
    },
    async getHeader (id: string) {
      await Store
        .dispatch('loadTableHeader', id)
        .then((res) => {
          const { name: nameRes } = res
          const { header: headerRes } = res
          this.name = nameRes
          this.header = headerRes
        })
    },
    async loadComponent (key: string, path: string) {
      console.log('loadComponent: ', path)
      const component = await defineComponent(() => {
        import(/* webpackChunkName: "table/[request]" */ `@/components/${path}`)
      })
      Object.assign(this.$options.components, {
        [key]: component
      })
    }
  },
  async created () {
    console.log('1')
    await this.getHeader(this.id)
    console.log(this.name)
    console.log(this.header)
    console.log('1.1')
    const arrayComponents: any = []
    Object.keys(this.header).forEach((element) => {
      const { header: { [element]: key } } = this
      const { [key.component]: path } = mapComponents
      arrayComponents.push(this.loadComponent(key.component, path))
    })
    console.log('1.2')
    Promise.all(arrayComponents).then(() => {
      console.log('0')
    })

    // a111.then(() => {
    //
    // })

    // Store
    //   .dispatch('loadTableHeader', 'test')
    //   .then(async (res) => {
    //     const { name: nameRes } = res
    //     const { header: headerRes } = res
    //     this.name = nameRes
    //     this.header = headerRes
    //     await this.loadComponent(headerRes)
    //     console.log('asd1')
    //     // await this.test()
    //     // Store
    //     //   .dispatch('loadTableBody', 'test')
    //     //   .then((resBody) => {
    //     //     this.body = resBody
    //     //   })
    //     //   .catch((error) => {
    //     //     this.error = error
    //     //   })
    //   })
    //   .catch((error) => {
    //     this.error = error
    //   })
  }
})
</script>

<style scoped lang="scss">
  .dynamic-form-page {
  }
</style>
