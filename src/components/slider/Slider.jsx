import "./slider.css";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import {useState} from "react";



const  Slider = () =>{

  const [slideIndex,setSlideIndex] = useState(0)
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
} 
 
  
  return (
    <>
    <div className="SliderContainer">
        <div className="SliderArrow">
          
          <div className="ArrowRightOutlined" direction="right" onClick={()=> handleClick("right")}>
            <KeyboardDoubleArrowLeftIcon />
            
          </div>
          <img className="sliderImg" src="./assets/slider2.webp" alt=""/>
          <div className="sliderInfo">
          
            <h1 className="sliderTitle">SUMMER SALE</h1>
            <span className="sliderDesc">DON'T COMPROMISE ON STYLE ! GET FLAT 30%  OFF FOR NEW ARRIVALS.</span>
            <button className="sliderButton">SHOP NOW</button>
          </div>
          
          

          
          
          <div className="ArrowLeftOutlined" direction="left" onClick={()=> handleClick("left")}>
          
            <KeyboardDoubleArrowRightIcon />
          </div>
         
        </div>
        <div className="SliderContainerSecond">
         <div className="SliderArrow">
           
           <div className="ArrowRightOutlined" direction="right" onClick={()=> handleClick("right")}>
             <KeyboardDoubleArrowLeftIcon/>
             <img className="sliderImg" src="./assets/slider3.webp" alt=""/>
           </div>
           <div className="sliderInfo">
           
             <h1 className="sliderTitle">POPULAR SALE</h1>
             <span className="sliderDesc">DON'T COMPROMISE ON STYLE ! GET FLAT 30%  OFF FOR NEW ARRIVALS.</span>
             <button className="sliderButton">SHOP NOW</button>
           </div>
           
           
 
           
           
           <div className="ArrowLeftOutlined" direction="left" onClick={()=> handleClick("left")}>
           
             <KeyboardDoubleArrowRightIcon/>
           </div>
         </div>
         </div>
        </div>
        
    </>
  );
  };

export default Slider;