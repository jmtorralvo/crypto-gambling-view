const axios = require('axios');

const API_URL = 'http://crypto-fighters.hackathon.guidesmiths.com';

export const loginUser = (name) =>
  axios
   .post('http://hackathon.guidesmiths.com/api/user', {
     name: name,
   })

export const logResult = ({name,currentBet,currentChange}) =>
  axios({
    method: 'get',
    url: 'http://hackathon.guidesmiths.com/api/nav/log',
    data: {
      gameId: "crypto-fighters",
      userName: name,
      bet: currentBet,
      change: currentChange
  }
})


export const getCrypto = () => axios({
  method: 'get',
  url: `${API_URL}/api/cryptos`,
});
