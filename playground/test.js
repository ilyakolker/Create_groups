let players = [
  { name: "foo", rank: 1 },
  { name: "foo1", rank: 1 },
  { name: "foo2", rank: 1 },
  { name: "foo3", rank: 1 },
  { name: "foo3", rank: 1 },
  { name: "foo3", rank: 2 },
  { name: "foo3", rank: 2 },
  { name: "foo3", rank: 2 },
  { name: "foo3", rank: 2 },
  { name: "foo3", rank: 5 },
  { name: "foo3", rank: 5 },
  { name: "foo3", rank: 5 },
  { name: "foo3", rank: 5 },
  { name: "foo3", rank: 5 },
  { name: "foo3", rank: 5 },
  { name: "foo3", rank: 4 },
  { name: "foo3", rank: 4 },
  { name: "foo3", rank: 3 },
  { name: "foo3", rank: 3 },
  { name: "foo3", rank: 3 },
];

let team1 = [];
let team2 = [];
let team3 = [];
let team4 = [];

let rank1 = [];
let rank2 = [];
let rank3 = [];
let rank4 = [];
let rank5 = [];

let all_ranks = [];


let add_player_to_team = (all_ranks) => {
    counter = 0;
    all_ranks.forEach((el)=>{
        el.forEach((player)=>{
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
              counter ++
              if (counter === 4)
                counter = 0;
        })
    })
    console.log(
  `team1: ${JSON.stringify(team1)}\n team2: ${JSON.stringify(
    team2)}\n team3: ${JSON.stringify(team3)}\n team4: ${JSON.stringify(team4)}`
);
};

let order_by_rank = ()=>{
    for (let i = 0; i < players.length; i++) {
        switch (players[i].rank){
            case 1:
                rank1.push(players[i])
            break;
            case 2:
                rank2.push(players[i])
            break;
            case 3:
                rank3.push(players[i])
            break;
            case 4:
                rank4.push(players[i])
            break;
            case 5:
                rank5.push(players[i])
            break;
        }
        
    }
    
    all_ranks.push(rank1,rank2,rank3,rank4,rank5);
    add_player_to_team(all_ranks);
}

//add_player_to_team();
//order_by_rank()


