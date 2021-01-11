<template>
  <div class="app-boolean-table">
    <span v-if="value" class="tag is-info">!</span>
    <span v-else class="tag is-danger">!</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app-boolean-table',
  props: {
    value: {
      type: Boolean,
      require: true
    }
  }
})
</script>

<style scoped lang="scss">
  .app-boolean-table {
  }
</style>
