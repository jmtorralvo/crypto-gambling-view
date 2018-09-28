const axios = require('axios');

export const loginUser = (name) => 
  axios
   .post('http://hackathon.guidesmiths.com:4000/api/user', {
     name: name,
   })
