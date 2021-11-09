const express = require('express');
const app = express();
var cors = require('cors');
const axios = require('axios');
let port = 3000;

app.use(cors())

app.get('/', (req, res) => {
  axios.get('https://api.publicapis.org/categories')
  .then(function (response) {
    response = response.data
    console.log(response);
    res.json({ data : response })
  })
  .catch(function (error) {
    console.log(error);
    res.send('error!')
  })

});

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});