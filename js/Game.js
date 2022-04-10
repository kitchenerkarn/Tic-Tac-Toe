class Game {
    constructor(){
        this.turn = "X";
        this.board = new Array(9).fill(null);
        this.winningCombo = null;
    };

    nextTurn(){
        if(this.turn === "X"){
            this.turn = "O"
        }else{
            this.turn = "X"
        }
    }

    makeMove(i){
        if(this.endOfGame()){
            return;
        }
        if(this.board[i]){
            return;
        }
        this.board[i] = this.turn;
        let winningCombo = this.findWinningCombos();
        if(!winningCombo){
            this.nextTurn()
        }
    }

    endOfGame(){
        if(this.findWinningCombos()){
            return true;
        }else{
            return false;
        }
    }

    findWinningCombos(){
        const winningCombos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(const combo of winningCombos){
            const [a,b,c] = combo;

            if(this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])){
                this.winningCombo = combo
                return combo;
            }
        }
        return null;
    }

    reset(){
        this.turn = "X";
        this.board = new Array(9).fill(null);
        this.winningCombo = null;
    }
}

export default Game