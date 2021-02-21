// Получение случайного числа с плавающей запятой
// Максимум и минимум включаются
function getRandomFloatInt (min, max, decimalSymbols = 5) {
  const randomNum = (Math.random() * (max - min) + min).toFixed(decimalSymbols)
  return Math.abs(randomNum)
}
console.log(getRandomFloatInt(0, 6))

// Получение случайного целого числа
// Максимум и минимум включаются
function getRandomIntInclusive (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
  return Math.abs(randomNum)
}
console.log(getRandomIntInclusive(0, 8))

// Пример взят с Mozilla MDN Web Docs
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
