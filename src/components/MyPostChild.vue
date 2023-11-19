<script setup>
defineProps(['id', 'title', 'likes', 'isPublished', 'commentIds', 'author']);
</script>

<template>
    <div>
      <h2>{{ title }}</h2>
      <p>Likes: {{ likes }}</p>
      <p v-if="isPublished">Published</p>
      <ul>
        <li v-for="commentId in commentIds" :key="commentId">{{ commentId }}</li>
      </ul>
      <p v-if="author">Author: {{ author.name }} from {{ author.company }}</p>
    </div>
</template>

<style>
</style>