<template>
  <div class="app-input field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <input class="input" type="text" :placeholder="placeholder">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app-input',
  props: {
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
