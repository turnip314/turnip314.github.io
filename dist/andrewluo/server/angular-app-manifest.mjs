
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 66342, hash: 'fb9be98216b7e2e20cfdac24690074c1b665da9c373b4901e58287aae8ef323b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17112, hash: '0ca24f8383f7b540febbc7c2a791b27ee10e6c3ed490b1094cd3e7c1c2c2adb0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles.css': {size: 282648, hash: 'TtzLN9lyzqU', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}
  },
};
