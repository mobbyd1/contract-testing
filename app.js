import createError from 'http-errors'
import express from 'express'
import logger from 'morgan'

import swaggerUi from 'swagger-ui-express'

import indexRouter from './routes/index'
import apiDocs from './swagger/api-test.json'

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocs));

app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send('error')
})

app.listen(8080, () =>
  console.log(`Example app listening on port 8080!`)
)

