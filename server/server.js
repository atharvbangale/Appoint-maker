const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());


app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));


app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes/authRoutes")(app);
require("./app/routes/appointmentRoutes")(app);
require("./app/routes/userRoutes")(app);


app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

app.use("/uploads", express.static("uploads"));


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
