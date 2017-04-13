// API
export let apiUrl
if (process.env.NODE_ENV === 'development') {
  apiUrl = 'http://localhost:3000/spad.json'
} else {
  apiUrl = '/admin/spad.json'
}

const constants = {
  apiUrl
}

export default constants
