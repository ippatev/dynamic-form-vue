<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: false,
    default: ''
  },
  value: {
    type: Boolean,
    required: true,
    default: false
  }
})
</script>

<template>
  <label>
    {{ label }}
    <input type="checkbox" :checked="value" />
  </label>
</template>
