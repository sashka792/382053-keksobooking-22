// Получение случайного числа с плавающей запятой
// Максимум и минимум включаются
function getRandomFloatInt (min, max) {
  return Math.random() * (max - min) + min
}
console.log(getRandomFloatInt(2.3, 5.6))

// Получение случайного целого числа
// Максимум и минимум включаются
function getRandomIntInclusive (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(getRandomIntInclusive(1, 6))

// Пример взят с Mozilla MDN Web Docs
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
