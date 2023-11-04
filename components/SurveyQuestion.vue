<script setup lang="ts">
const { label } = defineProps<{
  label: string;
  index: number;
  modelValue?: string | number | Date | null | undefined;
}>();

const options = ['Bueno', 'Malo', 'Regular', 'Excelente'];

const handleInputChange = (event: Event) => (event.target as HTMLInputElement).value;
</script>

<template>
  <div class="form-control">
    <label class="label">
      <span class="font-bold text-accent dark:text-primary"> {{ label }} </span>
    </label>

    <section>
      <fieldset class="flex w-full flex-col gap-2 px-2 text-xs">
        <div v-for="option in options" class="flex w-1/2 items-center justify-between">
          <label class="text-base"> {{ option }} </label>
          <input
            v-bind="$attrs"
            type="radio"
            :name="`radio-${index + 1}`"
            class="radio-primary radio"
            :value="option"
            @input="$emit('update:modelValue', handleInputChange($event))"
          />
        </div>
      </fieldset>
    </section>
    <Divider class="mt-12" />
  </div>
</template>
