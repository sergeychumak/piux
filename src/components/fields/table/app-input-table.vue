<template>
  <div class="app-input-table">

  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'app-input-table',
  setup (props, { emit }) {
    const message = computed({
      get: () => props.value,
      set: (value) => {
        if (props.id) {
          const res: { [index: string]: any } = {
            [props.id]: value
          }
          emit('set-new-value', res)
        }
      }
    })

    return {
      message
    }
  },
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
  .app-input-table {
  }
</style>
