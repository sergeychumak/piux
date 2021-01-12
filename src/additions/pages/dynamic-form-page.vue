<template>
  <div class="dynamic-form-page">
    <div v-if="loading">
      loading...
    </div>
    <template v-else>
      <div>{{ name }}</div>
      <component
        v-for="(field, fieldIndex) in description"
        :is="field.component"
        :id="field.id"
        :key="fieldIndex"
        :value="values[field.id]"
        v-bind="field.props"
        @set-new-value="setNewValue($event)"
      />
    </template>
    <hr/>
    <button
      class="button is-info mr-3"
      @click="clickSave"
    >save</button>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
import { mapComponentsForm } from '@/components/map'
import Store from '@/store'
import { IFormDescription } from '@/additions/types'

export default defineComponent({
  name: 'dynamic-form-page',
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
    description: IFormDescription[];
    values: { [index: string]: any };
    } {
    return {
      loading: true,
      name: '',
      description: [],
      values: {}
    }
  },
  methods: {
    async getDescription (id: string) {
      await Store
        .dispatch('loadFormDescription', id)
        .then((res) => {
          const { name: nameRes } = res
          const { description: descriptionRes } = res
          this.name = nameRes
          this.description = descriptionRes
        })
    },
    async getValues (id: string) {
      await Store
        .dispatch('loadFormValue', id)
        .then((res) => {
          this.values = res
        })
    },
    loadComponent (key: string, path: string) {
      return new Promise((resolve) => {
        const component = defineAsyncComponent(() =>
          import(/* webpackChunkName: "form/[request]" */ `@/components/${path}`)
        )
        Object.assign(this.$options.components, {
          [key]: component
        })
        resolve(component)
      })
    },
    setNewValue (value: string | any) {
      this.values = Object.assign(this.values, value)
    },
    clickSave () {
      console.log(this.values)
    }
  },
  async created () {
    await this.getDescription(this.id)
    const arrayComponents: any = []
    this.description.forEach((element) => {
      const { component: key } = element
      const { [key]: path } = mapComponentsForm
      arrayComponents.push(this.loadComponent(key, path))
    })
    Promise.all(arrayComponents).then(async () => {
      await this.getValues(this.id)
      this.loading = false
    })
  }
})
</script>

<style scoped lang="scss">
  .dynamic-form-page {
  }
</style>
