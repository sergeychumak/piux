<template>
  <div class="app-text-table">
    {{ value }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app-text-table',
  props: {
    value: {
      type: String,
      require: true
    }
  }
})
</script>

<style scoped lang="scss">
  .app-text-table {
  }
</style>
