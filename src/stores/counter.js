import { defineStore } from "pinia";

export const useCounterOptionStore = defineStore("o_counter", {
  state: () => ({
    count: 0,
    name: "Joe",
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});

export const useCounterSetupStore = defineStore("s_counter", () => {
  const count = ref(0);
  const name = ref("Joe");
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  function decrement() {
    count.value--;
  }

  return { count, name, doubleCount, increment, decrement };
});
