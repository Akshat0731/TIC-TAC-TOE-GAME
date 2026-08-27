let h2 = document.querySelector('h2');
let btn1 = document.createElement('button');
let btn2 = document.createElement('button');
let X = document.createElement('h1');
let O = document.createElement('h1');
let num;
let blocks = [false,false,false,false,false,false,false,false,false];
let gameStart = false;
let player1;
let player2;
X.innerText = "X";

O.innerText = "O";

btn1.style.width = "30px";
btn1.style.height = "30px";
btn1.innerText = "X";
btn1.style.color = "red";

btn2.style.width = "30px";
btn2.style.height = "30px";
btn2.innerText = "O";
btn2.style.color = "blue";
let draw;

window.addEventListener("keypress",function(){
    if(gameStart == false){
        let btns = document.querySelectorAll('.box');
        for(btn of btns){
            btn.innerText = "";
        }
        for(let i=0;i<blocks.length;i++){
            blocks[i] = false;
        }
        gameStart = true;
        h2.innerText = 'Player1 Choose:';
        h2.append(btn1);
        h2.append(btn2);
        choose();
    }
});


function toggleMoves(){
    let btns = document.querySelectorAll(".box");
    for(btn of btns){
        btn.addEventListener("click",function(){
            // seq.push(draw.innerText);
            let id = Number(this.getAttribute('id'));
            if(blocks[id] == false){
                if(num == 1){
                    this.style.color = "red";
                    num = 2;
                }else{
                    this.style.color = "blue";
                    num = 1;
                }
                this.innerText = draw.innerText;
                blocks[id] = draw.innerText ;
                draw = toggle();
                h2.innerText = `Player ${num}'s turn:`;
                winner();
            } 
        });
    }
}

function toggle(){
    if(draw == player1){
        return player2;
    }else{
        return player1;
    }
}
function choose(){
    btn1.addEventListener("click",function(){
        num = 1;
        player1 = X;
        player2 = O;
        h2.innerText = "Player 1's turn:";
        draw = player1;
        toggleMoves();
    });
    btn2.addEventListener("click",function(){
        num = 2;
        player1 = O;
        player2 = X;
        h2.innerText = "Player 2's turn:";
        draw = player1;
        toggleMoves();
    });
}

function winner(){
    if(((blocks[0] == 'X') && (blocks[1] == 'X') && (blocks[2] == 'X')) || 
       ((blocks[3] == 'X') && (blocks[4] == 'X') && (blocks[5] == 'X')) ||
       ((blocks[6] == 'X') && (blocks[7] == 'X') && (blocks[8] == 'X')) ||
       ((blocks[0] == 'X') && (blocks[3] == 'X') && (blocks[6] == 'X')) ||
       ((blocks[1] == 'X') && (blocks[4] == 'X') && (blocks[7] == 'X')) ||
       ((blocks[2] == 'X') && (blocks[5] == 'X') && (blocks[8] == 'X')) ||
       ((blocks[0] == 'X') && (blocks[4] == 'X') && (blocks[8] == 'X')) ||
       ((blocks[6] == 'X') && (blocks[4] == 'X') && (blocks[2] == 'X'))){
        h2.innerHTML = `Player ${num == 1 ? 2 : 1} win!! <BR> Press Any Key To Start The Game!`
        gameStart = false;
        for(let i=0;i<blocks.length;i++){
            blocks[i] = 1;
        }
       }
    else if(((blocks[0] == 'O') && (blocks[1] == 'O') && (blocks[2] == 'O')) || 
            ((blocks[3] == 'O') && (blocks[4] == 'O') && (blocks[5] == 'O')) ||
            ((blocks[6] == 'O') && (blocks[7] == 'O') && (blocks[8] == 'O')) ||
            ((blocks[0] == 'O') && (blocks[3] == 'O') && (blocks[6] == 'O')) ||
            ((blocks[1] == 'O') && (blocks[4] == 'O') && (blocks[7] == 'O')) ||
            ((blocks[2] == 'O') && (blocks[5] == 'O') && (blocks[8] == 'O')) ||
            ((blocks[0] == 'O') && (blocks[4] == 'O') && (blocks[8] == 'O')) ||
            ((blocks[6] == 'O') && (blocks[4] == 'O') && (blocks[2] == 'O'))){
            h2.innerHTML = `Player ${num == 1 ? 2 : 1} win!! <BR>Press Any Key To Start The Game!`
            gameStart = false;
            for(let i=0;i<blocks.length;i++){
                blocks[i] = 1;
            }    
    }
    else{
        let isDraw = true;
        for(let i=0;i<blocks.length;i++){
            if(blocks[i] == false){
                isDraw = false;
                break;
            }
        }
        if(isDraw == true){
            h2.innerHTML = "DRAW!!!!! <BR>Press Any Key To Restart The Game!";
            gameStart = false;
        }
    }
}