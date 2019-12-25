const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

//srver files from /dist folder
app.use('/',serveStatic(path.join(__dirname,'./dist')));

//port initialization

const port = process.env.PORT || 8080;
app.listen(port,() => {
    console.log("Listening on port", port);
});