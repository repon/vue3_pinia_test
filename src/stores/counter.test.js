import { describe, expect, it, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useCounterOptionStore } from "./counter";

beforeEach(() => {
  setActivePinia(createPinia());
  const counter = useCounterOptionStore();
});

it("increments", () => {
  const counter = useCounterOptionStore();
  expect(counter.count).toBe(0);
  counter.increment();
  expect(counter.count).toBe(1);
});

it("decrements", () => {
  const counter = useCounterOptionStore();
  expect(counter.count).toBe(0);
  counter.decrement();
  expect(counter.count).toBe(-1);
});

it("doubleCount", () => {
  const counter = useCounterOptionStore();
  expect(counter.count).toBe(0);
  expect(counter.doubleCount).toBe(0);
  counter.increment();
  expect(counter.count).toBe(1);
  expect(counter.doubleCount).toBe(2);
});
