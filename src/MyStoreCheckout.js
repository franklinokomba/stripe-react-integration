import React from 'react'
import { Elements } from 'react-stripe-elements'

import InjectedCheckoutForm from './CheckoutForm'

class MyStoreCheckout extends React.Component {
  render () {
    const { plan } = this.props.location.subscription_plan
    return (
      <Elements>
        <InjectedCheckoutForm plan={plan} />
      </Elements>
    )
  }
}

export default MyStoreCheckout
