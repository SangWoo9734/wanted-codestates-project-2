/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/kart/v1.0/users", {
      target: "https://api.nexon.co.kr/",
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware("/kart/v1.0/matches", {
      target: "https://api.nexon.co.kr/",
      changeOrigin: true,
    }),
  );
};
