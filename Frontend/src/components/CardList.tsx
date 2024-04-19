import React from "react";
import { Card } from "primereact/card";

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

interface Props {
  pokemonCards: Pokemon[];
  onCardSelect: (cardId: string) => void;
}

const CardList: React.FC<Props> = ({ pokemonCards, onCardSelect }) => {
  return (
    <div className="grid justify-content-center">
      <div className="grid justify-content-center gap-3 col-12">
        {pokemonCards.map((card) => (
          <div key={card.id} className="p-col-12 p-md-4 p-lg-3 p-xl-2">
            <Card
              className="border-round-2xl"
              title={card.name}
              onClick={() => onCardSelect(card.id)}
            >
              <img src={card.imageUrl} alt={card.name} />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
