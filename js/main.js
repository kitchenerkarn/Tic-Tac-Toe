import Game from './Game.js';
import GameView from './GameView.js';
const startBtn = document.getElementById('startBtn')
let game = new Game();
let gameView = new GameView();

startBtn.addEventListener('click', () => {
    game.reset()
    gameView.reset(game)
})

console.log(game)

let tiles = document.querySelectorAll('.tile')
tiles.forEach((tile) => {
    tile.addEventListener('click', () => {
        game.makeMove(tile.dataset.index)
        gameView.update(game)
    })
})

