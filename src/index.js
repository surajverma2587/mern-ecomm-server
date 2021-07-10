const express = require("express");

const { connect } = require("./db");
const routes = require("./routes");

const PORT = process.env.PORT || 4000;

const app = express();

connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
