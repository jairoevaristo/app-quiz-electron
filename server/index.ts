import express from 'express'

const app = express()

app.get('/', (req, res) => {
  return res.json({ message: 'Hello Word' })
})

export function startServer() {
  app.listen(3001, () => console.log('Server is runnig'))
}
