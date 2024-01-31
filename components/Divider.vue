<script setup lang="ts">
defineProps<{
  sidebar?: boolean;
}>();
</script>

<template>
  <div
    class="divider dark:before:bg-base-100/10 dark:after:bg-base-100/10"
    :class="{ 'before:bg-base-100/10 after:bg-base-100/10': sidebar }"
  ></div>
</template>
