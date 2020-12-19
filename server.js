// Requiring express server tool
const express = require("express");

//Requiring expression session for user sessions (still developing this capability)
const session = require("express-session");

// Requiring passport
const passport = require("./config/passport");

//Requiring path to be used with handlebars and handlebars for front-end
const path = require("path");
const exphbs = require("express-handlebars");

// Import routes via controller
const routes = require("./controllers/controller.js");

// Setting up port and syncing models
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication (authentication usability still being developed)
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Use sessions to track a user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Set handlebars for front end.

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
// app.get("/", (req, res) => {
//   res.render("index");
// });

// Requiring our routes
//require("./routes/html-routes.js")(app);
//require("./routes/api-routes.js")(app);
app.use(routes);

// Syncing our recipe database and logging a success message including port number to user
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
