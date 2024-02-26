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
same property names 
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
    draw: 3.25,
    team2: 6.5,
  },
};

// 1.

const gameScorers = [...game.scored];
for (const [goalNb, plName] of gameScorers.entries())
  console.log(`goal ${goalNb + 1}: ${plName}`);

// 2.
const gameOdds = Object.values(game.odds);
let averageOdds = 0;
for (const odds of gameOdds) {
  averageOdds += odds / gameOdds.length;
}
console.log("averageOdds: ", averageOdds);

// 3.
const gameOddsEntries = Object.entries(game.odds);
for (const [oddN, oddV] of gameOddsEntries) {
  const teamStr = oddN === "draw" ? "draw" : `victory ${game[oddN]}`;
  console.log(`Odd of ${teamStr} : ${oddV} `);
}

// 4.

const scorers = {};
for (const player of game.scored) {
  scorers[player] = scorers[player] ? scorers[player] + 1 : 1;
}

console.log(scorers);
