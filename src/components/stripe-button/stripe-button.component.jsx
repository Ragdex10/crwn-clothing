import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publisshableKey = 'pk_test_sksnMqLJUYhatHa6iWcAFDX400e8sNbJuy';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');

    }

    return (
        <StripeCheckout 
           label='Pay Now'
           name='CRWN Clothing Ltd.'
           billingAddress
           shippingAddress
           image='https://sendeyo.com/up/d/f3eb2117da'
           description= {`Your total is $${price}`}
           amount={priceForStripe}
           panelLabel='Pay Now'
           token={onToken}
           stripeKey={publisshableKey}
        />
    )
}

export default StripeCheckoutButton;