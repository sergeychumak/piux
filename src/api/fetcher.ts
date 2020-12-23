const axios = require('axios')

const Fetcher = axios.create({
  baseURL: '/',
  timeout: 0
})

export default Fetcher
