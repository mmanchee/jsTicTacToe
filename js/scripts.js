// Business Logic Game
function Game() {
  this.players = []
  this.turn = 0;
}

Game.prototype.addPlayer = function(player) {
  this.players.push(player);
}

Game.prototype.findPlayer = function() {
  for (let i = 0; i < this.players.length; i++) {
    if (this.players[i].turn === true) {
      return i;
    }
  }
}

// Business Logic Player
let game = new Game();

function Player(name, total) {
  this.name = name,
  this.total = total
}

// Interface Logic
// Mark Function
function mark(num) {
  let mark;
  if (game.turn === 0) {
    mark = "X";
  } else {
    mark = "O"
  }
  $("#square" + num + "-text").text(mark);
  $("#square" + num).prop("disabled", true);
}

// Add Function
function add(num) {
  game.players[game.turn].total += parseInt(num);
}

// Winner Function
function winner() {
  let winArray = [5, 111, 222, 333, 123, 321, 50, 500];
  let winner = false;
  for (let i = 0; i < winArray.length; i++) {
    if (game.players[game.turn].total === winArray[i]) {
      winner = true;
    }
  }
  return winner;
}
// End Turn Function
function endTurn(player) {
  if (game.turn === 0) {
    game.turn = 1;
  } else {
    game.turn = 0;
  }
  $("#turn-name").text(game.players[game.turn].name);
}

// Action Function
function actions(num) {
  mark(num);
  add(num);
  let win = winner();
  if (win) {
    $("#winner-name").text(game.players[game.turn].name);
    $("#winner").show();
    $("#game-board").hide();
  } else {
    endTurn();
  }
}

$(document).ready(function() {
  $("#start-game").submit(function() {
    event.preventDefault();
    let player1Name = $("input#player1").val();
    let player2Name = $("input#player2").val();

    let player1 = new Player(player1Name, 0);
    let player2 = new Player(player2Name, 0);
    
    game.addPlayer(player1);
    game.addPlayer(player2);

    $("#turn-name").text(game.players[0].name);
    $("#start-game").hide();
    $("#game-board").show();
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
  $("#play-again").click(function() {
    window.location.reload();
  });
});