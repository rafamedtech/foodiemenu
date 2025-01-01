<script setup lang="ts">
useSeoMeta({
  title: 'About the restaurant',
  description: 'Learn more about our restaurant',
});

const aboutInfo = {
  name: 'Brunette',
  description: 'Kitchen and drinks',
  socials: [
    {
      id: 1,
      name: 'Facebook',
      icon: 'icon-park-outline:facebook',
      url: 'https://www.facebook.com/brunette.realdelmar',
    },
    {
      id: 2,
      name: 'Instagram',
      icon: 'icon-park-outline:instagram',
      url: 'https://www.instagram.com/brunette.realdelmar/',
    },
  ],
  address: 'Blvd Real del Mar 1632, Real Del Mar, Tijuana, Mexico, 22563',
  phone: '664 974 6842',
  schedule: [
    {
      id: 1,
      name: 'Monday - Tuesday',
      time: 'Closed',
    },
    {
      id: 2,
      name: 'Wednesday - Thursday',
      time: '9 AM - 10 PM',
    },
    {
      id: 3,
      name: 'Friday - Saturday',
      time: '9 AM - 12 PM',
    },
    {
      id: 4,
      name: 'Sunday',
      time: '8 AM - 8 PM',
    },
  ],
};
</script>

<template>
  <main>
    <AppHeading title="About the restaurant" description="Learn more about our restaurant" />
    <section class="pt-6 pb-24">
      <UCard
        :ui="{
          base: 'relative w-full md:w-3/4 md:mx-auto',
          body: { padding: 'px-0 py-0 sm:p-0' },
          rounded: 'rounded-xl',
        }"
      >
        <NuxtImg
          src="brunette-portada.jpg"
          class="h-52 md:h-64 w-full min-w-full rounded-xl object-cover brightness-50"
          alt="Brunette restaurant"
        />

        <section
          class="absolute bottom-0 z-10 flex h-1/3 w-full flex-col justify-center rounded-b-xl bg-gradient-to-t from-black to-transparent pl-4"
        >
          <p class="text-primary font-bold text-3xl lg:text-3xl">
            {{ aboutInfo.name }}
          </p>
          <p class="pb-8 text-gray-100">{{ aboutInfo.description }}</p>
        </section>
      </UCard>

      <section class="mt-8 flex justify-center gap-4">
        <NuxtLink
          v-for="{ id, name, icon, url } in aboutInfo.socials"
          :key="id"
          :to="url"
          target="_blank"
          class="flex flex-col items-center"
        >
          <Icon :name="icon" size="32" />
          <span class="text-gray-900 dark:text-gray-100">{{ name }}</span>
        </NuxtLink>
      </section>
      <section class="pt-8 flex flex-col gap-2 md:gap-8">
        <div class="gap-8 flex flex-col md:flex-row justify-between md:max-w-xl md:mx-auto md:gap-4">
          <span class="md:w-1/2">
            <Icon name="heroicons:map-pin" size="32" />
            <h3 class="font-bold text-xl text-primary">Address</h3>
            <span class="block font-normal">{{ aboutInfo.address }}</span>
          </span>
          <span>
            <Icon name="heroicons:device-phone-mobile" size="32" />
            <h3 class="font-bold text-xl text-primary">Phone</h3>
            <span>{{ aboutInfo.phone }}</span>
          </span>
        </div>

        <section class="pt-6 md:min-w-xl md:mx-auto md:gap-4">
          <section class="flex flex-col">
            <Icon name="heroicons:clock" size="32" />
            <h3 class="text-xl font-bold text-primary">Opening hours</h3>
          </section>
          <section>
            <div v-for="{ id, name, time } in aboutInfo.schedule" :key="id" class="flex justify-between gap-4 w-full">
              <h4>{{ name }}</h4>
              <span>{{ time }}</span>
            </div>
          </section>
        </section>
      </section>
    </section>
  </main>
</template>
