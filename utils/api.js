/* Declartion of axios module */
const axios = require('axios')

/* Declaration of api object call the axios API to get  the user information */
const api = {
  getUser(username) {
    return axios.get(`https://api.github.com/users/${username}`)
      .then(function (res) {
        //console.log(res.data)
        return res.data
      })
  }
}

/* assign the api object in the export module */
module.exports = api



