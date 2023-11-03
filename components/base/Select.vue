<script setup lang="ts">
const { label, items } = defineProps<{
  label: string;
  items: string[];
}>();

const handleInputChange = (event: Event) => (event.target as HTMLInputElement).value;
</script>

<template>
  <div class="form-control gap-2">
    <label for="">{{ label }}</label>
    <select
      v-bind="$attrs"
      @input="$emit('update:modelValue', handleInputChange($event))"
      id="mesero"
      class="select select-bordered w-full bg-white border-2 border-base-200 transition-all focus:ring focus:ring-primary dark:bg-dark-strong dark:border-base-100/10"
    >
      <option v-for="item in items" :value="item" :key="item">{{ item }}</option>
    </select>
  </div>
</template>
