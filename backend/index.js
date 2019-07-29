const app = require('express')()
const db = require('./config/db')
const consign = require('consign')

// consign
consign()
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('/api')
  .then('./config/routes.js')
  .into(app)

// declare global variable
app.db = db

app.get('/', (req, res) => {
  res.status(200).send('Meu Backend!')
})

app.listen(3000, () => {
  console.log('Backend em execução...')
})
