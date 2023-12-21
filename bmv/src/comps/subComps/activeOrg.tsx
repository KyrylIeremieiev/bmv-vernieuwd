import { useState, useEffect } from 'react';
import Placeholder from "../img/placeholder.jpg"
function Aorg({img, title, content}:any) {
    return(
        <section className='aorg'>
            <img src={img} alt="" className="aorg__img" />
            <h3 className="aorg__title">{title}</h3>
            <p className="aorg__content">{content}</p>
        </section>
    );
}

export default Aorg;
