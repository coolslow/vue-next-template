<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ state.desc }}</p>
    <!-- use teleport -->
    <div class="for-teleport">
      <div id="top-left"></div>
      <div id="top-right"></div>
      <div id="bottom-left"></div>
      <div id="bottom-right"></div>
    </div>
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
<style lang="less">
.about {
  height: 100%;
  padding: 20px;
}
</style>
