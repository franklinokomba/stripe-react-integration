import React from 'react'
import { injectStripe, CardElement } from 'react-stripe-elements'
import { Container, Button } from 'reactstrap'
import axios from 'axios'
class CheckoutForm extends React.Component {
  state = {
    error: ''
  }
  handleSubmit = e => {
    e.preventDefault()

    const { stripe } = this.props
    if (stripe) {
      stripe.createToken().then(payload => {
        if (payload.error) {
          this.setState({ error: payload.error })
        } else {
          this.confirmSubscription(payload)
        }
      })
    } else {
      alert('Stripe is not connected')
    }
  }

  confirmSubscription = userData => {
    userData.plan = this.props.plan
    axios
      .post('/user/subscription', userData)
      .then(payload => {
        console.log('WE GOT FROM SERVER ', payload)
      })
      .catch(error => console.log(error))
  }

  render () {
    const { error } = this.state
    console.log(error)
    return (
      <>
        <Container>
          <div
            style={{ border: '1px solid black', padding: '10px', width: '50%' }}
          >
            <form onSubmit={this.handleSubmit}>
              <CardElement />
              {error && <p style={{ marginTop: '6px' }}>{error.message}</p>}
              <Button className='btn btn-success' style={{ margin: '10px' }}>
                Confirm order
              </Button>
            </form>
          </div>
        </Container>
      </>
    )
  }
}

export default injectStripe(CheckoutForm)
