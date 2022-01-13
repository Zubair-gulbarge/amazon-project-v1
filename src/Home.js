import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://m.media-amazon.com/images/I/71HOw6RySlL._SX3000_.jpg' alt=''></img>
       
                <div className='home__row'>
                <Product 
                    id='01'
                    title='See U in C by Ali Karim Sayed (Author)'
                    price={4450}
                    image='https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg'
                  />
                <Product 
                    id='02'
                    title='OnePlus Smart Band'
                    price={2799}
                    image='https://m.media-amazon.com/images/I/61XPTRJZcCL._SL1500_.jpg'
                  />
                <Product 
                    id='03'
                    title='Apple iPhone 13 Pro Max (256GB) - Sierra Blue'
                    price={139900}
                    image='https://m.media-amazon.com/images/I/61i8Vjb17SL._SL1500_.jpg'
                />
                </div>
                <div className='home__row'>
                <Product 
                   id='04'
                   title='GoPro HERO10 Black - Waterproof Action Camera with Front LCD and Touch Rear Screens'
                   price={54500}
                   image='https://m.media-amazon.com/images/I/515vnoAN3vL._SL1500_.jpg'
                />
                <Product 
                    id='05'
                    title='Home Centre Faith Fabric Three Seater Sofabed Mocha (Brown)'
                    price={29950}
                    image='https://m.media-amazon.com/images/I/61ssKz7asML._SX522_.jpg'
                />
                </div>
                <div className='home__row'>
                <Product 
                    id='06'
                    title='METRO TOY GIFT Metal Lamborghini Centenario '
                    price={880}
                    image='https://m.media-amazon.com/images/I/61cVpXtoQiL._SL1500_.jpg'
                />
                </div>

            </div>
        </div>
    )
}

export default Home
