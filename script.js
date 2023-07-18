'use strict';

// console.log("hello world");
//  const year = +prompt("Descubra se o ano é bissexto! Digiteo ");

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//    alert(`${year} é um ano bissexto! `);
//   console.log(`${year} é um ano bissexto! `);
// } else {
//    alert(`${year} não é um ano bissexto!`);
//   console.log(`${year} não é um ano bissexto!`);
// }

const checkBoxBtn = document.querySelector('.check-box-btn');
const checkBoxContent = document.querySelector('.check-box');
const result = document.querySelector('.show-result');
const yearContent = document.querySelector('.year-content');
const nearestYears = document.querySelector('.nearest-years');
const afterResult = document.querySelector('.after-result');

const bissextTest = function (e) {
  e.preventDefault();

  const year = +checkBoxContent.value;
  if (typeof year != 'number') alert('Digite um número válido!');

  console.log(year);

  let html = `${year - 4} - <a class="actual-year">${year}<a/> - ${year + 4}`;

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    nearestYears.textContent = '';
    yearContent.textContent = `${year}`;
    result.textContent = `é um ano bissexto! `;
    afterResult.classList.remove('hidden');
    nearestYears.insertAdjacentHTML('afterbegin', html);
  } else {
    afterResult.classList.add('hidden');
    yearContent.textContent = `${year}`;
    result.textContent = `não é um ano bissexto!`;
  }

  checkBoxContent.value = '';
};

//////////////

checkBoxContent.addEventListener('keypress', function (e) {
  const keyCode = e.keyCode ? e.keyCode : e.witch;
  console.log(keyCode);
  console.log(e.key);

  if (!(keyCode > 47 && keyCode < 58)) {
    e.preventDefault();
  }

  if (e.key === 'Enter') bissextTest(e);
});

checkBoxBtn.addEventListener('click', bissextTest);
