
const express = require("express")
const app = express()
const port = process.env.port || 4000
app.get("/",(req, res)=>{
  res.status(200).send(`<h1>express server running</h1>`)
})
app.get("/login",(req, res)=>{
  res.status(200).send(`<h1>login page</h1>`)
})
app.listen(port,()=>{
  console.log(`server is running on port ${port}`);
});