const express = require("express");
const path = require("path");
const fs = require('fs');
const players_list = require('./data/players.json')

const app = express();
app.use(express.json());

 const port = process.env.PORT || 3000;

let add_player_to_team = (all_ranks) => {
  let team1 = [];
  let team2 = [];
  let team3 = [];
  let team4 = [];
  counter = 0;
  all_ranks.forEach((el) => {
    el.forEach((player) => {
      switch (counter) {
        case 0:
          team1.push(player);
          break;
        case 1:
          team2.push(player);
          break;
        case 2:
          team3.push(player);
          break;
        case 3:
          team4.push(player);
          break;
      }
      counter++;
      if (counter === 4) counter = 0;
    });
  });
  console.log(
    `team1: ${JSON.stringify(team1)}\n team2: ${JSON.stringify(
      team2
    )}\n team3: ${JSON.stringify(team3)}\n team4: ${JSON.stringify(team4)}`
  );
  return [ team1, team2, team3, team4 ];
};

let order_by_rank = (players) => {
  let rank1 = [];
  let rank2 = [];
  let rank3 = [];
  let rank4 = [];
  let rank5 = [];
  let all_ranks = [];
  for (let i = 0; i < players.length; i++) {
    switch (players[i].rank) {
      case 1:
        rank1.push(players[i]);
        break;
      case 2:
        rank2.push(players[i]);
        break;
      case 3:
        rank3.push(players[i]);
        break;
      case 4:
        rank4.push(players[i]);
        break;
      case 5:
        rank5.push(players[i]);
        break;
    }
  }

  all_ranks.push(shuffle(rank1), shuffle(rank2),shuffle(rank3),shuffle(rank4))
  let teams = add_player_to_team(all_ranks);
  return teams;
};

const add_player_to_players_list = (req, res)=>{
  players_list.push(req.body);
  fs.writeFileSync('data/players.json', JSON.stringify(players_list))
  res.send("ok")
}

const remove_player_from_db = (req, res)=>{
  fs.writeFileSync('data/players.json', JSON.stringify(req.body))
  res.send("ok")
}

const get_players_list = (req, res)=>{
    res.send(players_list)
}

const builed_teams = (req, res) => {
  console.log(req.body);
  res.send(order_by_rank(req.body));
};

    
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

app.use("/", express.static(path.join(__dirname, "public")));

app.get('/get_players_list', get_players_list);

app.post("/show_teams", builed_teams);

app.post("/add_player_to_db", add_player_to_players_list);

app.post("/remove_player_from_db", remove_player_from_db)

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
