<script setup>
import { useCounterOptionStore } from "./stores/counter";
import BaseCounter from "./components/BaseCounter.vue";
const counter = useCounterOptionStore()
</script>

<template>
  <div>
    <h1>Hello, Pinia</h1>
    <h2>{{counter.count}}</h2>
    <div>
      <button @click="counter.increment">+</button>
      <button @click="counter.decrement">-</button>
    </div>
    <div>
      <p>コンポーネント</p>
      <div>
        <p>コンポーネント</p>
        <BaseCounter />
      </div>
      <div>
        <p>slot</p>
        <BaseCounter>
          <BaseCounter></BaseCounter>
        </BaseCounter>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
