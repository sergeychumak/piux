<template>
  <div class="dynamic-form-page">
    <div
      class="notification is-danger"
      v-if="isExistsId"
    >
      I can not display the form I need an <strong>id</strong> parameter
    </div>
    <template v-else>
      <dynamic-form />
      {{ descriptionForm }}
    </template>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
import Store from '@/store'

export default defineComponent({
  name: 'DynamicFormPage',
  components: {
    DynamicForm: defineAsyncComponent(() =>
      import(/* webpackChunkName: "dynamic-form" */ '../../components/dynamic-form.vue')
    )
  },
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      descriptionForm: {}
    }
  },
  computed: {
    isExistsId (): boolean {
      return !this.id
    }
  },
  mounted () {
    Store.dispatch('loadTest', 'test').then((res) => {
      this.descriptionForm = res

      // const asd = defineAsyncComponent(() =>
      //   import('../description/app-input')
      // )
      //
      // console.log(asd)
    })
  }
})
</script>

<style scoped lang="scss">
  .dynamic-form-page {
  }
</style>
