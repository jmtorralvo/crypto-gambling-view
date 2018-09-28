const axios = require('axios');

export const loginUser = (name) =>
  axios
   .post('http://hackathon.guidesmiths.com:4000/api/user', {
     name: name,
   })

export const userBet = (name,currentBet,currentChange) =>
axios({
  method: 'get',
  url: 'http://hackathon.guidesmiths.com:4000/api/nav/log',
  data: {
     gameId: "crypto-fighters",
     userName: name,
     bet: currentBet,
     change: currentChange
 }
})

export const getCrypto = () => axios({
  method: 'get',
  url: 'https://pure-headland-66701.herokuapp.com:4000/api/cryptos',
});
