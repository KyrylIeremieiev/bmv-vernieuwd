import { useState, useEffect } from 'react';
import Placeholder from "../img/placeholder.jpg"
import Aorg from './subComps/activeOrg';
function Org() {
  let orgArticles = [
    {
        title:"Bouwmanagement en Maatschappelijk Vastgoed",
        content:"Het ontwikkelen en realiseren van maatschappelijke voorzieningen is binnen de gemeente Amsterdam in handen van team BMV: Bouwmanagement en Maatschappelijk Vastgoed, onderdeel van het Projectmanagementbureau. Bij BMV werken bouwmanagers en project- en procesmanagers, samen met collega’s van verschillende gemeentelijke afdelingen, aan de toekomst van de stad.",
        link:"",
        image: Placeholder
    },
    {
        title:"Werkwijze",
        content:"De werkgebieden en de expertise van bouwmanagement en maatschappelijk vastgoed overlappen elkaar, vullen elkaar aan en versterken elkaar.",
        link:""
    },
    {
        title:"BMV-teams",
        content:"Bij BMV werken rond de 60 bouwmanagers en project- en procesmanagers maatschappelijk vastgoed, met als thuisbasis een kantoor in het hart van Amsterdam.",
        link:""
    },
    
  ]
  return (
    <section className='Org'>
        <ul className="Org__links">
            <li className="Org__link Org__linkActive">
                <h3 className="Org__title">{orgArticles[0].title}</h3>
            </li>
            <li className="Org__link">
                <h3 className="Org__title">{orgArticles[1].title}</h3>
            </li>
            <li className="Org__link">
                <h3 className="Org__title">{orgArticles[2].title}</h3>
            </li>
        </ul>
        <Aorg title={orgArticles[0].title} img={orgArticles[0].image} content={orgArticles[0].content}></Aorg>
    </section>
  );
}

export default Org;
