import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IK1i7F6pqWlQ6BCrqVUEiFx8X2CBuSkkayDs4RiAHvyWXvrHb6hyTKWtWeMbVPhPWzsK3KlsAYpROOoni5IZ5A200PnZ06IQS'

  const onToken = (token) => {
    console.log(token)
    alert('Payment Succesful!')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='E-shop Global'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton