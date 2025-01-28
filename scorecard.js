const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes/routes')
app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.render('scorecard')
// })

// routes
app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

