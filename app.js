const express = require('express')
const { engine } = require ('express-handlebars')

const app = express()
const port = 3000
const generatePassword = require('./generate-password')

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');
app.use(express.static('public')) // 載入靜態檔案，包含Bootstrap的CSS和JS
app.use(express.urlencoded({ extended: true })) // 使用此行來請求網址中獲取表單資料,否則就會回傳undefined的表單資料。


app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req,res) => {
  const options = req.body
  console.log(options)
  const password = generatePassword(options)
  res.render('index', { password, options })
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})
