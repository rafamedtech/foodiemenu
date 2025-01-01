<template>
  <section class="fixed lg:hidden bottom-0 z-[49] w-full shadow bg-gray-100 dark:bg-gray-900">
    <UHorizontalNavigation
      :ui="{
        base: 'flex-col',
        container: 'justify-between w-full',
        inner: 'flex-1',
        inactive: 'text-gray-400',
        icon: { inactive: 'text-gray-400' },
      }"
      :links="links"
    />
  </section>
</template>
