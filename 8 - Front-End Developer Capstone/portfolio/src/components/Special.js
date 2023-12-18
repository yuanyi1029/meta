import './Special.css';
import salad from '../assets/salad.jpg';
import bruschetta from '../assets/bruschetta.jpg';
import dessert from '../assets/dessert.jpg';

import Button from './Button';
import { Link } from 'react-router-dom';

function Special() {
  return (
    <section className="container special">
      <div className="special-header">
        <h2>This Week's Specials</h2>
        <Button link="/menu" text="Online Menu" />
      </div>
      
      <article className="special-card">
        <img src={ salad } alt="Greek Salad" />
        <div className="special-card-header">
          <h3>Greek Salad</h3><span>$12.99</span>
        </div>
        <div className="special-card-footer">
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our Chicago
            style feta cheese, garnished with crunchy garlic and rosemary croutons.
          </p>
          <Link to="/reservations">Order a delivery</Link>
        </div>
      </article>

      <article className="special-card">
        <img src={ bruschetta } alt="Bruschetta" />
        <div className="special-card-header">
          <h3>Bruschetta</h3><span>$5.99</span>
        </div>
        <div className="special-card-footer">
          <p>
            Our Bruschetta is made from grilled bread that has been 
            smeared with garlic and seasoned with salt and olive oil.
          </p>
          <Link to="/reservations">Order a delivery</Link>
        </div>
      </article>

      <article className="special-card">
        <img src={ dessert } alt="Lemon Dessert" />
        <div className="special-card-header">
          <h3>Lemon Dessert</h3><span>$5.00</span>
        </div>
        <div className="special-card-footer">
          <p>
            This comes straight from grandma's recipe book, every last ingredient
            has been sourced and is as authentic as can be imagined.
          </p>
          <Link to="/reservations">Order a delivery</Link>
        </div>
      </article>
    </section>
  )
}
  
export default Special;