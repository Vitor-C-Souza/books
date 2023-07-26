import axios from 'axios';

const livrosAPI = axios.create({ baseURL: 'http://localhost:8000/livros' });

class Livros {
  static async getLivros() {
    const response = await livrosAPI.get('/');

    return response.data;
  }
}

export { Livros };
