class GameView {
    constructor(){
    }

    update(game){
        if(game.winningCombo){
            document.getElementById("currentPlayerDisplay").innerHTML = `Player ${game.turn} wins!`
        }else{
            document.getElementById("currentPlayerDisplay").innerHTML = `Player ${game.turn}'s turn`
        }
        for(let i = 0; i < game.board.length; i++){
            if(!game.board.includes(null)){
                if(game.winningCombo == null){
                    document.getElementById("currentPlayerDisplay").innerHTML = `Draw`
                }
            }
            const tile = document.querySelector(`.tile[data-index='${i}']`)
            tile.textContent = game.board[i];
            if(game.board[i] === "X"){
                tile.classList.add("X")
            }else if(game.board[i] === "O"){
                tile.classList.add("O")
            }
            if(game.winningCombo){
                tile.classList.add("gameOver")
                for(const fi of game.winningCombo){
                    if(fi === i){
                        tile.classList.add("winner")
                    }
                }
            }
        }
    }

    reset(game){
        for(let i = 0; i < game.board.length; i++){
            const tile = document.querySelector(`.tile[data-index='${i}']`)
            tile.textContent = "";
            tile.classList.remove("X", "O", "winner", "gameOver")
            document.getElementById("currentPlayerDisplay").innerHTML = `Player ${game.turn}'s turn`
        }
    }
}

export default GameView