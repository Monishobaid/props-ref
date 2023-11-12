<script setup>
import {ref, reactive} from "vue";
import grandchild from "./grandchild.vue";
import { defineProps } from "vue";
const {nums} = defineProps(["nums"])

</script>

<template>
  <main >
    <h1>Child component {{nums}}</h1>
    <p>|</p>
    <p>|</p>
    <grandchild/>
  </main>
</template>

<style scoped>

div h1{
  color: rgb(102, 136, 232);
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 500;
}
</style>
