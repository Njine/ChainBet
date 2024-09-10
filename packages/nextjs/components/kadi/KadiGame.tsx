import React from "react";
import { initializeDeck, shuffleDeck } from "./game/gameLogic";
import { Box, Button, Text } from "@chakra-ui/react";

// Import the helper functions

const KadiGame: React.FC = () => {
  const [deck, setDeck] = React.useState<string[]>([]);

  const startGame = () => {
    const cards = initializeDeck(); // Initialize the deck
    setDeck(shuffleDeck(cards)); // Shuffle and set the deck
  };

  return (
    <Box>
      <Text fontSize="2xl">Kadi Game</Text>
      <Button onClick={startGame}>Start Game</Button>
      <Box>{deck.length > 0 ? deck.map(card => <Text key={card}>{card}</Text>) : <Text>No cards</Text>}</Box>
    </Box>
  );
};

export default KadiGame;
