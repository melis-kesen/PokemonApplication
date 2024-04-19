import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
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
  onHide: () => void;
}

const CardDetails: React.FC<Props> = ({ selectedCard, onSaveOrRemoveCard, onHide }) => {
  return (
     <Sidebar visible={selectedCard !== null} onHide={onHide} position="right">
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
   </Sidebar>
  );
};

export default CardDetails;
