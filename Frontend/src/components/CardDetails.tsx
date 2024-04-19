import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

interface Pokemon {
  id: string;
  name: string;
  imageUrl: string;
  subtype: string;
  hp: number;
  abilities: string[];
}

interface Props {
  selectedCard: Pokemon | null;
  onSaveOrRemoveCard: (card: Pokemon) => void;
}

const CardDetails: React.FC<Props> = ({ selectedCard, onSaveOrRemoveCard }) => {
  return (
    <div className="card-details">
      {selectedCard && (
        <Card title={selectedCard.name}>
          <div>Type: {selectedCard.subtype}</div>
          <div>HP: {selectedCard.hp}</div>
          <div>Abilities: {}</div>
          <Button
            label="Save Card"
            onClick={() => onSaveOrRemoveCard(selectedCard)}
            className="p-button-success"
          />
        </Card>
      )}
    </div>
  );
};

export default CardDetails;
