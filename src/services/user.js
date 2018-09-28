const axios = require('axios');

export const loginUser = (name) => {
  return axios
   .post('http://hackathon.guidesmiths.com:4000/api/user', {
     name: name,
   });
}


export const logResult = (result) => {
  return axios
   .post('http://hackathon.guidesmiths.com:4000/nav/log', {
     result: result,
   });
}