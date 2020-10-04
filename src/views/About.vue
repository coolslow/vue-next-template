<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ state.desc }}</p>
  </div>
</template>
<script>
// REFERENCE: https://v3.vuejs.org/guide/typescript-support.html
import { defineComponent, reactive } from 'vue'

const About = defineComponent({
  setup() {
    let state = reactive({
      desc: 'This is a description section ...'
    })

    return {
      state
    }
  }
})

export default About
</script>
