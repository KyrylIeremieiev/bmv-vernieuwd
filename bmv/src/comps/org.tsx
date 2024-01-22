import { useState, useEffect } from 'react';
import Placeholder from "../img/placeholder.webp"
import Aorg from './subComps/activeOrg';
function Org() {
  let orgArticles = [
    {
        title:"BMV",
        content:"Het ontwikkelen en realiseren van maatschappelijke voorzieningen is binnen de gemeente Amsterdam in handen van team BMV: Bouwmanagement en Maatschappelijk Vastgoed, onderdeel van het Projectmanagementbureau. Bij BMV werken bouwmanagers en project- en procesmanagers, samen met collega’s van verschillende gemeentelijke afdelingen, aan de toekomst van de stad. BMV stond aan de wieg van het Amsterdamse beleid voor maatschappelijke voorzieningen. Dit beleid werd in 2018 verankerd in de ‘Referentienormen voor maatschappelijke voorzieningen, groen en spelen’. Het doel van deze normen is de groei van de stad te koppelen aan maatschappelijke voorzieningen en activiteiten. Deze worden niet vanzelfsprekend door de private sector opgepakt en vragen daarom een actieve rol van de gemeentelijke overheid. Het gaat hierbij om gebouwen (zogenaamd maatschappelijk vastgoed) en het – letterlijk – creëren van ruimte voor sport, spel, kunst en cultuur. Naast de maatschappelijke voorzieningen werkt BMV ook aan beheer en faciliteren van goede werkplekken - zoals kantoren, werven, garages en opslagruimtes - voor de mensen die de stad en het stadslandschap schoon en netjes houden. De stadsdeelkantoren en andere kantoren voor de gemeentelijke organisatie zijn ook onderdeel van ons werkveld.",
        link:"",
        image: Placeholder
    },
    {
        title:"Werkwijze",
        content:"De werkgebieden en de expertise van bouwmanagement en maatschappelijk vastgoed overlappen elkaar, vullen elkaar aan en versterken elkaar. BMV hanteert daarom een integrale aanpak: een kruisbestuiving tussen verschillende disciplines, uiteenlopend van proces-, project- en bouwmanagement tot planning, financiën, grond en ontwikkeling, vastgoed en juridische zaken. De werkzaamheden van BMV omvatten onder andere en natuurlijk afhankelijk van het soort project: 1. bestuurlijk adviseren van verschillende directies en het gemeentebestuur (het College van B&W en de gemeenteraad) in de verschillende beleidsfases; 2. opstellen van een programma van eisen; 3. onderzoek doen naar geschikte locaties; 4. controleren van het budget in relatie tot de ambities; 5. aansturen van een ontwerptraject; 6. organiseren van selecties en aanbestedingen; 7. voorbereiden en coördineren van de bouw; 8. verzorgen van het feestje rond de oplevering. BMV schakelt tussen project en proces. Het team is binnen de gemeente Amsterdam hét adres voor vraagstukken op het snijvlak van het sociale en fysieke domein. BMV biedt een integraal en overzichtelijk pakket per project. En het verbindt de wensen van de opdrachtgever en de gebruiker aan de mogelijkheden in het gebied, de kosten en de planning.",
        link:"",
        image: Placeholder
        
    },
    {
        title:"BMV-teams",
        content:"Bij BMV werken rond de 60 bouwmanagers en project- en procesmanagers maatschappelijk vastgoed, met als thuisbasis een kantoor in het hart van Amsterdam. Waar nodig schakelt BMV externe experts in, voor specifieke aspecten van een project. BMV stuurt projecten aan vanuit zelfstandig werkende teams met korte lijnen en veel dynamiek. In de teams hebben de betreffende medewerkers voldoende tijd om van elkaar te leren, innovatieve ideeën te ontwikkelen of zelfs met een compleet nieuwe aanpak te komen. Immers, een stad als Amsterdam staat – net als het leven zelf – nooit stil.",
        link:"",
        image: Placeholder
    },
    
  ]

  const [currentOrg, setOrg] = useState(0)
  return (
    <section className='Org' id='org'>
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
