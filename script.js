/*
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
*/
"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
//array destructuting
const [players1, players2] = game.players;
console.log(players1, players2);
// 2 rest pattern
const [gk, ...fieldPlayers] = players1;
// 3
const allPlayers = [...players1, ...players2];
// 4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// 5
const { team1: team1Odds, x: drawOdds, team2: team2Odds } = game.odds;
// const {
//   odds: { team1, x, team2 },
// } = game;
// 6
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

// 7
team1Odds < team2Odds && console.log("team 1 is more likely to win");
team2Odds < team1Odds && console.log("team 2 is more likely to win");

console.log("gk:", gk);
console.log("fieldPlayers:", fieldPlayers);
console.log("allPlayers:", allPlayers);
console.log("players1Final:", players1Final);
console.log("team1Odds, drawOdds, team2Odds:", team1Odds, drawOdds, team2Odds);
console.log("playersScoring", playersScoring);
