

function generatePassword() {
    //建立四種密碼參數的定義
    const lowerCaseLetters= 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseLetters= lowerCaseLetters.toUpperCase()
    const numbers = '1234567890'
    const symbols = '`~!@#$%^&*()_+-=[]\{}|:";<>,./?'

    const options = {
      length: '12',
      lowerCase: 'on',
      upperCase: 'on',
      numbers: 'on',
      symbols: 'on',
      excludedCharacters: '1234'
    }

    //根據使用者勾選設定參數進入抽選箱
    let drawBox = []

    if (options.lowerCase === 'on') {
      drawBox = drawBox.concat(lowerCaseLetters.split(''))
    }

    if (options.upperCase === 'on') {
      drawBox = drawBox.concat(upperCaseLetters.split(''))
    }

    if (options.numbers === 'on') {
      drawBox = drawBox.concat(numbers.split(''))
    }

    if (options.symbols === 'on') {
      drawBox = drawBox.concat(symbols.split(''))
    }
    
    if (options.excludedCharacters) {
      drawBox = drawBox.filter((character) => {
        return !options.excludedCharacters.includes(character)
      })
    }
    console.log(drawBox)
  }

  generatePassword()