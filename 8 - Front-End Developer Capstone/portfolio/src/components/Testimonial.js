import './Testimonial.css';
import customer from '../assets/customer.png';

function Testimonial() {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="testimonial-header">
          <h2>Testimonials</h2>
        </div>
        <div className="testimonial-cards">
          <article className="testimonial-card">
            <div className="testimonial-card-header">
              <img src={ customer } alt="Customer profile" />
              <h4>Sean Brown</h4>
            </div>
            <div className="testimonial-card-footer">
              <h5>5 Star Rating</h5>
              <blockquote>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                  eiusmod tempor incididunt ut labore et dolore magna aliqua."
                </p>
              </blockquote> 
            </div>
          </article>

          <article className="testimonial-card">
            <div className="testimonial-card-header">
              <img src={ customer } alt="Customer profile" />
              <h4>Natalie Smith</h4>
            </div>
            <div className="testimonial-card-footer">
              <h5>5 Star Rating</h5>
              <blockquote>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                  eiusmod tempor incididunt ut labore et dolore magna aliqua."
                </p>
              </blockquote> 
            </div>
          </article>

          <article className="testimonial-card">
            <div className="testimonial-card-header">
              <img src={ customer } alt="Customer profile" />
              <h4>Steven Wright</h4>
            </div>
            <div className="testimonial-card-footer">
              <h5>5 Star Rating</h5>
              <blockquote>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                  eiusmod tempor incididunt ut labore et dolore magna aliqua."
                </p>
              </blockquote> 
            </div>
          </article>

          <article className="testimonial-card">
            <div className="testimonial-card-header">
              <img src={ customer } alt="Customer profile" />
              <h4>Natasha Stern</h4>
            </div>
            <div className="testimonial-card-footer">
              <h5>5 Star Rating</h5>
              <blockquote>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                  eiusmod tempor incididunt ut labore et dolore magna aliqua."
                </p>
              </blockquote> 
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Testimonial;