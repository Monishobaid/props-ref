<template>
    <h1>What we learn here</h1>
    <p>All props form a <span>one-way-down binding</span> between the child property and the parent one: when the parent property updates, it will flow down to the child, but not the other way around. This prevents child components from accidentally mutating the parent's state, which can make your app's data flow harder to understand.

        In addition, every time the parent component is updated, all props in the child component will be refreshed with the latest value. This means you should not attempt to mutate a prop inside a child component.</p>
    <ChildComponent :foo="parentFoo" />
</template>

<script setup>
import ChildComponent from './OneWayChild.vue';
import { ref } from 'vue';

const parentFoo = ref('Hello from Parent');

// Let's try to update the prop in the parent component
parentFoo.value = 'Modified value'; // This is allowed for regular variables but not for props
</script>

<style>
p{
    padding: 30px;
    word-spacing: 2px;
}
span{
    color: rgb(94, 200, 94);
}
</style>
  

  