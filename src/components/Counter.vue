<template>
  <div class="counter">
    <button v-on:click="decrement">-</button>
    <span class="number">{{ state.count }}</span>
    <button v-on:click="increment">+</button>
    <div class="reset-btn">
      <button @click="reset"> reset button </button>
    </div>
  </div>
</template>

<script lang="ts">
// import Vue from 'vue'
// import Component from 'vue-class-component'

// @Component
// export default class Counter extends Vue {
//   // Class properties will be component data
//   count = 0

//   // Methods will be component methods
//   increment() {
//     this.count++
//   }

//   decrement() {
//     this.count--
//   }
// }

import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'Demo-Counter',
  props: {},
  setup() {
    let state = reactive({
      title: 'This is a title',
      count: 0
    })

    function increment() {
      state.count++
    }

    function decrement() {
      state.count--
    }

    function reset() {
      state.count = 0
    }

    return {
      state,
      increment,
      decrement,
      reset
    }
  }
})
</script>
<style lang="less">
.counter {
  // width: 20%;
  padding: 20px;
  margin: 20px;
  border: 1px dashed #666;
  .number {
    padding: 0 10px;
    margin: 0 10px;
  }
  .reset-btn {
    padding: 20px 0 0 0;
  }
}
</style>
