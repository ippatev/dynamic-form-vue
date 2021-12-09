<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <button type="button" v-text="label" @click="null"/>
</template>