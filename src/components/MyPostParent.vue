<template>
  <div>
    <h1>What we learn here</h1>
    <p>If you want to pass all the properties of an object as props, <span>you can use v-bind without an argument (v-bind instead of :prop-name).</span>For example, given a post object</p>
    <p>---------------------------------------------------------</p>
    <p>Example:</p>
    <ChildComponent v-bind="post" />
  </div>
</template>

<script setup>
import ChildComponent from './MyPostChild.vue';

const post = {
  id: 1,
  title: 'Australia won!!',
  likes: 42,
  isPublished: true,
  commentIds: [234, 266, 273],
  author: {
    name: 'Monish',
    company: 'Fuelbuddy'
  }
};
</script>

<style>
p{
  padding: 20px;
}
span{
  color: rgb(111, 215, 111);
}
</style>
