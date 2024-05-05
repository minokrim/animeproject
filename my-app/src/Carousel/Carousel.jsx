import React from 'react';
import './Carousel.css'
import { Carousel } from 'react-bootstrap';
import Image1 from '../img/Black-Clover.jpg';
import Image2 from '../img/Code-Geass.jpg';
import Image3 from '../img/Solo-Leveling.jpg';

const MyCarousel = () => {
  return (
   
    <Carousel className='mb-2'>
      
        
        <Carousel.Item  >
          <img className="images" /* style={{width:'100vh', height:'50vh'}} */
            src={Image1}
            alt=''
            
          />
          <Carousel.Caption>
            
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img className="images" /* style={{width:'100vh', height:'50vh'}} */
            src={Image2}
            alt=''
          />
          <Carousel.Caption>
            
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img className="images" /* style={{width:'100vh', height:'50vh'}} */
            src={Image3}
            alt=''
          />
          <Carousel.Caption>
            
            
          </Carousel.Caption>
        </Carousel.Item>
      
    </Carousel>
    
  );
};

export default MyCarousel;