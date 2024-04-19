import React, { useState, useEffect } from 'react';
import { PokemonAPI } from './service/pokemonAPI.service';
import CardList from './components/CardList';
import CardDetails from './components/CardDetails';

interface Pokemon {
  id: string;
  name: string;
  imageUrl: string;
  subtype: string;
  hp: number;
  abilities: string[];
}

const App: React.FC = () => {
  const [pokemonCards, setPokemonCards] = useState<Pokemon[]>([]);
  const [selectedCard, setSelectedCard] = useState<Pokemon | null>(null);

  useEffect(() => {
    fetchPokemonCards();
  }, []);

  const fetchPokemonCards = async () => {
    try {
      const response = await PokemonAPI.getAllPokemonCards();
      setPokemonCards(response.cards);
    } catch (error) {
      console.error('Error fetching Pokemon cards:', error);
    }
  };

  const handleCardSelect = async (cardId: string) => {
    try {
      const response = await PokemonAPI.getPokemonCardDetails(cardId);
      setSelectedCard(response.card);
    } catch (error) {
      console.error('Error fetching Pokemon card details:', error);
    }
  };

  const saveOrRemoveCard = (card: Pokemon) => {
    //TODO: Implement
    console.log('Saving or removing card:', card);
  };

  return (
    <div>
      <CardList pokemonCards={pokemonCards} onCardSelect={handleCardSelect} />
      <CardDetails selectedCard={selectedCard} onSaveOrRemoveCard={saveOrRemoveCard} />
    </div>
  );
};

export default App;
