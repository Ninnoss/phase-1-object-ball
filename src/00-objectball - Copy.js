function gameObject() {
  return {
    home: {
      teamName: 'Brooklyn Nets',
      colors: ['Black', 'White'],
      players: {
        'Alan Anderson': {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        'Reggie Evans': {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        'Brook Lopez': {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        'Mason Plumlee': {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        'Jason Terry': {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: 'Charlotte Hornets',
      colors: ['Turquoise', 'Purple'],
      players: {
        'Jeff Adrien': {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        'Bismak Biyombo': {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        'DeSagna Diop': {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        'Ben Gordon': {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        'Brendan Haywood': {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}
const game = gameObject();
const teams = Object.values(game)
const players = { ...game.home.players, ...game.away.players }

function numPointsScored(playerName) {
  return players[playerName].points
}
// console.log(numPointsScored('Ben Gordon'));

function shoeSize(playerName) {
 return players[playerName].shoe
}
// console.log(shoeSize('DeSagna Diop'));


function teamColors(teamName) {
  for (let team of teams) {
    if (team.teamName === teamName) {
      return team.colors;
        }
    }
}
// console.log(teamColors('Charlotte Hornets'));

function teamNames() {
 return teams.map(team => team.teamName)
}
// console.log(teamNames());

const playerNumbers = targetTeamName => {
  for (let team of teams) {
    if (team.teamName == targetTeamName) {
      let stats = Object.values(team.players)
      // console.log(stats);
      return stats.map(stat => stat.number)
    }
  }
}
// console.log(playerNumbers('Brooklyn Nets'))/

const playerStats = playerName => {
  return players[playerName];
}
// console.log(playerStats('Jason Terry'))

// console.log(players);

function bigShoeRebounds() {
  const arr = Object.values(players);
  // console.log(arr);
  const sorted = arr.sort((a, b) => {
    return b.shoe - a.shoe;
  })
  return sorted[0].rebounds;
}
console.log(bigShoeRebounds());



// function bigShoeRebounds() {
//   const arr = Object.values(players);
//   // console.log(arr);
//   const shoes = arr.map((player) => player.shoe);
//   // console.log(shoes);
//   const biggestShoe = Math.max(...shoes);
//   const playerWithLargestShoe = arr.filter((player) => {
//     if (player.shoe === biggestShoe) {
//       return player.shoe;
//     }
//   });
//   return playerWithLargestShoe[0].shoe;
// }

// console.log(bigShoeRebounds());
// console.log(players);