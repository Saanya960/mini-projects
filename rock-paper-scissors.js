const scores = JSON.parse(localStorage.getItem('score')) || {
                 ties: Number(scores.ties) || 0,
                wins: Number(scores.wins) || 0,
                losses: Number(scores.losses) || 0
            };

            const moves = ['rock','paper','scissor'];

            function saveScore(){
                localStorage.setItem('score', JSON.stringify(scores));
            }
            function displayScore(){
                document.querySelector('#score').innerText =`Wins=${scores.wins}, Losses=${scores.losses}, Ties=${scores.ties}`;
            }

            function play(userMove){
                const randomMove = moves[Math.floor(Math.random() * moves.length)];
                if(userMove === randomMove){
                    scores.ties += 1;
                    document.querySelector('#result').innerText = `You played ${userMove}. Computer played ${randomMove}. It's a TIE!`;
                    document.querySelector('body').style.backgroundColor="gray";
                    
                } else if((userMove==='rock' && randomMove==='scissor') ||
                          (userMove==='paper' && randomMove==='rock') ||
                          (userMove==='scissor' && randomMove==='paper')){
                    scores.wins += 1;
                    document.querySelector('#result').innerText = `You played ${userMove}. Computer played ${randomMove}. You WIN!`;
                    document.querySelector('body').style.backgroundColor="lightgreen";
                } else {
                    scores.losses += 1;
                    document.querySelector('#result').innerText = `You played ${userMove}. Computer played ${randomMove}. You LOOSE!`;
                    document.querySelector('body').style.backgroundColor="lightcoral";
                }
                saveScore();
                displayScore();
            };
            
            function resetScore(){
                scores.ties = 0;
                scores.wins = 0;
                scores.losses = 0;
                saveScore();
                displayScore();
                document.querySelector('body').style.backgroundColor="lightblue";
            }