<script setup lang="ts">
import type { Item } from '@/types/Menu';

const { items, oneColumn = false } = defineProps<{
  items: Item[];
  oneColumn: boolean;
}>();

const dialog = ref<HTMLDialogElement>();
function openDialog(): void {
  dialog.value?.showModal();
}
</script>

<template>
  <ul
    class="grid grid-cols-1 gap-4 lg:p-4 py-4 lg:grid-cols-2"
    :class="{ 'grid-cols-2 text-left': !oneColumn }"
  >
    <li :class="{ 'mx-auto': items.length === 1 }" v-for="item in items" :key="item._id">
      <div>
        <h4 class="text-base font-bold uppercase text-accent dark:text-primary">
          {{ item.name }}
        </h4>

        <p v-if="item.description" class="dark:text-base-100">{{ item.description }}</p>
        <div v-if="item.price" class="flex gap-2">
          <p
            class="dark:text-base-100 font-bold"
            :class="{ 'text-black': !item.description }"
            v-if="item.price"
          >
            ${{ item.price }}
          </p>
        </div>
        <div v-if="item.variants">
          <div v-for="variant in item.variants" :key="variant._id" class="flex justify-between">
            <p
              class="text-dark-strong dark:text-base-100"
              :class="{ 'text-accent dark:text-primary': item.description }"
            >
              {{ variant.name }}
            </p>
            <p class="dark:text-base-100 font-bold">${{ variant.price }}</p>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
