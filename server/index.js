const express = require('express')
const bodyParser = require('body-parser')
const stripe = require('stripe')('Your API KEY')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/user/subscription', function (req, res) {
  res.json({ message: 'Hello world' })
})

app.post('/user/subscription', function (req, res) {
  const data = req.body
  // Create customer

  stripe.customers.create(
    {
      source: data.token.id // obtained with Stripe.js
    },
    function (err, customer) {
      // asynchronously called
      if (err) {
        console.log('The following error happened')
        console.log(error)
        return res.status(400).json({ error: 'Your customer creation failed' })
      } else {
        stripe.subscriptions.create(
          {
            customer: customer.id,
            items: [
              {
                plan: data.plan
              }
            ]
          },
          function (err, subscription) {
            // asynchronously called
            if (err) {
              console.log('The Subscription error happened')
              console.log(error)
              return res.status(400).json({ error: 'Your subscription failed' })
            } else {
              console.log('The Subscription Was successful')
              console.log(subscription)
              return res.json({ message: 'Your subscription was successful' })
            }
          }
        )

        console.log('Stripe returned ', customer)
      }
    }
  )
})

app.listen(5000, function () {
  console.log('Server is listening on port ', 5000)
})
