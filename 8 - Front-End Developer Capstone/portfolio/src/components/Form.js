import './Form.css';

import Button from './Button';

function Form() {
  return (
    <>
      <section className="container form">
        <h1>Table Reservation</h1>
        <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
          <div className="form-field">
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" />
          </div>

          <div className="form-field">
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time">
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" />
          </div>

          <div className="form-field">
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion">
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>

          <Button link="/submitted" text="Make Your Reservation" />
        </form>
      </section>
    </>
  )
}

export default Form;