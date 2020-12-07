import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://us-central1-clone-c3595.cloudfunctions.net/api'
});

export default instance;