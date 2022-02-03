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

const getQuestion = (gameType) => {
  let question;
  if (gameType === 'even') {
    question = getRandomNumber();
  } else if (gameType === 'calc') {
    question = getCalcOperation();
  }

  return question;
};

export default getQuestion;
