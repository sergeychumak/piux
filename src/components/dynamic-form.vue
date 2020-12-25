<template>
  <div class="dynamic-form">
    <div class="is-uppercase is-size-4 pb-5">{{ dataForm.form.name }}</div>
    <component
      v-for="(field, fieldIndex) in dataForm.data"
      :is="field.component"
      :id="field.id"
      :value="valueForm[field.id]"
      :key="fieldIndex"
      v-bind="field.props"
    />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
import { tDescriptionForm } from '@/additions/types'

const mapComponents: {[index: string]: string} = {
  appInput: 'fields/app-input'
}

export default defineComponent({
  name: 'DynamicForm',
  props: {
    dataForm: {
      type: Object as () => tDescriptionForm,
      default: []
    },
    valueForm: {
      type: Object,
      default: () => ({})
    }
  },
  components: {},
  created () {
    this.dataForm.data.forEach((element) => {
      const { [element.component]: path } = mapComponents
      Object.assign(this.$options.components, {
        [element.component]: defineAsyncComponent(() =>
          import(/* webpackChunkName: "filed/[request]" */ '@/components/' + path)
        )
      })
    })
  }
})
</script>

<style scoped lang="scss">
  .dynamic-form {
    // margin: 0px;
    // padding: 0px;
    // border: 1px solid #eee;
  }
</style>
