import React from "react";
import { Card as BsCard } from "react-bootstrap";
import { ICard } from "../models/Cards";

interface CardProps {
  data: ICard;
}

export const Card: React.FC<CardProps> = ({
  data: { imageUrl, name, text, setName, type },
}) => (
  <BsCard>
    <BsCard.Img variant="top" src={imageUrl} style={{ maxWidth: "250px" }} />
    <BsCard.Body>
      <BsCard.Title>{name}</BsCard.Title>
      <BsCard.Text>Text: {text}</BsCard.Text>
      <BsCard.Text>Set: {setName}</BsCard.Text>
      <BsCard.Text>Type: {type}</BsCard.Text>
    </BsCard.Body>
  </BsCard>
);
