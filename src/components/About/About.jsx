import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import Others from '../Shared/OtherPage/Others'
import './About.css'
import dan from '../../images/team1.png'
import dan1 from '../../images/team2.png'
import dan2 from '../../images/team3.png'
import dan3 from '../../images/team4.png'
import Review from '../Shared/Review/Review'
import Footer from '../Shared/Footer/Footer';

const About = () => {
  const data = [
    {
      name:'Dan REES',
      title:'Better Work Chief',
      image:dan,
    },
    {
      name:'Dan REES',
      title:'Better Work Chief',
      image:dan1,
    },
    {
      name:'Dan REES',
      title:'Better Work Chief',
      image:dan2,
    },
    {
      name:'Dan REES',
      title:'Better Work Chief',
      image:dan3,
    },
  ]
  return (

    <div>
      <Navbar />
      <Others />
      <div className="aboutHero">
        <div className="aboutMain">
          <h1>“The goal as a company is to have <br /> customer service that is not just the <br /> best but legendary.”</h1>
        </div>
      </div>
      <div className="owner">
        <div className="leftBOxOwener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={253}
            height={330}
            fill="none"

          >
            <path
              fill="#000"
              d="m227.448 224.718-49.914-32.444 18.818-34.499a54.995 54.995 0 0 0 6.696-26.257V76.904A76.765 76.765 0 0 0 126.281.137a76.767 76.767 0 0 0-76.767 76.767v54.614a54.995 54.995 0 0 0 6.695 26.257l18.818 34.499-49.914 32.444A54.643 54.643 0 0 0 .164 270.693v58.444h252.233v-58.444a54.634 54.634 0 0 0-24.949-45.975Zm3.016 82.486H22.097v-36.511a32.786 32.786 0 0 1 14.97-27.585l66.938-43.51-28.54-52.325a33.002 33.002 0 0 1-4.017-15.755V76.904a54.834 54.834 0 0 1 109.666 0v54.614a33 33 0 0 1-4.017 15.755l-28.54 52.325 66.939 43.51a32.785 32.785 0 0 1 14.968 27.585v36.511Z"
            />
          </svg>
        </div>
        <div className="rightBoxOwner">
          <div className="ownerBasicInfo">
            <h1>Kaji Ehsan</h1>
            <h5>Director</h5>
          </div>
          <p>THE Ghuronti GROUP HAS STARTED OPERATION AS A REAL ESTATE VENTURE KNOWN AS "Ghuronti" UNDER THE AEGIS OF THE GROUP'S FIRST CONCERN - THE EAST-WEST PROPERTY DEVELOPMENT (PVT) LTD IN 1987.</p>
        </div>
      </div>
      <div className="team">
        <h1>Our Team</h1>
        <p>At Better Work, we are driven by shared standards of excellence, <br /> guided by the same integrity, and motivated by a common <br /> ambition to improve lives.</p>
        <div className="teams">
        {
          data && data.map((item, index) =>(
            <div className="teamContainer">
              <img src={item.image} alt="" />
              <h2>{item.name}</h2>
              <h4>{item.title}</h4>
            </div>
          ))
        }
        </div>
      </div>
      <div className="missionContent">
        <h1>Our Mission &  Vision</h1>
        <p>Serving our customer, searching their entire satisfaction and providing  <br /> touristic services of quality, committing to the social, cultural and <br />environmental reality of our country.</p>
        <div className="missionMain">
        <div className="mission">
            <h1>Mission</h1>
            <p>Providing advanced <br /> travel solutions with <br /> great care and <br /> satisfaction.</p>
        </div>
        <div className="mission">
            <h1>Vision</h1>
            <p><span style={{color:'#4AB449'}}>Ghurtoni.com</span> is <br />  partnering with you <br /> to reach your dream <br /> destinations.</p>
        </div>
    </div>
      </div>
      <Review/>
      <Footer/>
    </div>
  )
}

export default About
