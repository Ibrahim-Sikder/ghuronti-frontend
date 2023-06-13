import React from 'react'
import './Review.css'
import Slider from "react-slick";
const Review = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className="reviewMain">
         <h1 className="trending">Customer satisfaction is our top priority</h1>
                    <p className="bestPlacePara">
                    Our clients praise us for our great results, personable service, <br /> expert knowledge. Here are what just a few of them had to say
                    </p>
        <div>
        <Slider {...settings}>
          <div className="reviewFirstSlide">
            <h3>Your thoughtfulness and support of Ghuronti is very much appreciated. <br /> You are a very dear friend to the Chamber, and I want to assure you that <br /> your confidence in Ghuronti will be justified.</h3>
          </div>
          <div className="reviewFirstSlide">
            <h3>Your thoughtfulness and support of Ghuronti is very much appreciated. <br /> You are a very dear friend to the Chamber, and I want to assure you that <br /> your confidence in Ghuronti will be justified.</h3>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Review
