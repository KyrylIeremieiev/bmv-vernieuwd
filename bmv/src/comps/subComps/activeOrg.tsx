import { useState, useEffect } from 'react';
import Placeholder from "../img/placeholder.jpg"
function Aorg({currentOrg, orgArticles}:any) {
    return(
        <section className='aorg'>
            <img src={orgArticles[currentOrg].image} alt="" className="aorg__img" />
            <h3 className="aorg__title">{orgArticles[currentOrg].title}</h3>
            <p className="aorg__content">{orgArticles[currentOrg].content}</p>
        </section>
    );
}

export default Aorg;
