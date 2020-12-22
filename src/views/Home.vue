<template>
  <div class="home">
    <dynamic-form :data-form="dataForm"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import dynamicForm from '@/components/dynamic-form.vue'
import DescAppInput from '@/assets/d/app-input'
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
        Object.assign(DescAppInput, {
          props: {
            label: 'Привет как дела?'
          }
        })
      ]
    }
  }
})
</script>
