import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

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
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
