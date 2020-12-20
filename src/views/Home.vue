<template>
  <div class="home">
    <dynamic-form :data-form="dataForm"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import dynamicForm from '@/components/dynamic-form.vue'
import { DynamicForm } from '@/types'

export default defineComponent({
  name: 'Home',
  components: {
    dynamicForm
  },
  data: () => {
    return {
      dataForm: [
        { id: 'AComponent', name: 'A' },
        { id: 'AComponent', name: 'A' },
        { id: 'BComponent', name: 'B' }
      ] as DynamicForm[]
    }
  }
})
</script>
