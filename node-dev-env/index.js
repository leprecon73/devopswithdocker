const express = require('express')
const app = express()

const helpMsg = "Use: plus, minus, multiple or divide in query."

const plus = (x, y) => {
  return x + y
}

app.get('/plus', (req, res) => {
  const { x, y } = req.query
  if (!x || !y) return res.send('Add x and y as query parameters')

  const solution = plus(Number(x), Number(y))
  res.send("Solution is " + solution + '<br/>' + helpMsg)
})

const minus = (x, y) => {
  return x - y
}

app.get('/minus', (req, res) => {
  const { x, y } = req.query
  if (!x || !y) return res.send('Add x and y as query parameters')

  const solution = minus(Number(x), Number(y))
  res.send("Solution is " + solution + '<br/>' + helpMsg)
})

const multiple = (x, y) => {
  return x * y
}

app.get('/multiple', (req, res) => {
  const { x, y } = req.query
  if (!x || !y) return res.send('Add x and y as query parameters')

  const solution = multiple(Number(x), Number(y))
  res.send("Solution is " + solution + '<br/>' + helpMsg)
})

const divide = (x, y) => {

  if (y == 0)
    return "Almost infinity, but NaN."
  else
    return x / y
}

app.get('/divide', (req, res) => {
  const { x, y } = req.query
  if (!x || !y) return res.send('Add x and y as query parameters')

  const solution = divide(Number(x), Number(y))
  res.send("Solution is " + solution + '<br/>' + helpMsg)
})



app.get('*', function (_req, res) {
  res.redirect('/plus?x=5&y=2')
})

app.listen(3000, () => {
  console.log('App listening in port 3000')
})
