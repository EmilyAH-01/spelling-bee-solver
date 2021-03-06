var express = require("express");

var PORT = process.env.PORT || 3000;
//var db = require("./models");

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/html-routes.js")(app);

// db.sequelize.sync().then(function() {
//     app.listen(PORT, function() {
//         console.log("Listening on PORT " + PORT);
//     });
// });

app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
});