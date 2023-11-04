<script setup lang="ts">
defineProps<{
  loading: boolean;
}>();
</script>

<template>
  <button class="btn mt-4 btn-accent dark:btn-primary lg:w-52 lg:mx-auto normal-case">
    <Icon v-if="loading" class="animate-spin" name="icon-park-outline:loading-four" size="32" />
    <span v-else class="text-lg"> <slot></slot> </span>
  </button>
</template>
