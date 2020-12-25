<template>
  <div class="dynamic-form-page">
    <div
      class="notification is-danger"
      v-if="isExistsId"
    >
      I can not display the form I need an <strong>id</strong> parameter
    </div>
    <template v-else>
      <dynamic-form
        :data-form="descriptionForm"
        :value-form="valueForm"
      />
<!--      {{ descriptionForm }}-->
    </template>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
import Store from '@/store'
import { tDescriptionForm } from '@/additions/types'

export default defineComponent({
  name: 'DynamicFormPage',
  components: {
    DynamicForm: defineAsyncComponent(() =>
      import(/* webpackChunkName: "dynamic-form" */ '../../components/dynamic-form.vue')
    )
  },
  props: {
    id: { // route props
      type: String,
      default: ''
    }
  },
  data (): {
    descriptionForm: tDescriptionForm;
    valueForm: { [index: string]: any };
    } {
    return {
      descriptionForm: {
        form: {
          name: ''
        },
        data: []
      },
      valueForm: {}
    }
  },
  computed: {
    isExistsId (): boolean {
      return !this.id
    }
  },
  mounted () {
    Store.dispatch('loadDescriptionForm', 'test').then((res: tDescriptionForm) => {
      this.descriptionForm = res
    })
    Store.dispatch('loadValueForm', 'test').then((res: { [index: string]: any }) => {
      this.valueForm = res
    })
  }
})
</script>

<style scoped lang="scss">
  .dynamic-form-page {
  }
</style>
