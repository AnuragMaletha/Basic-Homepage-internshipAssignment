import React from 'react';
import './testimonials.css';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO, XYZ Company',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac risus eget nisl tincidunt aliquet. Ut ut turpis eu justo vestibulum volutpat ac vitae lorem.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Marketing Manager, ABC Inc.',
      quote:
        'Praesent eget risus eget nunc placerat fringilla. Proin in ullamcorper purus. Integer luctus sapien id congue blandit. Sed aliquam elit sit amet augue posuere, eget aliquam elit feugiat.',
    },
  ];

  return (
    <div className="testimonial-container">
      <video autoPlay muted loop className="video-background">
        <source src="https://media.istockphoto.com/id/1279243899/video/clean-soft-and-shiny-background-animation-abstract-simple-circle-beatiful-motion-design-the.mp4?s=mp4-640x640-is&k=20&c=9yyOm-Tby1J-8-svwlgEckfAXBtYYGibmxhBOHIRYmg=" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="testimonial-content">
        <h2>Testimonials</h2>
        {testimonials.map((testimonial) => (
          <div className="testimonial" key={testimonial.id}>
            <p className="quote">{testimonial.quote}</p>
            <div className="info">
              <p className="name">{testimonial.name}</p>
              <p className="role">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
