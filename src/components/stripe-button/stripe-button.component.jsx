import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const onToken = token => {
    console.log ("Payment successful");
}

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IrqbvA55oo7T6LDzGOTTYqgGxZ3wU2BEIK7xiHSVQkG8cS7fboYpVQpxXHz93dMkg7nFICLTDNdHIYY9vrqIkVQ00xRMOTPsb';

    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;