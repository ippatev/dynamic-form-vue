<script setup lang="ts">
import {defineAsyncComponent, PropType, ref} from "vue";
import { FormConfig } from '@/models/FormConfig.ts'
import {IFormConfigField} from "../models/FormConfig";

const BaseInput = defineAsyncComponent(() => import('@/components/BaseInput.vue'));
const BaseButton = defineAsyncComponent(() => import('@/components/BaseButton.vue'));
const BaseCheckbox = defineAsyncComponent(() => import('@/components/BaseCheckbox.vue'));

const props = defineProps({
    config: {
      type: Object as PropType<FormConfig>,
    }
  })

const getComponent = (field: IFormConfigField) => {
  switch (field.type) {
    case 'input':
      return BaseInput;
    case 'button':
      return BaseButton;
    case 'checkbox':
      return BaseCheckbox;
  }
}
</script>

<template>
  <form>
    <header>
      <h2>My dynamic Form</h2>
    </header>
    <keep-alive>
      <component :is="getComponent(field)" v-for="field of config.fields" :key="field.id"  :value="field.value" :label="field.label"></component>
    </keep-alive>
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