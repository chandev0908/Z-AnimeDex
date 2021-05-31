const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/top",
    createProxyMiddleware({
      target: "https://api.jikan.moe/v3",
      changeOrigin: true,
    })
  );
  app.use(
    "/season",
    createProxyMiddleware({
      target: "https://api.jikan.moe/v3",
      changeOrigin: true,
    })
  );
};
