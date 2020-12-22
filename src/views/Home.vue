<template>
  <div class="home">
    <dynamic-form :data-form="dataForm"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import dynamicForm from '@/components/dynamic-form.vue'
import { tDynamicForm } from '@/types'

export default defineComponent({
  name: 'Home',
  components: {
    dynamicForm
  },
  data (): {
    dataForm: tDynamicForm[];
    } {
    return {
      dataForm: [
        { id: 'AComponent', name: 'A' },
        { id: 'AComponent', name: 'A' },
        { id: 'BComponent', name: 'B' },
        {
          id: 'AppInput',
          name: 'fields/app-input',
          props: {
            label: 'hi fhjk h jh ',
            placeholder: '333'
          }
        }
      ]
    }
  }
})
</script>
