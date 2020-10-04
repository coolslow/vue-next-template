import { defineComponent } from 'vue';
<template>
  <teleport :to="state.position">
    <div class="alert">
      {{ state.msg }}
    </div>ß
  </teleport>
</template>
<script>
// Teleport provides a clean way to allow us to control under which parent in our DOM
// we want a piece of HTML to be rendered.
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'DemoAlert',
  setup() {
    let state = reactive({
      msg: 'This is the alert!',
      position: 'body'
    })

    return {
      state
    }
  }
})
</script>
