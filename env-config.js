const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'API_URL': prod ? 'http://api.example.com/' : 'http://localhost:3000/api/'
}