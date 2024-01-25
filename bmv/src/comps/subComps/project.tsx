import { useState, useEffect } from 'react';
import React from 'react';
function Project({image, title, exist, link}:any){
  const travel = () =>{
    window.location.href = "https://portfolio.kyryl.dev/project/" + link;
  }
  return (
    <>
      <article onClick={()=>{travel()}} className={`sProject ${exist ==false ? "non-exist":""}`}>
          <div className='sProject__wrapper'>
            <img className='sProject__img' src={image} loading='lazy' alt='img of project'></img>
          </div>
          <h3 className='sProject__title'>{title}</h3>
      </article>
    </>
  );
}

export default Project;
