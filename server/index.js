require.config();
const express = require('express')
const app = express()
const route=require('./route/user.route')
const cors = require('cors');



app.use(cors());
app.use(express.json());

app.use('/',route);

const port=process.env.PORT;

app.listen(port,() => {
  console.log(`Example app listening on port ${port}`)
})