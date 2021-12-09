<script setup lang="ts">
import { PropType } from "vue";
import { FormConfig } from '@/models/FormConfig.ts'

import DynamicFormField from '@/components/DynamicFormField.vue'

const props = defineProps({
  config: {
    type: Object as PropType<FormConfig>,
  }
})

</script>

<template>
  <form>
    <header>
      <h2 v-text="config.title" />
    </header>
    <dynamic-form-field v-for="field of config.fields" :key="field.id" :field="field" />
  </form>
</template>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  form  input {
    max-width: 200px;
  }
</style>