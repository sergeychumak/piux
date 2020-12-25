<template>
  <div class="app-input field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <input
        class="input"
        type="text"
        :placeholder="placeholder"
        :value="value"
      >
    </div>
    {{ value }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app-input',
  props: {
    id: {
      type: String,
      require: true
    },
    value: {
      type: String,
      require: true
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped lang="scss">
  .app-input {
  }
</style>
