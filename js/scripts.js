// Business Logic Game
function Game() {
  this.players = []
}

Game.prototype.addPlayer = function(player) {
  this.players.push(player);
}

Game.prototype.findPlayer = function() {
  for (let i = 0; i < this.players.length; i++) {
    if (this.players[i].turn === true) {
      return this.player[i];
    }
  }
}

// 

// Business Logic Player
let game = Game();

function Player(name, total, turn) {
  this.name = name,
  this.total = total,
  this.turn = turn
}

// Interface Logic
function mark(num) {
  let player = game.findPlayer();
  let result = [player, num];
  let mark;
  if (player === 0) {
    mark = "X";
  } else {
    mark = "O"
  }
  $("#square" + num).text(mark);
  return result;
}

function add(array) {
  game.players[array[0]].total += parseInt(array[1]);
  return array[0];
}

function winner(player) {
  let winArray = [5, 111, 222, 333, 123, 321, 50, 500];
  let winner = false;
  for (let i = 0; i < winArray.length; i++) {
    if (game.players[player].total === winArray[i]) {
      winner = true;
    }
  }
}

function endTurn(player) {

}

function actions(num) {
  let result = mark(1);
  let player = add(result);
  let winner = winner(player);
  if (winner) {
    $("#winner-name").text(game.players[winner].name);
    $("#winner").show();
    $("#game-board").hide();
  } else {
    endTurn(player);
  }
}

$(document).ready(function() {
  $("#start-game").submit(function() {
    event.preventDefault();
    let player1Name = $("input#player1").val();
    let player2Name = $("input#player2").val();

    $("#player1-name").text(player1Name);
    $("#player2-name").text(player2Name);
    $("#start-game").hide();
    $("#game-board").show();

    let player1 = new Player(player1Name, 0, true);
    let player2 = new Player(player2Name, 0, false);
    game.addPlayer(player1);
    game.addPlayer(player2);
  });
  $("#square1").click(function() {
    actions(1);
  });
  $("#square2").click(function() {
    actions(2);
  });
  $("#square3").click(function() {
    actions(3);
  });
  $("#square10").click(function() {
    actions(10);
  });
  $("#square20").click(function() {
    actions(20);
  });
  $("#square30").click(function() {
    actions(30);
  });
  $("#square100").click(function() {
    actions(100);
  });
  $("#square200").click(function() {
    actions(200);
  });
  $("#square300").click(function() {
    actions(300);
  });
});