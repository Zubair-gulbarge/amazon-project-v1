import React from 'react'
import './Subtotal.css'

function Subtotal() {
    return (
        <div className='subtotal'>
            <p>Subtotal (o item): <strong>0</strong> </p>
            <small className='subtotal__gift'>
                <input type="checkbox" />This Order contains Gift
            </small>

            <button>Proceed to Buy</button>
        </div>
    )
}

export default Subtotal
