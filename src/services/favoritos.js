import axios from 'axios';

const favoritosAPI = axios.create({
  baseURL: 'http://localhost:8000/favoritos',
});

class Favorito {
  static async getFavoritos() {
    const response = await favoritosAPI.get('/');

    return response.data;
  }
  static async postFavorito(id) {
    await favoritosAPI.post(`/${id}`);
  }
  static async deleteFavorito(id) {
    await favoritosAPI.delete(`/${id}`);
  }
}

export { Favorito };
