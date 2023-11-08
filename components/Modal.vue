<script setup lang="ts">
const store = useMainStore();
const { openModal } = storeToRefs(store);

function closeModal() {
  openModal.value = false;
  return navigateTo('/menu');
}
</script>

<template>
  <section
    class="min-h-screen w-screen px-4 fixed inset-0 backdrop-brightness-[.2] z-[99999] grid place-content-center"
  >
    <dialog class="card w-full max-w-lg bg-base-100 dark:bg-dark-strong shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-accent dark:text-primary">¡Gracias por tus comentarios!</h2>
        <p class="dark:text-base-100">Haremos lo posible por atenderle aún mejor la próxima vez.</p>
        <div class="card-actions justify-end">
          <BaseButton type="primary" @click="closeModal">Ir al menú</BaseButton>
        </div>
      </div>
    </dialog>
  </section>
</template>
