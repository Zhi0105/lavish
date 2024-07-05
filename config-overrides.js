const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias,
  adjustWorkbox
} = require("customize-cra");
const path = require("path");

module.exports = override(
  // enable legacy decorators babel plugin
  addDecoratorsLegacy(),

  // disable eslint in webpack
  disableEsLint(),

  // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
  process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),

  // add an alias for "ag-grid-react" imports
  addWebpackAlias({
    // ["ag-grid-react$"]: path.resolve(__dirname, "src/shared/agGridWrapper.js")
      ['~_src']: path.resolve(__dirname, './src'),
      ['~_assets']: path.resolve(__dirname, './src/assets'),
      ['~_components']: path.resolve(__dirname, './src/components'),
      ['~_navigation']: path.resolve(__dirname, './src/navigation'),
      ['~_providers']: path.resolve(__dirname, './src/providers'),
      ['~_routes']: path.resolve(__dirname, './src/routes'),
      ['~_services']: path.resolve(__dirname, './src/services'),
      ['~_template']: path.resolve(__dirname, './src/templates'),
      ['~_utils']: path.resolve(__dirname, './src/utils'),      
  }),

  // adjust the underlying workbox
  adjustWorkbox(wb =>
    Object.assign(wb, {
      skipWaiting: true,
      exclude: (wb.exclude || []).concat("index.html")
    })
  )
);