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
    class="w-fit block cursor-pointer text-dark-strong dark:text-base-100 gap-2 py-2"
    :class="{ 'hidden lg:block absolute top-10 right-16 z-[999]': !mobile }"
    @click="toggleDark()"
  >
    <Icon :name="darkModeIcon" size="32" />
  </button>
</template>
