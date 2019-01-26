import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
      'Client-ID 27656bf92ea27bab5cf77c739c662b56adf16de4c86fea61104353d2fc7ea994'
  }
})

