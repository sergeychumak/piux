import { defineAsyncComponent } from 'vue'

const aaa = [
  { id: 'A', name: 'A' },
  { id: 'B', name: 'B' }
]
const res = {}
aaa.forEach((element) => {
  Object.assign(res, {
    [element.id]: defineAsyncComponent(() =>
      import(/* webpackChunkName: "aaa-[request]" */ `@/components/${element.name}`)
    )
  })
})

console.log(res)
export default res
// export default {
//   A: defineAsyncComponent(() =>
//     import(/* webpackChunkName: "AComponent" */ '@/components/A.vue')
//   ),
//   B: defineAsyncComponent(() =>
//     import(/* webpackChunkName: "BComponent" */ '@/components/B.vue')
//   )
// }
