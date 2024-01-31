<script setup lang="ts">
import promo from '@/assets/img/promo.jpg';

const store = useMainStore();
const { eventModal } = storeToRefs(store);

function closeModal() {
  eventModal.value = false;
}
</script>

<template>
  <section
    class="min-h-screen w-screen px-4 fixed inset-0 backdrop-brightness-[.2] z-[99999] grid place-content-center"
  >
    <dialog class="card w-full max-w-lg bg-dark-strong shadow-xl rounded-xl">
      <figure>
        <img :src="promo" alt="" />
      </figure>
      <div class="card-body bg-dark-strong rounded-xl">
        <h2 class="card-title text-accent dark:text-primary">¡Promoción del mes!</h2>
        <p class="text-base-100">Todos los miércoles de 8AM - 12PM</p>
        <div class="card-actions justify-end">
          <BaseButton type="primary" @click="closeModal">Cerrar</BaseButton>
        </div>
      </div>
    </dialog>
  </section>
</template>
