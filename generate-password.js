function generatePassword (options) {
  // 宣告密碼是空字串
  let password = ''

  // 建立四種密碼參數的定義
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@#$%^&*()_+-=[]\{}|:";<>,./?'

  // 根據使用者勾選設定參數進入抽選箱
  let collection = []

  if (options.lowerCase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.upperCase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  if (options.excludedCharacters) {
    collection = collection.filter((character) => {
      return !options.excludedCharacters.includes(character)
    })
  }

  // 處理錯誤條件
  if (options.length < 4 || options.length > 16 || options.passwordLength === '') {
    password = 'Please enter the correct password length.'
    return password
  }

  if (options.lowerCase !== 'on' && options.upperCase !== 'on' && options.numbers !== 'on' && options.symbols !== 'on') {
    password = 'Please select at least one option.'
    return password
  }

  if (collection.length === 0) {
    password = 'Please enter the valid password length/options.'
    return password
  }

  // 根據使用者需求抽密碼
  for (let i = 1; i <= options.passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * collection.length)
    password += collection[randomIndex]
  }
  return password
}

module.exports = generatePassword
