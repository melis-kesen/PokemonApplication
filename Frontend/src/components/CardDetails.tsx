import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
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
  selectedCard: Pokemon | null;
  onSaveOrRemoveCard: (card: Pokemon) => void;
  onHide: () => void;
}

const CardDetails: React.FC<Props> = ({
  selectedCard,
  onSaveOrRemoveCard,
  onHide,
}) => {
  return (
    <Sidebar
      visible={selectedCard !== null}
      onHide={onHide}
      position="right"
      className="bg-blue-50 w-5"
    >
      {selectedCard && (
        <Card className="border-round-2xl" title={selectedCard.name}>
          <div className="pb-3">
            <b>Type: </b> {selectedCard.subtype}
          </div>
          <div className="pb-3">
            <b>HP: </b>
            {selectedCard.hp}
          </div>
          <div className="pb-3">
            <b>EvolesFrom: </b>
            {selectedCard.evolesFrom}
          </div>
          <div className="pb-3">
            <b>Rarity: </b>
            {selectedCard.rarity}
          </div>
          <div className="pb-3">
            <b>Series: </b>
            {selectedCard.series}
          </div>
          <div className="pb-3">
            <b>Types: </b>
            {selectedCard.types?.join(", ")}
          </div>
          <br></br>
          <div className="grid col-12">
            <Button
              text
              outlined
              label="Save Card"
              onClick={() => onSaveOrRemoveCard(selectedCard)}
              className="col-6 p-button-success"
            />
            <Button
              text
              outlined
              label="Remove Card"
              onClick={() => onSaveOrRemoveCard(selectedCard)}
              className="col-6 p-button-error"
            />
          </div>
        </Card>
      )}
    </Sidebar>
  );
};

export default CardDetails;
