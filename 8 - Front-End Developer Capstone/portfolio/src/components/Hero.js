import './Hero.css';
import restaurant_food from '../assets/restaurant_food.jpg';

import Button from './Button';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused 
            on a traditional recipes served with a model twist.
          </p>
          <Button link="/reservations" text="Reserve a Table" />
        </div>
        <img src={ restaurant_food } alt="Restaurant Food" className="hero-image"/>
      </div>
    </section>
  )
}

export default Hero;