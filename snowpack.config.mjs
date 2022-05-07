/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  plugins: ['@snowpack/plugin-sass'],
  mount: {
    src: '/',
  },
  devOptions: {
    port: 3000,
    open: 'none',
  },
}
