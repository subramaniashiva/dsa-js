(function() {
    var dParent = document.getElementById('parent'),
        dSubmit = document.getElementById('submit'),
        dInput = document.getElementById('num-square');
    var myChessBoard;

    dSubmit.addEventListener('click', function() {
        var numbSquares;
        if (dInput.value) {
            numSquares = parseInt(dInput.value, 10);
            myChessBoard = new ChessBoard(numSquares);
            myChessBoard.initialize();
        }
    });

    function ChessBoard(numberOfSquares) {
        this.board = undefined;
        this.numberOfSquares = numberOfSquares || 8;
    }
    // This function creates the chessboard in UI
    ChessBoard.prototype.initialize = function() {
        var newElem, newLine, i, piece, next;
        var dOldBoard = document.getElementById('chess-board');
        if (dOldBoard) {
            dOldBoard.parentNode.removeChild(dOldBoard);
        }
        this.board = document.createElement('div');
        this.board.id = 'chess-board';
        next = 'black';
        for (i = 0; i < this.numberOfSquares * this.numberOfSquares; i++) {
            newElem = document.createElement('div');
            piece = document.createElement('div');
            piece.className = 'piece';
            // Improve this logic
            piece.innerHTML = (i + 1).toString();

            if (i % this.numberOfSquares === 0) {
                if (this.numberOfSquares % 2 === 0) {
                    next = (next === 'white') ? 'black' : 'white';
                }
                newElem.style.clear = 'both';
            }
            newElem.className = next + ' square';
            newElem.style.width = (100 / this.numberOfSquares).toString() + '%';
            //newElem.style.height = (100 / this.numberOfSquares).toString() + '%';
            newElem.appendChild(piece);
            next = (next === 'white') ? 'black' : 'white';
            this.board.appendChild(newElem);
        }
        dParent.appendChild(this.board);
    }
    // Create a new chessboard and initialize
    myChessBoard = new ChessBoard();
    myChessBoard.initialize();
})();