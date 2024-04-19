import React, { useState, useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import { PokemonAPI } from "./service/pokemonAPI.service";
import CardList from "./components/CardList";
import CardDetails from "./components/CardDetails";
import SplashScreen from './components/SplashScreen';
interface Pokemon {
  id: string;
  name: string;
  imageUrl: string;
  subtype: string;
  hp: number;
  evolesFrom: string;
  rarity: string;
  series: string;
  types: string[];
  weaknesses: string[];
}

const App: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemonCards, setPokemonCards] = useState<Pokemon[]>([]);
  const [selectedCard, setSelectedCard] = useState<Pokemon | null>(null);

  useEffect(() => {
    fetchPokemonCards();
  }, []);

  const fetchPokemonCards = async () => {
    try {
      const response = await PokemonAPI.getAllPokemonCards();
      setLoading(false)
      setPokemonCards(response.cards);
    } catch (error: any) {
      console.error("Error fetching Pokemon cards:", error);
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: error.response.data.messag,
        life: 3150,
      });
    }
  };

  const handleCardSelect = async (cardId: string) => {
    try {
      const response = await PokemonAPI.getPokemonCardDetails(cardId);
      setLoading(false)
      setSelectedCard(response.card);
    } catch (error: any) {
      console.error("Error fetching Pokemon card details:", error);
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: error.response.data.messag,
        life: 3150,
      });
    }
  };

  const saveOrRemoveCard = (card: Pokemon) => {
    //TODO: Implement
    console.log("Saving or removing card:", card);
  };
  const hideCardDetails = () => {
    setSelectedCard(null);
  };

  return (
    <div>
      <Toast ref={toast} />
      <CardList pokemonCards={pokemonCards} onCardSelect={handleCardSelect} />
      <CardDetails
        selectedCard={selectedCard}
        onSaveOrRemoveCard={saveOrRemoveCard}
        onHide={hideCardDetails}
      />
       <SplashScreen visible={loading} />
    </div>
  );
};

export default App;
