<script setup lang="ts">
const isLoading = ref(true);

const supabase = useSupabaseClient();
const user = useSupabaseUser();
const { $toast } = useNuxtApp();

const formData = reactive({
  email: '',
  password: '',
});

async function userLogin() {
  try {
    const { error } = await supabase.auth.signInWithPassword(formData);

    if (error) throw error;
  } catch (error: any) {
    $toast.error(error.message);
  }
}

watchEffect(async () => {
  if (user.value) {
    await navigateTo('/admin/encuestas');
  }
});

onMounted(() => {
  isLoading.value = false;
});
</script>

<template>
  <main>
    <MainSection :loading="isLoading">
      <template #heading>
        <AppHeading
          title="Login"
          description="Inicia sesión para acceder al area de admintración"
        />
      </template>
      <template #content>
        <section class="grid place-content-center w-full">
          <form
            @submit.prevent="userLogin"
            class="card mt-14 bg-[#FEFEFE] dark:bg-dark-strong dark:border-base-100/10 border lg:w-[30rem]"
          >
            <div class="card-body">
              <BaseInput v-model="formData.email" label="Correo electrónico" />
              <BaseInput v-model="formData.password" type="password" label="Contraseña" />
            </div>
            <div class="mx-auto pb-8">
              <BaseButton type="primary">Iniciar sesión</BaseButton>
            </div>
          </form>
        </section>
      </template>
    </MainSection>
  </main>
</template>
