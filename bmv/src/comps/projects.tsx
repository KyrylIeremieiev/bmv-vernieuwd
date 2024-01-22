import { useState, useEffect } from 'react';
import  Project  from './subComps/project';
import Spinoza20 from '../img/banner.webp'
import AICS from '../img/niewbouw.webp';
import BosTheater from '../img/bostheater.webp';
import WereldBurger from '../img/wereldburger.webp';
import SMuseum from '../img/slavernijmuseum.webp';
import AMuseum from '../img/amuseum.webp';
import AFC from '../img/afc.webp';
import NWO from '../img/nwo.webp'
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
      
    ],
    

    
  ]
  const modifier = 1/projectData.length;
  const critical = modifier * projectData.length;

  const [hovered, setHover] = useState(false);
  const [currentSlide, setSlide] = useState(0);




  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (!hovered) {
      // Start automatic sliding
      intervalId = setInterval(slide, 5000); // Change slide every 3 seconds (adjust as needed)
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
    <section className='Projects' id='projecten'>
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
