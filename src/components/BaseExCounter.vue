<script setup>
import { useCounterOptionExternalStore } from "../stores/counter";
const counter = useCounterOptionExternalStore()
</script>

<template>
  <div>
    <h2>{{counter.count}}</h2>
    <div>
      <button @click="counter.increment">+</button>
      <button @click="counter.decrement">-</button>
      <button @click="counter.$reset">Reset</button>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
