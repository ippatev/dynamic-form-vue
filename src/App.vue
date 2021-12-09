<script setup lang="ts">
import DynamicForm from './components/DynamicForm.vue'
import { FormConfig } from '@/models/FormConfig.ts'

const myConfig: FormConfig = {
  fields: [
    {
      id: 0,
      type: 'input',
      value: 'lorem ipsum',
      label: 'Name:'
    },
    {
      id: 2,
      type: 'input',
      value: 'ipsum lorem',
    },
    {
      id: 1,
      type: 'checkbox',
      value: true,
      label: 'Crazy'
    },
    {
      id: 3,
      type: 'button',
      label: 'click me'
    }
  ]
}
</script>

<template>
  <dynamic-form :config="myConfig"/>
</template>