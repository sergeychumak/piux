<template>
  <div class="main-layout">
    <aside class="main-layout__menu menu">
      <p class="menu-label">
        piux cms
      </p>
      <ul class="menu-list">
        <li><router-link :to="{ name: 'Main' }">Гавная</router-link></li>
        <li><router-link :to="{ name: 'Form', params: { id: 'test' } }">Роутинг с формой</router-link></li>
        <li><router-link :to="{ name: 'Form' }">Плохой роутинг</router-link></li>
        <li><a>Другой роутинг</a></li>
        <li><a>Dashboard</a></li>
        <li><a>Customers</a></li>
      </ul>
      <p class="menu-label">
        Administration
      </p>
      <ul class="menu-list">
        <li><a>Team Settings</a></li>
        <li>
          <a class="is-active">Manage Your Team</a>
          <ul>
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
            <li><a>Add a member</a></li>
          </ul>
        </li>
        <li><a>Invitations</a></li>
        <li><a>Cloud Storage Environment Settings</a></li>
        <li><a>Authentication</a></li>
      </ul>
      <p class="menu-label">
        Transactions
      </p>
      <ul class="menu-list">
        <li><a>Payments</a></li>
        <li><a>Transfers</a></li>
        <li><a>Balance</a></li>
      </ul>
    </aside>
    <div class="main-layout__content">
      <router-view/>
    </div>
<!--    <dynamic-form :data-form="dataForm"/>-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// import dynamicForm from '@/components/dynamic-form.vue'
// import DescAppInput from '@/additions/d/app-input'
// import { tDynamicForm } from '@/assets/types'

export default defineComponent({
  name: 'Home',
  components: {
    // dynamicForm
  }
  // data (): {
  //   dataForm: tDynamicForm[];
  //   } {
  //   return {
  //     dataForm: [
  //       Object.assign(DescAppInput, {
  //         props: {
  //           label: 'Привет как дела?'
  //         }
  //       })
  //     ]
  //   }
  // }
})
</script>

<style scoped lang="scss">
  .main-layout {
    display: flex;
    height: 100%;

    &__menu {
      flex-basis: 325px;
      padding: 20px;
      overflow: auto;
      box-shadow:
        0 1px 1px rgba(0,0,0,0.15),
        0 2px 2px rgba(0,0,0,0.15),
        0 4px 4px rgba(0,0,0,0.15),
        0 8px 8px rgba(0,0,0,0.15);
    }

    &__content {
      padding: 20px;
    }
  }
</style>
