"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = (b**2) - 4 * a * c;
  if (d === 0) {
    arr[0] = -b / ( 2 * a )
  } else if ( d > 0 ) {
    arr[0] = (-b + (Math.sqrt(d)) ) / ( 2 * a );
    arr[1] = (-b - (Math.sqrt(d)) ) / ( 2 * a );

  } 
  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let arr = {
    percent:percent, 
    contribution:contribution, 
    amount:amount,
  }
  for ( let key of Object.keys(arr)) {
      if (arr[key] === '') {
      let span = window.mortageResult;
      let placeholder = document.getElementById(`${key}`)
      span.textContent = `Параметр ${placeholder.getAttribute('placeholder')}  не заполнен`
      return span.textContent
    } else if (!isFinite(arr[key])) {
      let span = window.mortageResult;
      let placeholder = document.getElementById(`${key}`)
      span.textContent = `Параметр ${placeholder.getAttribute('placeholder')} содержит неправильное значение ${arr[key]}`
      return span.textContent
    }
  };

  // Вариант проверки на пустую строку или не корректно заполненую от руководителя
  // if (isNaN(percent)) {
  //   return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  // } else if (isNaN(contribution)) {
  //   return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  // } else if (isNaN(amount)) {
  //   return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  // }
  
  let loanBody = parseInt(amount) - parseInt(contribution);
  let dateNow = Date.parse(new Date());
  let dateLoan = Date.parse(date);
  let loanTerm = Math.round((dateLoan - dateNow) / 1000 / 60 / 60 / 24 / 30.43);
  console.log(loanTerm)
  let interestRatePerMoonth = parseInt(percent) / 12 / 100;
  let loanPayment = (loanBody * (interestRatePerMoonth * (1 + interestRatePerMoonth) ** loanTerm /((1 + interestRatePerMoonth) ** loanTerm - 1)));

  totalAmount = Number((loanPayment * loanTerm).toFixed(2));
  
  // код для задачи №2 писать здесь
  console.log(typeof(totalAmount));
  return totalAmount;
}

