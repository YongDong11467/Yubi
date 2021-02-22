const axios = require('axios');
const baseUrl = 'https://animechanapi.xyz/api/';

function getRandomQuote() {
    return axios.get(baseUrl + 'quotes/random')
    .then((res) => {
      if (!res.data) {
        return reject('No data was returned');
      }

      console.log(res.data.data)
      return res.data;
    })
    .catch((err) => {
      console.log("Couldn't get random quote");
      return err;
    });
}

// async function getRandomQuote(){
//     try {
//       const response = await axios.get(baseUrl + 'quotes/random');
//       console.log(response.data)
//       return response.data
//     } catch (error) {
//       console.error(error);
//     }
// }

module.exports = {
    getRandomQuote
};