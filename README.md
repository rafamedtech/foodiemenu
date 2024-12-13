# Template setup

Create a new Nuxt application

```bash
npx nuxi@latest init <foodiemenu>
```

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Setup Nuxt UI

Run the following command:

```bash
npx nuxi@latest module add ui
```

This will install the "@nuxt/ui" module along with the Tailwind and Nuxt Icon modules

Check out the [Nuxt UI documentation](https://ui.nuxt.com/getting-started) for more information.

## Setup the file-based routing

Now we create a pages folder with an index.vue file also we need to remove the <NuxtRouteAnnouncer /> and the <NuxtWelcome /> components and replace them with the <NuxtPage /> component in order to render the pages inside the pages directory.

## Setup the user layout

Layouts are basically components that we can use to render parts that we don't need to change between routes, in order to use them we need to create a layouts folder and create your layout file in a vue single-file component.

In order to use a layout we can use the auto-imported <NuxtLayout /> component in your app.vue file wrapping the <NuxtPage /> component and with the name property we can tell the component which layout to use.

Keep in mind that if you name the file default.vue it would be used automatically if you don't use an specific layout.

```vue
<!-- This will use the default.vue layout -->
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```

```vue
<!-- This will use the admin.vue layout -->
<template>
  <div>
    <NuxtLayout name="admin">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```

You can also use the definePageMeta compiler macro to define the layout you want to use individually on each page:

```vue
<script setup>
definePageMeta({
  layout: 'admin',
});
</script>
```

## Creating the default layout

The most common pieces in my layouts are the header, navigation bar and footer. In this example we are going to use a top header and a bottom navigation bar.

<!-- Continues here... -->

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
