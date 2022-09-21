<script setup>
import { useCounterOptionStore } from "../stores/counter";
const counter = useCounterOptionStore()
</script>

<template>
  <div>
    <h2>{{counter.count}}</h2>
    <div>
      <button @click="counter.increment">+</button>
      <button @click="counter.decrement">-</button>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
