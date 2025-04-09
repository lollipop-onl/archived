import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: "2025-04-09",
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [
      // @ts-expect-error
      tailwindcss(),
    ],
  },
})
