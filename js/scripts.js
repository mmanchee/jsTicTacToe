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


// Business Logic Player
function Player(name, total, turn) {
  this.name = name,
  this.total = total,
  this.turn = turn
}

// Interface Logic
$(document).ready(function() {
  $("#start-game").submit(function() {
    let player1Name = 
  });
  $("#square1").click(function() {
    mark();
  });
  $("#square2").click(function() {
    mark();
  });
  $("#square3").click(function() {
    mark();
  });
  $("#square4").click(function() {
    mark();
  });
  $("#square5").click(function() {
    mark();
  });
  $("#square6").click(function() {
    mark();
  });
  $("#square7").click(function() {
    mark();
  });
  $("#square8").click(function() {
    mark();
  });
  $("#square9").click(function() {
    mark();
  });
  $("#square" +  + "-text").text(mark);
});