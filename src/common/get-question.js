const getRandomNumber = () => Math.floor(Math.random() * 100);

const getCalcOperation = () => {
  const operatorsList = ['+', '-', '*'];
  const customOperator = operatorsList[Math.floor(Math.random() * operatorsList.length)];
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  let result;
  if (customOperator === '+') {
    result = firstNumber + secondNumber;
  } else if (customOperator === '-') {
    result = firstNumber - secondNumber;
  } else {
    result = firstNumber * secondNumber;
  }

  return [`${firstNumber} ${customOperator} ${secondNumber}`, result];
};

const getGreatestCommonDivisor = () => {
  let firstNumber = getRandomNumber();
  let secondNumber = getRandomNumber();
  const numbers = `${firstNumber} ${secondNumber}`;
  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
    } else {
      secondNumber -= firstNumber;
    }
  }
  return [numbers, firstNumber];
};

const getQuestion = (gameType) => {
  let question;
  if (gameType === 'even') {
    question = getRandomNumber();
  } else if (gameType === 'calc') {
    question = getCalcOperation();
  } else if (gameType === 'gcd') {
    question = getGreatestCommonDivisor();
  }

  return question;
};

export default getQuestion;
