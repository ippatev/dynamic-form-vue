<script setup lang="ts">
import {defineAsyncComponent, PropType} from "vue";
import {IFormConfigField} from "../models/FormConfig";

const BaseInput = defineAsyncComponent(() => import('@/components/BaseInput.vue'));
const BaseButton = defineAsyncComponent(() => import('@/components/BaseButton.vue'));
const BaseCheckbox = defineAsyncComponent(() => import('@/components/BaseCheckbox.vue'));

const props = defineProps({
  field: {
    type: Object as PropType<IFormConfigField>,
    required: true
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
  <component :is="getComponent(field)" :value="field.value" :label="field.label"></component>
</template>


<style scoped>

</style>