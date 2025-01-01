<template>
  <div>
    <TheHeader />
    <section class="p-4 min-h-vh lg:flex lg:gap-4 lg:pl-72">
      <Sidebar class="hidden lg:block lg:border-r lg:border-gray-800 lg:pl-4 lg:pr-16" />

      <section class="w-full lg:w-3/4 lg:mx-auto">
        <slot />
      </section>
    </section>
    <BottomNavbar />
  </div>
</template>
