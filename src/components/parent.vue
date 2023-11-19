<script setup>
import child from "./child.vue"
import { defineProps } from "vue";

const {nums} = defineProps(["nums"])

</script>

<template>
  <main >
    <h1>parent component{{nums}}</h1>
    <p>|</p>
    <p>|</p>
    <child :nums="nums"/>
  </main>
</template>

<style scoped>

div h1{
  color: pink;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 700;
}
</style>
