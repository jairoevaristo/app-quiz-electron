import express from 'express'

type urlHashProps = {
  hash_link: string
}

const app = express()
const urlHash: urlHashProps[] = []

app.get('/', (req, res) => {
  const range = 'fjdsfhurhbvcvfewreruefdsdsffyrwur8rsdfsdfsd'
  let hash = ''

  for (let i = 0; i < 7; i++) {
    const randomCharAt = Math.floor(Math.random() * range.length)
    hash += range.charAt(randomCharAt)
  }
  urlHash.push({ hash_link: hash })
  return res.json({ message: `http://localhost:3001/${hash}` })
})

app.get('/:hash', (req, res) => {
  const { hash } = req.params

  const isUrl = urlHash.find(item => {
    return item.hash_link === hash
  })

  if (!isUrl?.hash_link) {
    return res.status(404).json({ message: 'error 404' })
  }

  return res.redirect('/home/questions')
})

app.get('/home/questions', (req, res) => {
  return res.json({ questiosn: urlHash })
})

export function startServer() {
  app.listen(3001, () => console.log('Server is running'))
}
