export default {
  target: "static",
  mode: "universal",
  head: {
    title: "VUE Training",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  },
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    "bulma",
    // CSS file in the project
    "~/assets/styles/main.css",
    // SCSS file in the project
    "~/assets/styles/main.scss"
  ],
  modules: [["nuxt-buefy"], "@nuxtjs/font-awesome"],
  buefy: { defaultIconPack: "fas" }
};
