import React from 'react'
import Slider from "react-slick";
import './TreandingInternational.css'
import Dubai from '../../../images/dubai.png'
import Cinamone from '../../../images/cinnamon.png'
import Egypt from '../../../images/egypt.png'
import Europe from '../../../images/europe.png'

const TrendingInternational = () => {
    const data = [{
        name:'Dubai: The city of life',
        price: '27,500',
        duration:4, 
        image:Dubai
    },
    {
        name:'Cinnamon Dhonveli',
        price: '69,300',
        duration:4, 
        image:Cinamone
    },
    {
        name:'Egypt: Mysteries Desert',
        price: '35,200',
        duration:4,
        image:Egypt
    },
    {
        name:'Europe: The dream tour!',
        price:'67,100',
        duration:4, 
        image:Europe
    }]
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint:500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
        ]
      };
  return (
    <div className="treandingSlider">
          
         <Slider {...settings}>
        {
            data && data.map((item, index) => (
                <div className="packageBoxTwo" key={index}>
                    <div className="packageBoxMain">
                        <img src={item.image} alt="image" />
                        <p className="packageTitle">{item.name}</p>
                        <button className="daysButton">{item.duration} Days</button>
                        <p className="price"><span className="priceTile">Starts From</span> {item.price}TK</p>
                    <button className="detailsButton">View Details</button>
                    </div>
                </div>
            ))
        }
        </Slider>
    </div>
  )
}

export default TrendingInternational
