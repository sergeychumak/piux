<template>
  <div>
    <component
      v-for="(field, fieldIndex) in dataForm"
      :is="field.id"
      :key="fieldIndex"
    />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
import { DynamicForm } from '@/types'

export default defineComponent({
  name: 'DynamicForm',
  props: {
    dataForm: {
      type: Array as () => DynamicForm[],
      default: []
    }
  },
  components: {},
  created () {
    this.dataForm.forEach((element) => {
      Object.assign(this.$options.components, {
        [element.id]: defineAsyncComponent(() =>
          import(/* webpackChunkName: "filed/[request]" */ `@/components/${element.name}`)
        )
      })
    })
  }
})
</script>

<style scoped lang="scss">
</style>
