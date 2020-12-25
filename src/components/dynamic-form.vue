<template>
  <div class="dynamic-form">
    <div class="is-uppercase is-size-4 pb-5">{{ dataForm.form.name }}</div>
    <component
      v-for="(field, fieldIndex) in dataForm.data"
      :is="field.component"
      :id="field.id"
      :value="value[field.id]"
      :key="fieldIndex"
      v-bind="field.props"
      @set-new-value="setNewValue($event)"
    />
    <button
      class="button is-info mr-5"
      @click="clickSave"
    >save</button>
    <button
      class="button is-small"
      @click="clickRestore"
    >restore</button>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
import { tDescriptionForm } from '@/additions/types'

const mapComponents: {[index: string]: string} = {
  appInput: 'fields/app-input'
}

export default defineComponent({
  name: 'dynamic-form',
  components: {},
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
  data () {
    return {
      value: Object.assign({}, this.valueForm)
    }
  },
  methods: {
    setNewValue (value: string | any) {
      this.value = Object.assign(this.value, value)
    },
    clickSave () {
      console.log(this.value)
    },
    clickRestore () {
      // console.log(this.valueForm)
      this.value = Object.assign({}, this.valueForm)
    }
  },
  created () {
    this.dataForm.data.forEach((element) => {
      const { [element.component]: path } = mapComponents
      Object.assign(this.$options.components, {
        [element.component]: defineAsyncComponent(() =>
          import(/* webpackChunkName: "filed/[request]" */ `@/components/${path}`)
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
