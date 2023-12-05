import { useState, useEffect } from 'react';
import  Project  from './subComps/project';
import Project1Img from '../img/banner.jpeg'
function Projects() {
  const projectData= [
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
    {
      image:Project1Img,
      title:"dingus"
    }
  ]
  const [hovered, setHover] = useState(false);
  const [currentSlide, setSlide] = useState(true);

  const [project1, setProject1] = useState(0);
  const [project2, setProject2] = useState(1);
  const [project3, setProject3] = useState(2);



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

  useEffect(() => {
    // This effect runs whenever currentSlide changes
    // You can add your animation logic here
    console.log('Animation triggered!');
  }, [currentSlide]);

  const slide = () => {
    setSlide(false);
    setSlide(true);
    setProject1((prevProject1) => (prevProject1 + 1) % projectData.length);
    setProject2((prevProject2) => (prevProject2 + 1) % projectData.length);
    setProject3((prevProject3) => (prevProject3 + 1) % projectData.length);
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
        <ul className='Projects__projects'>
            <li
              onMouseEnter={()=>{handleHover(true)}}
              onMouseLeave={()=>{handleHover(false)}} 
              className={`Projects__project ${hovered === false ? 'fadeIn' : ''}`}
            >
              <Project image={projectData[project1].image} 
                title={projectData[project1].title} color={"yellow"}>
              </Project>
            </li> 

            <li
              onMouseEnter={()=>{handleHover(true)}}
              onMouseLeave={()=>{handleHover(false)}} 
              className={`Projects__project ${hovered === false ? 'fadeIn' : ''}`}
            >
              <Project image={projectData[project2].image} 
                title={projectData[project2].title} color={"yellow"}>
              </Project>
            </li> 

            <li
              onMouseEnter={()=>{handleHover(true)}}
              onMouseLeave={()=>{handleHover(false)}} 
              className={`Projects__project ${hovered === false ? 'fadeIn' : ''}`}
            >
              <Project image={projectData[project3].image} 
                title={projectData[project3].title} color={"yellow"}>
              </Project>
            </li> 
        </ul>
    </section>
  );
}

export default Projects;
