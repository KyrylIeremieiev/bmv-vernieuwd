import { useState, useEffect } from 'react';
import React from 'react';
function Project({image, title, color}:any){
  
  return (
    <>
      <article className={`sProject ${color}`}>
          <img className='sProject__img' src={image}></img>
        <h1 className='sProject__title'>{title}</h1>
      </article>
    </>
  );
}

export default Project;
