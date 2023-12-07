import { useState, useEffect } from 'react';
import  Project  from './subComps/project';
import Project1Img from '../img/banner.jpeg'
function Projects() {
  const projectData= [
    [
      {
        image:Project1Img,
        title:"Nieuwbouw Spinoza20first",

      },
      {
        image:Project1Img,
        title:"Nieuwbouw AICS",
        
      },
      {
        image:Project1Img,
        title:"Renovatie Bostheater",
        
      },
    ],
    [
      {
        image:Project1Img,
        title:"Nieuwbouw Spinoza20first",

      },
      {
        image:Project1Img,
        title:"Nieuwbouw AICS",
        
      },
      {
        image:Project1Img,
        title:"Renovatie Bostheater",
        
      },
    ],
    [
      {
        image:Project1Img,
        title:"Nieuwbouw Spinoza20first",

      },
      {
        image:Project1Img,
        title:"Nieuwbouw AICS",
        
      },
      {
        image:Project1Img,
        title:"Renovatie Bostheater",
        
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
