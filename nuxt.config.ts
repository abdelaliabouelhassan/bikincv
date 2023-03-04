// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@vite-pwa/nuxt'],
    pwa: {
      manifest: {
        name: 'Project Name',
        short_name: 'Poject Short Name',
        description: 'Setup Nuxt  PWA',
        start_url: '/',
        icons: [
          {
            src: "icons/icon_16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "icons/icon_32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "icons/icon_192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon_512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        navigateFallback: "/",
      },
      devOptions: {
        enabled: true,
        type: "module",
      },
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
})
