<script setup>
import {ref, reactive} from "vue";
import parent from "./components/parent.vue";


// const red = ref(20);
// const green = ref(200);
// const blue = ref(500);
// Instead of this way we can define number in objects using ref
// important point to note ref takes any value
// ref access state with value
// ref can update entire object
const color = ref({
  red:30,
  blue:40,
  green:50,
})
// reactive access state
// reactive can only take object
// reactive can only update properties
const color2 = reactive({
  red:30,
  blue:40,
  green:50,
})
const changestate = ()=>{
  color2.red = 166;
  color2.blue = 200;
  color3.green = 500;
}
const nums = ref([1,2,3,4,5,"vicious cycle"])
</script>

<template>
  <main >
    <div :style="{backgroundColor: `rgb(${color2.red},${color2.blue},${color2.green})`}">
      <input type="number" v-model= "color2.red" placeholder="red">
      <input type="number" v-model= "color2.blue" placeholder="blue">
      <input type="number" v-model= "color2.green" placeholder="green">
      <button @click="changestate">random color</button>
    </div>
    <div> 
      {{ nums }}
      <parent :nums="nums"/>
    </div>
  </main>
</template>

<style scoped>
div{
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
}
div input{
  max-height: 20%;
  max-width: 25%;
}
div h1{
  color: pink;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 700;
}
</style>
