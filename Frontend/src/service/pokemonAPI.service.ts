import axios from 'axios';
const configFile = require("../config/config");
const API = configFile.config.BASE_URL + "/cards";

export const PokemonAPI = {
  getAllPokemonCards: async () => {
    try {
      const response = await axios.get(`${API}`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching Pokemon cards');
    }
  },
  
  getPokemonCardDetails: async (cardId: string) => {
    try {
      const response = await axios.get(`${API}/${cardId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching Pokemon card details');
    }
  }
};
