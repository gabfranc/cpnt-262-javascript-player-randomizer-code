"use strict"

//Done: get players
const players = [{name: 'rikki', turnPosition: null},{name: 'cleo', turnPosition: null},{name: 'emma', turnPosition: null},{name: 'bella', turnPosition: null}];
//console.log(players);

//TODO: set turn order
let turnOrder = [1,2,3,4];

//TODO: generate a random number
function getRandomInteger() {
  return Math.round(Math.random() * 86);
}
//TODO: get the remainder from that number
let nextPlayer = getRandomInteger() % players.length;
console.log(nextPlayer);

//TODO: Make sure no repeat players are added

function validatePlayer(currentPlayer,listPlayers) {
  if (!listPlayers.includes(currentPlayer)) {
    return true
  };
};
//TODO: add players to the turn order
function setTurnOrder() {
  while(turnOrder.length < players.length){
    let nextPlayer = getRandomInteger() % players.length;
    turnOrder.push(nextPlayer);
  };

  console.log(turnOrder);
};

setTurnOrder();
console.log(turnOrder);