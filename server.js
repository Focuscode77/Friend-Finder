// Install npm packages as well as a server

var express = require("express");
var path = require("path");
var nodemon = require("nodemon");

// Tells node to create a express server
var app = express();


// Sets an initial port. We'll use this later in our listner
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.static("app/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

