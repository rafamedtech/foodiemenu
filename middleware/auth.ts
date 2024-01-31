export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  if (user.value) {
    return;
    // return navigateTo({ name: 'login', query: { redirect: to.fullPath } });
  }
  return navigateTo('/login');
});
