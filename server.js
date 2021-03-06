const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));
app.use(routes);
app.listen(PORT, function() {
  console.log(`Listening on PORT ${PORT}`);
});
