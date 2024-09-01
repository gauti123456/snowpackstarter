/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  plugins: [
    '@snowpack/plugin-sass', // Compile SCSS to CSS
  ],
  mount: {
    src: { url: '/' }, // Serve files in src/ at root URL (/)
    public: { url: '/', static: true }, // Serve public/ directory files statically
  },
  devOptions: {
    port: 3000,
    open: 'none', // Prevent auto-opening a browser
  },
  buildOptions: {
    out: 'build', // Output directory for the production build
    sourcemap: true,
    minify: true,
  },
}
