<script setup>
import { useCounterOptionStore, useCounterOptionExternalStore } from "./stores/counter";
import BaseCounter from "./components/BaseCounter.vue";
import BaseExCounter from "./components/BaseExCounter.vue";
const counter = useCounterOptionStore()
const ex_counter = useCounterOptionExternalStore()
</script>

<template>
  <div>
    <h1>Hello, Pinia</h1>
    <h2>{{counter.count}}</h2>
    <div>
      <button @click="counter.increment">+</button>
      <button @click="counter.decrement">-</button>
      <button @click="counter.$reset">Reset</button>
    </div>
    <div>
      <h1>コンポーネント</h1>
      <h2>通常コンポーネント</h2>
      <BaseCounter />
      <h2>永続化コンポーネント</h2>
      <BaseExCounter />
      <div>
        <p>slot</p>
        <BaseCounter>
          <BaseExCounter>
            <BaseCounter />
          </BaseExCounter>
        </BaseCounter>
      </div>
    </div>
    <div>
      <h1>永続化counter</h1>
      <h3>{{ex_counter.$subscribe}}</h3>
      <h2>{{ex_counter.count}}</h2>
      <div>
        <button @click="ex_counter.increment">+</button>
        <button @click="ex_counter.decrement">-</button>
        <button @click="ex_counter.$reset">Reset</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
