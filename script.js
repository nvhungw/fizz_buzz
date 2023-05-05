// In ra số từ 1 -> 100. Nếu số chia hết cho 3 thì in ra "Fizz". Nếu số chia hết cho 5 thì in ra "Buzz". Nếu chia hết cho cả 3 và 5 thì in ra "FizzBuzz"

let n = 100;
const FIRST_NUMBER = 3;
const SECOND_NUMBER = 5;
const FIZZ = 'FIZZ';
const BUZZ = 'BUZZ';
const FIZZ_BUZZ = 'FIZZBUZZ';

// function renderUseFor()
// {
//   for (let index = 1; index <= n; index++)
//   {
//     let message = index;
//     let divForFirstNumber = index % FIRST_NUMBER;
//     let divForSecondNumber = index % SECOND_NUMBER;
//     if (divForFirstNumber == 0 && divForSecondNumber == 0)
//     {
//       message = FIZZ_BUZZ;
//     }
//     else if (divForFirstNumber == 0)
//     {
//       message = FIZZ;
//     }
//     else if (divForSecondNumber == 0)
//     {
//       message = BUZZ;
//     }
//     document.write(`${message} </br>`)
//   }
// }
// renderUseFor()

function renderUseWhile() {
  let index = 1;

  while (index <= n) {
    let message = index;
    let divForFirstNumber = index % FIRST_NUMBER;
    let divForSecondNumber = index % SECOND_NUMBER;
    switch (true) {
      case divForFirstNumber == 0 && divForSecondNumber == 0:
        message = FIZZ_BUZZ;
        break;
      case divForFirstNumber == 0:
        message = FIZZ;
        break;
      case divForSecondNumber == 0:
        message = BUZZ;
        break;
    }
    document.write(`${message} </br>`);
    index++;
  }
}
renderUseWhile();
