import { useState, useEffect } from 'react';
import  Project  from './subComps/project';
import Spinoza20 from '../img/banner.jpeg'
import AICS from '../img/niewbouw.jpeg';
import BosTheater from '../img/bostheater.jpeg';
import WereldBurger from '../img/wereldburger.jpeg';
import SMuseum from '../img/slavernijmuseum.png';
import AMuseum from '../img/amuseum.jpeg';
import AFC from '../img/afc.jpeg';
import NWO from '../img/nwo.png'
function Projects() {
  const projectData= [
    [
      {
        image:Spinoza20,
        title:"Nieuwbouw Spinoza20first",

      },
      {
        image:AICS,
        title:"Nieuwbouw AICS",
        
      },
      {
        image:BosTheater,
        title:"Renovatie Bostheater",
        
      },
    ],
    [
      {
        image:WereldBurger,
        title:"Renovatie de Wereldburger",

      },
      {
        image:SMuseum,
        title:"Kwartiermaker Nationaal Slavernijmuseum",
        
      },
      {
        image:AMuseum,
        title:"Renovatie Amsterdam Museum",
        
      },
    ],
    [
      {
        image:AFC,
        title:"Sportpark Goed Genoeg & Clubgebouw AFC",

      },
      {
        image:NWO,
        title:"Verbouwing en Nieuwbouw Werven en Overslagpunten",
        
      },
      {
        image:Spinoza20,
        title:"Nieuwbouw AICS",
        exist:false
      },
    ],
    

    
  ]
  const critical = 0.66;
  const modifier = 0.33;
  const [hovered, setHover] = useState(false);
  const [currentSlide, setSlide] = useState(0);




  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (!hovered) {
      // Start automatic sliding
      intervalId = setInterval(slide, 3000); // Change slide every 3 seconds (adjust as needed)
    }

    return () => {
      // Clear the interval when the component is unmounted or the automatic sliding is paused
      clearInterval(intervalId);
    };
  }, [hovered]);

  

  const slide = () => {
    setSlide((prevCurrentSlide) => {
      const newSlide = prevCurrentSlide + modifier;
  
      if (newSlide >= 0.99) {
        
        return 0;
      }
  
      return newSlide;
    });
  };
  

  const handleHover = (hovering:boolean)=>{

    if(hovering){
      setHover(true)
    }
    else{
      setHover(false)
    }
  }

  return (
    <section className='Projects'>
        <h2 className='Projects__title'>Onze Projecten</h2>
        <div className='Projects__wrapper'
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
        >
          {projectData.map((title, index) => (
            <ul className='Projects__projects'>
              {projectData[index].map((item, index) => (
                <li
                  onMouseEnter={()=>{handleHover(true)}}
                  onMouseLeave={()=>{handleHover(false)}} 
                  className={`Projects__project`}
                >
                  <Project 
                    image={item.image} 
                    title={item.title}
                  >
                  </Project>
                </li>             
              ))}
            </ul>
        ))}
        </div>
        <figure className="slideshowDots">
          {projectData.map((title, idx) => (
            <div
              key={idx}
              className={`slideshowDot${idx === currentSlide / modifier ? " active" : ""}`}
              onClick={()=>{
                setSlide(idx*modifier);
              }}
              onMouseEnter={()=>{handleHover(true)}}
              onMouseLeave={()=>{handleHover(false)}} 
            >
            </div>
          ))}
      </figure>
        
    </section>
  );
}

export default Projects;
