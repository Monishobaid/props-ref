<script setup>
const props = defineProps(['foo']);

// Attempt to modify the prop (which is read-only)
props.foo = 'Trying to modify'; // This will trigger a warning in the console
</script>

<template>
    <div>
      <p>Child Component: {{ foo }}</p>
    </div>
</template>

  