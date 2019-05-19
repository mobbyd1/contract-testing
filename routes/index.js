import express from 'express'

const router = express.Router()

router.get('/videos', function(req, res, next) {
  res.send([
    { id: 'Express', description: null }
  ])
})

export default router
