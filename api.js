const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/api', (req, res) => {
    const {id, sleep} = req.query

    if (!id || !sleep)
        return res.status(400).json({
            status: 'error',
            data: 'Required query parameters "id" or "sleep" not present in request.',
        })

    setTimeout(() => {
        res.json({
            status: 'ok',
            data: {id, sleep}
        })
    }, sleep)
})

app.listen(8765, () => console.log('API running on http://localhost:8765'))
