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
    <!-- <section class="flex justify-center mt-4 mb-2">
      <div class="rating bg-base-100 dark:bg-dark-strong rounded-lg p-4 rating-lg gap-4">
        <input
          v-bind="$attrs"
          v-for="(option, idx) in ratings"
          :key="option"
          type="radio"
          :name="`rating-${index + 1}`"
          :value="option"
          @input="$emit('update:modelValue', handleInputChange($event))"
          class="mask mask-star-2"
        />
      </div>

    </section> -->
    <section class="mt-4">
      <!-- <label for="">Calificación</label> -->
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
