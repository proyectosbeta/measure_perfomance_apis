const { APP_PORT } = require("./app/configs/general.config.js");
const app = require("./app/app.js");

async function startServer() {
  app.listen(APP_PORT, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Server running on port ${APP_PORT}`);
  });
}

// Start server.
startServer();
