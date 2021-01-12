<template>
<!--  <label class="app-label checkbox">-->
<!--    <input type="checkbox"/>-->
<!--    label test-->
<!--  </label>-->
  <div class="app-input field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <input
        type="checkbox"
        v-model="message"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'app-label',
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
      type: Boolean,
      default: () => { return false }
    },
    label: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped lang="scss">
  .app-label {
  }
</style>
