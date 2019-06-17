let board = [];



function play (clickedId){
    let playerSpan = document.getElementById("player");
    let clickedElement = document.getElementById(clickedId);
    
    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    }
    


    let topLeft = board[0];
    let topCenter = board[1];
    let topRight = board[2];
    let middleLeft = board[3];
    let middleCenter = board[4];
    let middleRight = board[5];
    let bottomLeft = board[6];
    let bottomMiddle = board[7];
    let bottomRight = board[8];

    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
        alert(topLeft + " wins!");
        return;
        
    } 

    if (middleLeft!== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert(middleLeft + " wins!");
        return;
        
    }

    if (bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
        alert(bottomLeft + " wins!");
        return;
        
    }

    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(topLeft + " wins!");
        return;
    }

    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomMiddle) {
        alert(topCenter + " wins!");
        return;
    }

    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(topRight + " wins!");
        return;
    }

    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert(topLeft + " wins!");
        return;
    }

    if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
        alert(bottomLeft + " wins!");
        return;
    }

    let boardFull = true;
    for (i = 0; i <= 8; i++) {
        if(board[i] === undefined) {
            boardFull = false;
        }
    } if (boardFull === true) {
        alert("It's a tie!");
    }
}