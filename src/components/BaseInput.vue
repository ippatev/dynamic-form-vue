<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: false,
    default: ''
  },
  value: {
    type: String,
    required: true
  }
})
</script>

<template>
  <label>
    {{ label }}
    <input :value="value" />
  </label>
</template>

<style scoped>
</style>