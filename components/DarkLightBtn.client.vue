<script setup lang="ts">
const { mobile = false } = defineProps<{
  mobile?: boolean;
}>();

const isDark = useDark();
const toggleDark = useToggle(isDark);

const darkModeIcon = computed(() =>
  isDark.value ? 'icon-park-outline:sun-one' : 'icon-park-outline:moon'
);
</script>

<template>
  <button
    class="w-fit cursor-pointer text-base-100 py-2"
    :class="{ 'hidden lg:flex gap-2  z-[999]': !mobile }"
    @click="toggleDark()"
  >
    <Icon :name="darkModeIcon" :size="mobile ? '32' : '24'" />
    <span v-if="!mobile" class="text-sm">{{ isDark ? 'Light' : 'Dark' }} Mode</span>
  </button>
</template>
