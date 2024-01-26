import "./testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials__left">
        <img src="/assets/chef-image.png" alt="Chef" />
        <img src="/assets/our-best-chef.png" alt="" />
      </div>
      <div className="testimonials__right">
        <span className="testimonial__heading">TESTIMONIALS</span>

        <span className="testimonial__sub--heading">
          What Our Customers Say About Us
        </span>

        <span className="testimonial__text">
          “I had the pleasure of dining at Foodi last night, and I&rsquo;m still
          raving about the experience! The attention to detail in presentation
          and service was impeccable”
        </span>

        <div className="testimonial__right--bottom">
          <div className="testimonial__right--bottom__left">
            <img src="/assets/testimonial-img-1.png" alt="" />
            <img src="/assets/testimonial-img-2.png" alt="" />
            <img src="/assets/testimonial-img-3.png" alt="" />
          </div>
          <div className="testimonial__right--bottom__right">
            <div className="testimonial__right--bottom__right__top">
              Customer Feedback
            </div>
            <div className="testimonial__right--bottom__right__bottom">
              <span>
                <img src="/assets/full-star-icon.png" alt="" />
                <span>4.9</span>
              </span>

              <span>(18.6k reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
