import StripeCheckout from 'react-stripe-checkout'



const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100

    const publishableKey = 'pk_test_51I3l4fAiYyH79hmLErx3M50JaSXjH4kwkN6etDDPDSXJeF0LU1Ztj6mdCeUg0BdWP4q0yZN1k3VrBnJJflgf3NjW00NprkUVsb'

    const onToken = token => {
        alert('Payment successfull')
    }

    return(
        <StripeCheckout
        label='Pay Now'
        name='Ecommerce Pvt Ltd'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total price is ${price}`}
        amount = {priceForStripe}
        panelLabel='Pay Now'
        token = {onToken}
        stripeKey={publishableKey}
      
        />
    )
}

export default StripeCheckoutButton