<template>
  <div class="dynamic-form">
    <component
      v-for="(field, fieldIndex) in dataForm"
      :is="field.id"
      :key="fieldIndex"
      v-bind="Object.assign(field.defaultProps, field.props) "
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
          import(/* webpackChunkName: "filed/[request]" */ '@/components/' + element.path)
        )
      })
    })
  }
})
</script>

<style scoped lang="scss">
  .dynamic-form {
    margin: 30px;
    padding: 30px;
    border: 1px solid #eee;
  }
</style>
