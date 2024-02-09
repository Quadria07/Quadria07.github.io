let score = JSON.parse(localStorage.getItem('score')) || { 
  Won: 0,
  Losses: 0,
  Ties: 0,
};

  updatescoreElement();
/*   if (!score) {
    score={
      Won: 0,
      Losses: 0,
      Ties: 0,
    };
  }
*/
  function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3){
       computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
       computerMove = 'Paper';
    } else if (randomNumber >= 2/3 && randomNumber <= 1){
       computerMove = 'Scissors';
    }

    return computerMove;
  }

  let isAutoplaying = false;
  let intervalId;

  //const autoplay = () => {}

  function autoplay(){
    if (!isAutoplaying) {
      intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoplaying = true;
    } else {
      clearInterval(intervalId);
      isAutoplaying = false;
    }
  }


  document.querySelector('.js-rock-button').addEventListener('click', () =>  {
    playGame('Rock');
  })

  document.querySelector('.js-paper-button').addEventListener('click', () =>  {
    playGame('Paper');
  })

  document.querySelector('.js-Scissors-button').addEventListener('click', () =>  {
    playGame('Scissors');
  })


  document.body,addEventListener('keydown', (event) => {
    if (event.key === 'r' ) {
      playGame('Rock');
    } else if (event.key === 'p') {
      playGame('Paper')
    } else if (event.key === 's') {
      playGame('Scissors')
    }
  });

  function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'Rock') {
      if (computerMove === 'rock'){
        result = 'Tie.';
      } else if (computerMove === 'Paper'){
        result = 'You Lose.';
      } else if (computerMove === 'Scissors'){
        result = 'You Won.';
      }
    } else if (playerMove === 'Paper'){
      if (computerMove === 'rock'){
        result = 'You Won.';
      } else if (computerMove === 'Paper'){
        result = 'Tie.';
      } else if (computerMove === 'Scissors'){
        result = 'You Lose.';
      }
    } else if (playerMove === 'Scissors') {
      if (computerMove === 'rock'){
        result = 'You Lose.';
      } else if (computerMove === 'Paper'){
        result = 'You Won.';
      } else if (computerMove === 'Scissors'){
        result = 'Tie.';
      }
    }

    if (result === 'You Won.'){
      score.Won += 1;
    } else if (result === 'You Lose.') {
      score.Losses += 1;
    } else if (result === 'Tie.') {
      score.Ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updatescoreElement();

    document.querySelector('.js-result').
    innerHTML = result;

    document.querySelector('.js-moves').innerHTML
    = `   YOU
    <img src="${playerMove}" class="move-icon">
    <img src="image/${computerMove}" class="move-icon">
  COMPUTER`;
  }
 
function updatescoreElement() {
  document.querySelector('.js-score')
      .innerHTML = `WINS: ${score.Won}, LOSSES: ${score.Losses}, TIE: ${score.Ties}`;
}