
const http = require("http");
const port = 4000
const server = http.createServer(function (request, response) {
  response.write("<h1>Hello World</h1>");
  response.write(
    JSON.stringify({
      name: "rupam",
      age: 22,
    })
  );
  response.end();
});
server.listen(port,()=>{
  console.log(`server is running on port ${port}`);
});
