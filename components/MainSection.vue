<script setup lang="ts">
interface Props {
  loading: Boolean;
}

defineProps<Props>();
</script>

<template>
  <section class="min-h-screen w-full">
    <section class="pt-4 lg:pt-8">
      <slot name="heading"></slot>
    </section>

    <Divider />

    <div v-if="loading" class="w-full flex justify-center h-[70vh] items-center">
      <Icon name="icon-park-outline:loading-four" size="48" class="animate-spin" />
    </div>

    <section class="pb-24 md:pb-8 md:pt-8" v-else>
      <slot name="content"></slot>
    </section>
  </section>
</template>
