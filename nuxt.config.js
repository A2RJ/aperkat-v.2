const isDev = true;
const url = isDev ? "http://127.0.0.1:8000" : "https://aperkat.uts.ac.id/api";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "APERKAT - Universitas Teknologi Sumbawa",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: "/vendor/jquery/jquery.min.js" },
      { src: "/vendor/bootstrap/js/bootstrap.bundle.min.js" },
      { src: "/vendor/jquery-easing/jquery.easing.min.js" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/vendor/fontawesome-free/css/all.min.css",
    "@/assets/css/sb-admin-2.min.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/axios.js",
    "@/plugins/numeral.js",
    "@/plugins/vuelidate.js",
    "@/plugins/sweetalert.js",
    "@/plugins/notification.js",
    "@/plugins/custom-middleware.js",
    { src: "~/plugins/chart.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    "@nuxt/components"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    "@nuxtjs/auth-next",
    "bootstrap-vue/nuxt"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    withCredentials: true,
    baseURL: url,
    browserBaseURL: url,
  },

  auth: {
    strategies: {
      laravelJWT: {
        provider: "laravel/jwt",
        url,
        endpoints: {
          login: { url: "/api/login", method: "post" },
          logout: false,
          refresh: { url: "/api/refresh", method: "post" },
          user: { url: "/api/me", method: "get" },
        },
        user: {
          property: false,
          autoFetch: true,
        },
        token: {
          property: "access_token",
          maxAge: 3600,
        },
        refreshToken: {
          maxAge: 3600,
        },
      },
    },
  },

  router: {
    middleware: ["auth"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: false,
    collapseBooleanAttributes: true,
    decodeEntities: true,
    minifyCSS: true,
    minifyJS: true,
    processConditionalComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    trimCustomFragments: true,
    useShortDoctype: true,
  },
}
