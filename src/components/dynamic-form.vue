<template>
  <div class="dynamic-form">
    <component
      v-for="(field, fieldIndex) in dataForm"
      :is="field.id"
      :key="fieldIndex"
      v-bind="field.props"
    />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
import { tDynamicForm } from '@/types'

export default defineComponent({
  name: 'DynamicForm',
  props: {
    dataForm: {
      type: Array as () => tDynamicForm[],
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
  .dynamic-form {

  }
</style>
