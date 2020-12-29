<template>
  <div class="dynamic-form-page">
    <div
      class="notification is-danger"
      v-if="isExistsId"
    >
      I can not display the form I need an <strong>id</strong> parameter
    </div>
    <template v-else>
      <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
        <tr>
          <th><abbr title="Position">Pos</abbr></th>
          <th>Team</th>
          <th><abbr title="Played">Pld</abbr></th>
          <th><abbr title="Won">W</abbr></th>
          <th><abbr title="Drawn">D</abbr></th>
          <th><abbr title="Lost">L</abbr></th>
          <th><abbr title="Goals for">GF</abbr></th>
          <th><abbr title="Goals against">GA</abbr></th>
          <th><abbr title="Goal difference">GD</abbr></th>
          <th><abbr title="Points">Pts</abbr></th>
          <th>Qualification or relegation</th>
        </tr>
        </thead>
        <tfoot>
        <tr>
          <th><abbr title="Position">Pos</abbr></th>
          <th>Team</th>
          <th><abbr title="Played">Pld</abbr></th>
          <th><abbr title="Won">W</abbr></th>
          <th><abbr title="Drawn">D</abbr></th>
          <th><abbr title="Lost">L</abbr></th>
          <th><abbr title="Goals for">GF</abbr></th>
          <th><abbr title="Goals against">GA</abbr></th>
          <th><abbr title="Goal difference">GD</abbr></th>
          <th><abbr title="Points">Pts</abbr></th>
          <th>Qualification or relegation</th>
        </tr>
        </tfoot>
        <tbody>
        <tr>
          <th>1</th>
          <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
          </td>
          <td>38</td>
          <td>23</td>
          <td>12</td>
          <td>3</td>
          <td>68</td>
          <td>36</td>
          <td>+32</td>
          <td>81</td>
          <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
        </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
import Store from '@/store'
import { tDescriptionForm } from '@/additions/types'

export default defineComponent({
  name: 'dynamic-table-page',
  components: {},
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
    // Store.dispatch('loadDescriptionForm', 'test').then((res: tDescriptionForm) => {
    //   // console.log(res)
    //   this.descriptionForm = res
    // })
    // Store.dispatch('loadValueForm', 'test').then((res: { [index: string]: any }) => {
    //   // console.log(res)
    //   this.valueForm = res
    // })
  }
})
</script>

<style scoped lang="scss">
  .dynamic-form-page {
  }
</style>
