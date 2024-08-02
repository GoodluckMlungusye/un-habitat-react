import { API_AUTH_PARAMS } from '../auth/api';
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: API_AUTH_PARAMS.baseURL,
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
      onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('Authorization', 'Basic ' + Buffer.from('amani.minja@unhabitat.org:Auba2026@@').toString('base64'));
      }
    })
  );
};
