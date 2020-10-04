declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}

// declare module '*.vue' {
//   import { Component } from 'vue'
//   var component: Component
//   export default component
// }