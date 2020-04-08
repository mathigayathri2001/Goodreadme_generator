const axios = require('axios')

 const api = {
  
  getUser (username) {
    return axios.get(`https://api.github.com/users/${username}`)
       .then(function (res) {
      //console.log(res.data)
        return res.data
       })
  }
}

module.exports = api



