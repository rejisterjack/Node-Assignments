const express = require("express")
const app = express()
const port = process.env.port || 4000
app.get("/",(req, res)=>{
  res.status(200).send(`<h1>express server running</h1>`)
})
app.get("/api/main",(req, res)=>{
  res.status(200).send(`<h1>Express JS</h1>
  <p>Express.js, or simply Express, is a back end web application framework for build RESTful APIs with Node.js</p>
  <p>t is designed for building web applications and APIs</p>`)
})
app.listen(port,()=>{
  console.log(`server is running on port ${port}`);
});