<template>
  <div class="home">
    <p>{{ person1.name }} {{ person1.value }}</p>
    <button @click="handleClick">click</button>
  </div>
</template>

<script setup>
import { ref, reactive } from "@vue/composition-api";

name: "composition-practice";
const person1 = ref({ name: "sibal", age: 20 });
const person2 = reactive({ name: "gaesae", age: 69 });
const handleClick = () => {
  person1.value.age = 30;
  person2.age = 30;
};
</script>

<style></style>
