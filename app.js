function stripe() {
    var stripe = Stripe('pk_test_funFMh2Oj5bXDHsLKF6ghe5I004LfiZ5OZ');

    var checkoutButton = document.getElementById('checkout-button-sku_HFUoUjbIDgNTLI');
    checkoutButton.addEventListener('click', function () {
        // When the customer clicks on the button, redirect
        // them to Checkout.
        stripe.redirectToCheckout({
                items: [{
                    sku: 'sku_HFUoUjbIDgNTLI',
                    quantity: 1
                }],

                // Do not rely on the redirect to the successUrl for fulfilling
                // purchases, customers may not always reach the success_url after
                // a successful payment.
                // Instead use one of the strategies described in
                // https://stripe.com/docs/payments/checkout/fulfillment
                successUrl: 'https://www.google.com',
                cancelUrl: 'https://www.youtube.com',
            })
            .then(function (result) {
                if (result.error) {
                    // If `redirectToCheckout` fails due to a browser or network
                    // error, display the localized error message to your customer.
                    var displayError = document.getElementById('error-message');
                    displayError.textContent = result.error.message;
                }
            });
    });
};

document.addEventListener("DOMContentLoaded", stripe)