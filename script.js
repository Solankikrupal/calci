
/*code by Krupal Solanki
krplsolanki@gmail.com*/



const toggleSlide = document.querySelector('.toggleSlide');

const toggle1 = document.querySelector('.toggle1');
const toggle2 = document.querySelector('.toggle2');
const toggle3 = document.querySelector('.toggle3');

const topContainer = document.querySelector('.topContainer');
const logo = document.querySelector('.logo');
const themeNumber = document.querySelectorAll('.themeNumber span')
const toggleTextSpan = document.querySelector('.toggleTextSpan');
const toggleNav = document.querySelector('.toggleNav')
const calcScreen = document.querySelector('.calcScreen');
const calcKeyPad = document.querySelector('.calcKeyPad')
const btnStyle = document.querySelectorAll('.btnStyle')
const sbtn = document.querySelectorAll('.sbtn');
const ouputBtn = document.querySelector('.ouputBtn')


toggle1.addEventListener('click', () => {
  toggleClass(toggleSlide, "theme1Active", 'theme2Active', 'theme3Active');
  toggleStyle("theme1Active")
})
toggle2.addEventListener('click', () => {
  toggleClass(toggleSlide, "theme2Active", 'theme1Active', 'theme3Active');
  toggleStyle("theme2Active");
})

toggle3.addEventListener('click', () => {
  toggleClass(toggleSlide, "theme3Active", 'theme1Active', 'theme2Active');
  toggleStyle("theme3Active")
})

function toggleClass(className, add, remove1, remove2) {
  className.classList.add(add);
  className.classList.remove(remove1);
  className.classList.remove(remove2);
}




function toggleStyle(className) {

  if (className == 'theme1Active') {
    changeTo('theme1')
  } else if (className == 'theme2Active') {
    changeTo('theme2')
  } else if (className == 'theme3Active') {
    changeTo('theme3')
  }
}

function changeTo(theme) {
  switch (theme) {
    case 'theme1':
      toggleClass(topContainer, 'theme1BG', 'theme2BG', 'theme3BG');
      toggleClass(logo, 'theme1Logo', 'theme2Logo', 'theme3Logo');
      themeNumber.forEach((number) => {
        toggleClass(number, 'theme1fontColor', 'theme2fontColor', 'theme3fontColor');
      })
      toggleClass(toggleTextSpan, 'theme1fontColor', 'theme2fontColor', 'theme3fontColor')
      toggleClass(toggleSlide, "theme1toggleSlide", 'theme2toggleSlide', 'theme3toggleSlide');
      toggleClass(toggleNav, "theme1toggleNav", 'theme2toggleNav', 'theme3toggleNav');
      toggleClass(calcScreen, 'theme1Screen', 'theme2Screen', 'theme3Screen');
      toggleClass(calcKeyPad, 'theme1KeyPad', 'theme2KeyPad', 'theme3KeyPad');
      btnStyle.forEach((btn) => {
        toggleClass(btn, 'them1KeyNtn', 'them2KeyNtn', 'them3KeyNtn');
      })
      sbtn.forEach((btn) => {
        toggleClass(btn, 'theme1ThirdKeyNtn', 'theme2ThirdKeyNtn', 'theme3ThirdKeyNtn');
      })
      toggleClass(ouputBtn, 'them1SecondaryKeyNtn', 'them2SecondaryKeyNtn', 'them3SecondaryKeyNtn');
      break



    case 'theme2':
      toggleClass(topContainer, 'theme2BG', 'theme1BG', 'theme3BG');
      toggleClass(logo, 'theme2Logo', 'theme1Logo', 'theme3Logo');
      themeNumber.forEach((number) => {
        toggleClass(number, 'theme2fontColor', 'theme1fontColor', 'theme3fontColor');
      })
      toggleClass(toggleTextSpan, 'theme2fontColor', 'theme1fontColor', 'theme3fontColor');
      toggleClass(toggleSlide, "theme2toggleSlide", 'theme1toggleSlide', 'theme3toggleSlide');
      toggleClass(toggleNav, "theme2toggleNav", 'theme1toggleNav', 'theme3toggleNav');
      toggleClass(calcScreen, 'theme2Screen', 'theme1Screen', 'theme3Screen');
      toggleClass(calcKeyPad, 'theme2KeyPad', 'theme1KeyPad', 'theme3KeyPad');
      btnStyle.forEach((btn) => {
        toggleClass(btn, 'them2KeyNtn', 'them1KeyNtn', 'them3KeyNtn');
      })
      sbtn.forEach((btn) => {
        toggleClass(btn, 'theme2ThirdKeyNtn', 'theme1ThirdKeyNtn', 'theme3ThirdKeyNtn');
      })
      toggleClass(ouputBtn, 'them2SecondaryKeyNtn', 'them1SecondaryKeyNtn', 'them3SecondaryKeyNtn');
      break



    case 'theme3':
      toggleClass(topContainer, 'theme3BG', 'theme1BG', 'theme2BG');
      toggleClass(logo, 'theme3Logo', 'theme1Logo', 'theme2Logo');
      themeNumber.forEach((number) => {
        toggleClass(number, 'theme3fontColor', 'theme1fontColor', 'theme2fontColor');
      })
      toggleClass(toggleTextSpan, 'theme3fontColor', 'theme1fontColor', 'theme2fontColor');
      toggleClass(toggleSlide, "theme3toggleSlide", 'theme1toggleSlide', 'theme2toggleSlide');
      toggleClass(toggleNav, "theme3toggleNav", 'theme1toggleNav', 'theme2toggleNav');
      toggleClass(calcScreen, 'theme3Screen', 'theme1Screen', 'theme2Screen');
      toggleClass(calcKeyPad, 'theme3KeyPad', 'theme1KeyPad', 'theme2KeyPad');
      btnStyle.forEach((btn) => {
        toggleClass(btn, 'them3KeyNtn', 'them1KeyNtn', 'them2KeyNtn');
      })
      sbtn.forEach((btn) => {
        toggleClass(btn, 'theme3ThirdKeyNtn', 'theme1ThirdKeyNtn', 'theme2ThirdKeyNtn');
      })
      toggleClass(ouputBtn, 'them3SecondaryKeyNtn', 'them1SecondaryKeyNtn', 'them2SecondaryKeyNtn');
      break
  }

}

const output = document.querySelector('.output');
const addBtn = document.querySelector('.addBtn');
const minusBtn = document.querySelector('.minusBtn');
const multipyBtn = document.querySelector('.multipyBtn');
const divideBtn = document.querySelector('.divideBtn ');
const numberBtn = document.querySelectorAll('.number');
const delBtn = document.querySelector('.delBtn')
const resetBtn = document.querySelector('.resetBtn')
var x = '';
var first;
var second;
var answer = 0;
var op = ''
numberBtn.forEach((btn) => {

  btn.addEventListener('click', () => {

    x = x + btn.innerHTML;

    if (x.length > 10) {
      calcScreen.style.overflowX = 'scroll';
    }



    output.innerHTML = x;

  })


})
resetBtn.addEventListener('click', () => {
  first = ''
  second = ''
  op = ''
  output.innerHTML = '0';
})
delBtn.addEventListener('click', () => {
  x = x.slice(0, x.length - 1);
  output.innerHTML = x;
})
addBtn.addEventListener('click', () => {
  first = Number(x);
  x = ''
  output.innerHTML = '+'
  op = '+'
})

minusBtn.addEventListener('click', () => {
  first = Number(x);
  x = ''
  output.innerHTML = '-'
  op = '-'
})
multipyBtn.addEventListener('click', () => {
  first = Number(x);
  x = ''
  output.innerHTML = '*'
  op = '*'
})
divideBtn.addEventListener('click', () => {
  first = Number(x);
  x = ''
  output.innerHTML = '/'
  op = '/'
})
ouputBtn.addEventListener('click', () => {
  second = Number(x);
  x = ''
  operate(first, second, op)
})

function operate(x, y, proff) {

  switch (op) {
    case '+':
      x = x + y;
      output.innerHTML = x;
      break;
    case '-':
      x = x - y;
      output.innerHTML = x;
      break;
    case '*':
      x = x * y;
      output.innerHTML = x;
      break;
    case '/':
      x = x / y;
      output.innerHTML = x;
      break;
  }

}
