import React from 'react'
import "./Home.css";
import Product from '../../components/Product/Product';

function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='' />
        <div className="home__row">
          <Product
            id="12321341"
            title='The Lean Startup: How Contant Innovation Creates Radically Successful Business Paperback'
            price={11.96} 
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
          />
          <Product
            id="49538094"
            title='Kenwood KMC011 5 Quart Chef Titanium Kitchen Machine, Stainless Steel' 
            price={455.95} 
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/81FgudLSgPL._AC_SL1500_.jpg'
          />
        </div>
        <div className="home__row">
          <Product
            id="49538095"
            title='All-new Echo Dot (4th Gen) | Smart speaker with Alexa | Charcoal' 
            price={28.99} 
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg'
          />
          <Product
            id="49538096"
            title='Bose SoundLink Around Ear Wireless Headphones II - Black' 
            price={159.00} 
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/71jDdUuRi8L._AC_SL1500_.jpg'
          />
          <Product
            id="49538097"
            title="Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminium Case with Black Sport Band"
            price={179.00} 
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_SL1500_.jpg'
          />
        </div>
        <div className="home__row">
            <Product
              id="49538098"
              title="Men's Vapor Glove 3 Trail Runner"
              price={74.95} 
              rating={5}
              image='https://m.media-amazon.com/images/I/7123Xz-1W2L._AC_UL640_FMwebp_QL65_.jpg'
            />
        </div>
      </div>
    </div>
  )
}

export default Home;


  

