const express = require("express");
const app = express();
const port = process.env.port || 4000;

const middleWare1 = function (req,res,next ) {
  console.log("this is local middleware");
  next();
};

const middleWare2 = function (req,res,next ) {
  console.log("this is global middleware");
  next();
};

app.use(middleWare2);

app.get("/",  function (req, res) {
  res.send("<h1>initial page of this server<h1>");
});
app.get("/login", middleWare1, function (req, res) {
  res.send(
    "<h1>this is login page<h1>"
  );
});
app.get("/signup",middleWare1, function (req, res) {
  res.send("<h1>this is signup page<h1>");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
