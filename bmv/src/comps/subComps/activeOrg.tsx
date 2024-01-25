import { useState, useEffect } from 'react';
import Placeholder from "../img/placeholder.webp"
function Aorg({currentOrg, orgArticles}:any) {
    return(
        <section className='aorg'>
            <div className='aorg__imgWrapper'>
                <img src={orgArticles[currentOrg].image} alt="img of cat" className="aorg__img"  loading='lazy'/>
            </div>
            
            <h3 className="aorg__title">{orgArticles[currentOrg].title}</h3>
            <p className="aorg__content" dangerouslySetInnerHTML={{__html: orgArticles[currentOrg].content}}></p>
            <p className={orgArticles[currentOrg].link}>{orgArticles[currentOrg].linkText} <a href={orgArticles[currentOrg].link}>{orgArticles[currentOrg].link}</a></p>
        </section>
    );
}

export default Aorg;
