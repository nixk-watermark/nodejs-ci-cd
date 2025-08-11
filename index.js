const express = require("express");
const app = express();

const APP_ENV = process.env.APP_ENV || "local";
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`<h1>Hello from ${APP_ENV} environment!</h1>`);
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", environment: APP_ENV });
});

app.listen(PORT, () => {
  console.log(`App running in ${APP_ENV} mode on port ${PORT}`);
});
