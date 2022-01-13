import React from 'react'
import './Checkout.css';

function Checkout() {
    return (
        <div className='checkout'>
            <div className='chekout__left'>
                <img className='checkout__adv' src='https://images-eu.ssl-image-amazon.com/images/G/31/img20/Events/Jupiter21P1/play_stripe_desk.png' alt='adv' />
                <div>
                    <h3 className='checkout__title'>Your Shopping Details</h3>
                    {/*Cart Item Here */}
                    {/*Cart Item Here */}
                </div>
            </div>

            <div className='chekout__right'>
                    <h3>SubTotal (2 items):</h3>
            </div>
        </div>
    )
}

export default Checkout
