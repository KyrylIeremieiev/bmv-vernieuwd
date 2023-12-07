import { useState, useEffect } from 'react';
import React from 'react';
function Project({image, title}:any){
  
  return (
    <>
      <article className={`sProject`}>
          <div className='sProject__wrapper'>
            <img className='sProject__img' src={image}></img>
          </div>
          <h3 className='sProject__title'>{title}</h3>
      </article>
    </>
  );
}

export default Project;
