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
        link:"",
        image: Placeholder
        
    },
    {
        title:"BMV-teams",
        content:"Bij BMV werken rond de 60 bouwmanagers en project- en procesmanagers maatschappelijk vastgoed, met als thuisbasis een kantoor in het hart van Amsterdam.",
        link:"",
        image: Placeholder
    },
    
  ]

  const [currentOrg, setOrg] = useState(0)
  return (
    <section className='Org'>
        <ul className="Org__links">
            <li className="Org__link">
                <button className={`Org__title ${currentOrg === 0 ? 'Org__linkActive' : ''}`} onClick={()=>{setOrg(0)}}>{orgArticles[0].title}</button>
            </li>
            <li className="Org__link">
                <button className={`Org__title ${currentOrg === 1 ? 'Org__linkActive' : ''}`} onClick={()=>{setOrg(1)}}>{orgArticles[1].title}</button>
            </li>
            <li className="Org__link">
                <button className={`Org__title ${currentOrg === 2 ? 'Org__linkActive' : ''}`} onClick={()=>{setOrg(2)}}>{orgArticles[2].title}</button>
            </li>
        </ul>
        <Aorg currentOrg={currentOrg} orgArticles={orgArticles}></Aorg>
    </section>
  );
}

export default Org;
