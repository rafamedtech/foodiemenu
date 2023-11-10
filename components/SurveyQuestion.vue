<script setup lang="ts">
const { label } = defineProps<{
  label: string;
  index: number;
  modelValue?: number | Date | null | undefined;
  // modelValue?: string | number | Date | null | undefined;
}>();

const ratings = [1, 2, 3, 4, 5];

const handleInputChange = (event: Event) => parseInt((event.target as HTMLInputElement).value);
</script>

<template>
  <div class="form-control">
    <label class="label">
      <span class="font-bold dark:text-base-100"> {{ label }} </span>
      <!-- <span class="font-bold text-accent dark:text-primary"> {{ label }} </span> -->
    </label>

    <section class="mt-4">
      <input
        type="range"
        min="1"
        max="5"
        :value="modelValue"
        @input="$emit('update:modelValue', handleInputChange($event))"
        class="range range-accent dark:range-primary"
        step="1"
      />
      <div class="w-full flex justify-between text-xs px-2">
        <span
          v-for="rating in ratings"
          :key="rating"
          class="text-base flex items-center gap-2"
          :class="{ 'opacity-20': rating > (modelValue as number) }"
          >{{ rating }} <Icon name="icon-park-outline:star" size="28"
        /></span>
      </div>
    </section>
    <Divider class="mt-6" />
  </div>
</template>
