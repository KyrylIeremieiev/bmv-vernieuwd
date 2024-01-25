import { useParams } from "react-router-dom";
import Spinoza from '../img/banner.webp'
import AICS from '../img/niewbouw.webp';
import BosTheater from '../img/bostheater.webp';
import WereldBurger from '../img/wereldburger.webp';
import SMuseum from '../img/slavernijmuseum.webp';
import AMuseum from '../img/amuseum.webp';
import AFC from '../img/afc.webp';
import NWO from '../img/nwo.webp'

import Spi1 from "../img/spi1.webp"
import Spi2 from "../img/spi2.webp"

import AICS1 from "../img/foto_1.webp";
import AICS2 from "../img/foto_2_1.webp";
import AICS3 from "../img/foto_4.webp";

import Bos1 from "../img/bos1.webp";
import Bos2 from "../img/bos2.webp";

import Burger from "../img/burger.webp"

import Ns from "../img/ns.webp"

import AM1 from "../img/am1.webp"
import AM2 from "../img/am2.webp"
import AM3 from "../img/am3.webp"
import AM4 from "../img/am4.webp"

import AFC1 from "../img/afc1.webp"

import NWO1 from "../img/nwo1.webp"
import NWO2 from "../img/nwo2.webp"
import NWO3 from "../img/nwo3.webp"
import { useState } from "react";

interface Project {
  title: string;
  subtitle:string;
  content: string;
  link: string;
  img: string;
  ontwerp:string;
  fotograaf:string;
  extra:{img:string, figcap:string}[];
}

const projects: Record<string, Project> = {
  Spinoza20first: {
    title: "Nieuwbouw Spinoza20first",
    subtitle:"Spinoza20First: duurzame school en sporthal",
    content:
      "Waar ooit de parkeergarage van de voormalige Bijlmerbajes stond, zorgde een team van BMV voor de realisatie van nieuwbouw van de Spinoza20First-school en Sporthal Bajeskwartier, met daaraan gekoppeld een jongerencentrum. Deze middelbare school biedt plek aan 1.000 tot 1.200 leerlingen. De sporthal bestaat uit drie zalen. Deze worden op doordeweekse dagen overdag gebruikt door Spinoza20First en in de avonden en weekenden door verenigingen. Bij de ontwikkeling van de school en de sporthal besteedde BMV veel aandacht aan duurzaamheid. Zo is het gebouw flexibel indeelbaar, heeft het een lichte constructie en is bij de bouw gebruik gemaakt van duurzame materialen. Verder is het gebouw aangesloten op de warmte/koude-opslaginstallatie (voor verwarming in de winter en verkoeling in de zomer) van het gebied Bajeskwartier. Het dak van de school – met daarop het schoolplein – bevat veel groen, dat bijdraagt aan het vasthouden van regenwater. Op het dak van de sporthal bevinden zich hiernaast zonnepanelen.",
    link: "www.spinoza20first.nl",
    img: Spinoza,
    ontwerp:"Ontwerp: BDG Architecten",
    fotograaf:"none",
    extra:[
      { img:Spi1, figcap:"none"},
      { img:Spi2, figcap:"none"}
    ]
  },
  AICS: {
    title: "Nieuwbouw AICS",
    subtitle:"Amsterdam International Community School (AICS): wereldschool in wereldstad",
    content:
      "Amsterdam International Community School (AICS): wereldschool in wereldstad Vlak achter het VU-universiteitscomplex op de Zuidas is eind 2021 de Amsterdam International Community School (AICS) opgeleverd. BMV was vanaf het prille begin betrokken bij de bouw van de school: van het locatieonderzoek tot aan de oplevering. Het schoolgebouw van 16.000 vierkante meter biedt plek aan 1.400 basis- en middelbare schoolleerlingen. In het kader van duurzaamheid zijn diverse maatregelen getroffen. Zo is er een groen dak aangelegd en zijn er zonnepanelen geplaatst. De gevel is natuurinclusief,  over enkele jaren is deze verticale tuin begroeid met planten. Ook zijn er kasten voor huismussen en vleermuizen geplaatst. In het gebouw is een wandelement in de centrale hal over de gehele lengte, gemaakt van de gekapte bomen die plaats moesten maken voor het gebouw, een belangrijke sfeermaker. BMV stuurde het ontwerptraject aan, gaf vorm aan alle inkoopprocessen en vergunningtrajecten, organiseerde bewonersparticipatie en -communicatie, stemde af met de vele stakeholders in het gebied en verzorgde het contractmanagement met de aannemer. En zo groeide de AICS uit tot wat het nu is: een school die met succes is gebouwd, op tijd, binnen budget en met de gewenste kwaliteit.",
    link: "www.aics.espritscholen.nl",
    img: AICS,
    ontwerp:"Ontwerp: Mecanoo Architecten",
    fotograaf:"Fotograaf: Stijn Poelstra",
    extra:[
      { img:AICS1, figcap:"none"},
      { img:AICS2, figcap:"none"},
      { img:AICS3, figcap:"none"}
    ]
  },
  Bostheater: {
    title: "Renovatie Bostheater",
    subtitle:"Bostheater: klassieke attractie, vernieuwde jas",
    content:
      "Op dinsdag 23 mei 2023 vond de officiële opening plaats van het grootste openluchttheater van Nederland: het Bostheater. Het Bostheater is gebouwd in de jaren ’50 en voldeed niet meer aan de eisen van de huidige tijd. BMV bereidde de besluitvorming voor die geleid heeft tot het besluit om het Bostheater te renoveren. Na het besluit verzorgde en begeleidde het BMV de ontwerp- en bouwwerkzaamheden.  Het ontwerp is in een multidisciplinaire bouwteam zorgvuldig uitgewerkt. De focus van de bouwwerkzaamheden lag op de renovatie en restauratie van de betonnen onderdelen, waar mogelijk het herstellen van het oorspronkelijke landschapsontwerp en het plaatsen van nieuwbouw voor kleed-, opslag- en techniekruimten. Tevens is de theaterinfrastructuur grotendeels vernieuwd en uitgebreid. Op deze wijze is het theater omgetoverd tot een moderne cultuuroase, die voldoet aan de eisen en wensen van de huidige tijd en daarmee weer vele jaren tegemoet kan gaan.",
    link: "www.bostheater.nl",
    img: BosTheater,
    ontwerp:"Ontwerp: Archivolt Architecten",
    fotograaf:"Bijschrift omslagfoto: Impressiebeeld van de stalen overkapping op de boulevard",
    extra:[
      { img:Bos1, figcap:"Impressiebeeld van de kleedkamers"},
      { img:Bos2, figcap:"Impressiebeeld van de opslag"},
    ]
  },
  Wereldburger: {
    title: "Renovatie de Wereldburger",
    subtitle:"Wereldburger: prijswinnende renovatie",
    content:
      "Het gebouw van basisschool De Wereldburger in Amsterdam Nieuw-West (Osdorp) dateerde uit de jaren ’60. Grootschalige renovatie was nodig om het te laten voldoen aan de huidige onderwijskundige en technische eisen. Een team van BMV verzorgde de renovatie. Het gebouw werd gesloopt tot op het betoncasco en vanaf daar weer opgebouwd. Bij de renovatie was hergebruik een belangrijk uitgangspunt. Waar mogelijk werden materialen uit het oorspronkelijke schoolgebouw gebruikt, evenals materialen uit andere panden. Het resultaat mag er zijn en de vernieuwde Wereldburger viel al snel in de prijzen. In 2022 werd het gebouw bekroond met de publieksjuryprijs bij de jaarlijkse Amsterdamse Architectuurprijs en won het de NRP Gulden Fenix (de nationale prijs voor voorbeeldprojecten in renovatie en transformatie) in de categorie ‘renovatie’.",
    link: "www.aics.espritscholen.nl",
    img: WereldBurger,
    ontwerp:"Ontwerp: Moke Architecten",
    fotograaf:"Fotograaf: Thijs Wolzak",
    extra:[
      { img:Burger, figcap:"none"},
    ]
  },
  NS: {
    title: "Kwartiermaker Nationaal Slavernijmuseum",
    subtitle:"Nationaal Slavernijmuseum",
    content:
      "Nederland krijgt een eigen Nationaal Slavernijmuseum. Over een paar jaar zal het museum zijn deuren openen voor het publiek. Het trans-Atlantische slavernijverleden vormt het uitgangspunt voor het museum, met onder andere veel aandacht voor de Indisch-Oceanische slavernij. Inhoudelijk zal het museum zich richten op een breed publiek, met een focus op educatie, kunst, kennis en onderzoek. Het initiatief wordt mede mogelijk gemaakt door steun van het ministerie van  Onderwijs, Cultuur & Wetenschap (OCW). Dit historische en grote project wordt opgezet door drie kwartiermakers (Maatschappelijk, Museaal en Fysiek) die de handen ineenslaan. Vanuit de afdeling BMV is de kwartiermaker fysiek bij het project geleverd. Hij werkt met de twee andere kwartiermakers mee aan alle benodigde producten voor de verdere besluitvorming in het project..",
    link: "https://www.amsterdam.nl/diversiteit/nationaal-slavernijmuseum/",
    img: SMuseum,
    ontwerp:"Omslagfoto: Kwartiermakers John Leerdam, Peggy Brandon, David Brandwagt. Fotograaf: Tom Feenstra",
    fotograaf:"none",
    extra:[
      { img:Ns, figcap:"Terugblik werkreis Suriname dialoogbijeenkomst"},
    ]
  },
  AM: {
    title: "Renovatie Amsterdam Museum",
    subtitle:"Amsterdam Museum: renovatie in voorbereiding",
    content:
      "Amsterdam Museum: renovatie in voorbereiding. Het nieuwe Amsterdam Museum wordt een publieksvriendelijke plek waar bezoekers en bewoners Amsterdam leren kennen, in een museumgebouw dat in verbinding staat met de buurt, de stad en haar bewoners. Het ontwerp voor het nieuwe Amsterdam Museum is gebaseerd op uitvoerig onderzoek naar de ontstaansgeschiedenis van het monument, naar mogelijk hergebruik van materialen uit het verleden en naar inbedding in het middeleeuwse hart van de binnenstad. Met inventieve oplossingen verandert het gesloten monument in een open museum: met aandacht voor de geschiedenis van het gebouw en de plek. Dankzij de renovatie zal het gebouw bovendien voldoen aan actuele duurzaamheidseisen. De voorbereidingen van de renovatie zijn inmiddels in volle gang. BMV begeleidt de gehele renovatie, van haalbaarheidsonderzoek tot de oplevering en opening van het nieuwe museum. Ontwerp: Neutelings Riedijk Architecten",
    link: "none",
    img: AMuseum,
    ontwerp:"Ontwerp: Neutelings Riedijk Architecten",
    fotograaf:"none",
    extra:[
      { img:AM1, figcap:"none"},
      { img:AM2, figcap:"none"},
      { img:AM3, figcap:"none"},
      { img:AM4, figcap:"none"}
    ]
  },
  SGGC: {
    title: "Sportpark Goed Genoeg & Clubgebouw AFC",
    subtitle:"AFC: nieuwe velden, nieuw clubhuis",
    content:
      "AFC: nieuwe velden, nieuw clubhuis. In 2020 verzorgde een team van bouwmanagers van BMV vijf nieuwe kunstgrasvelden en een gloednieuw clubhuis voor AFC, de Amsterdamsche Football Club. Dit moest gebeuren om AFC in te passen in de almaar groeiende Zuidas. BMV begeleidde de verplaatsing van de velden en het clubhuis in noordelijke richting, om op de ‘oude’ locatie ruimte te maken voor een nieuwe woonwijk. De werkzaamheden vonden gefaseerd plaats, zodat er tijdens de bouw gewoon kon worden gevoetbald. Het nieuwe clubgebouw is in 2020 opgeleverd. In september 2022 zijn het sportpark en het clubgebouw officieel in gebruik genomen.",
    link: "www.afc.nl",
    img: AFC,
    ontwerp:"none",
    fotograaf:"Fotograaf: Marcel Steinbach",
    extra:[
      { img:AFC1, figcap:"none"}
    ]
  },
  NWO: {
    title: "Verbouwing en Nieuwbouw Werven en Overslagpunten",
    subtitle:"Programma Transitie Werven en Overslagpunten",
    content:
      "In Amsterdam zorgen meer dan 2500 ambtenaren  elke dag voor de reiniging, de handhaving, de afvalinzameling en het dagelijks onderhoud van de openbare ruimte van de stad inclusief de kades en de bruggen en het groen. Zij werken vanuit 37 locaties in de stad. Sinds 2019 en ook nog de komende jaren werken 12 bouwmanagers van Team BMV met andere collega’s van de gemeente samen om die 37 werklocaties in de stad samen te voegen tot 23. Deze nieuwe uitvoeringslocaties moeten optimaal zijn: slim ruimtegebruik, duurzaamheid en toekomstbestendigheid zijn leidend. Er wordt ook gekeken naar het verminderen van vervoerbewegingen en de mogelijkheid van vervoer over water. Belangrijk uitgangspunt is het bieden van een prettige werkomgeving en de juiste faciliteiten aan de mensen die het zware werk doen voor de stad. Er wordt hard gewerkt om in 2027 alle 23 nieuwe locaties gereed te hebben.",
    link: "VPRC-podcast-7.mp3",
    img: NWO,
    ontwerp:"Omslagafbeelding: Den Brielstraat, Witteveen + Bos",
    fotograaf:"none",
    extra:[
      { img:NWO1, figcap:"Den Brielstraat, Witteveen + Bos"},
      { img:NWO2, figcap:"Volendammerweg Stedenbouwkundige inpassing nieuwbouw, Witteveen + Bos"},
      { img:NWO3, figcap:"Volendammerweg Inrichting terrein nieuwe situatie, Witteveen + Bos"}
    ]
  },
};

function ProjectPage() {
  const { project } = useParams<{ project: string }>();
  const [closed, setClosed] = useState(() => true);
  // Check if project is undefined or not in the projects object
  if (!project || !projects[project]) {
    // You can redirect to an error page or handle it as needed
    return <div>Error: Project not found</div>;
  }

  const currentProject = projects[project];
  
  return (
    <>
    <section className="projectPage">
      <figure className="projectPage__imgBox">
        <img className="projectPage__img" src={currentProject.img} alt="Project Image" loading='lazy'/>
      </figure>
      <article className="projectPage__info">
        <h3 className="projectPage__title">{currentProject.title}</h3>
        <h4 className="projectPage__subtitle">{currentProject.subtitle}</h4>
        <p className={`projectPage__content ${closed ? "closed":"opened"}`}>{currentProject.content}</p>
        <button className="projectPage__button" onClick={()=>{
            if(closed==true){
                setClosed(false)
                console.log("yes")
                return
            }
            setClosed(true);
        }}>Lees meer...</button>
        <br></br>
        <h4 className={currentProject.link}>Wilt u meer weten?</h4>
        <a  className={currentProject.link}href={currentProject.link}>{currentProject.link}</a>
      </article>
      
    </section>
    <section className="projectPage__bottom">
      <p className={currentProject.ontwerp}>{currentProject.ontwerp}</p>
      <p className={currentProject.fotograaf}>{currentProject.fotograaf}</p>
      {currentProject.extra.map((obj) => (
        <figure className="projectImg">
          <img className="projectPageExtraImg"src={obj.img} alt="image not found" />
          <figcaption className={obj.figcap}>{obj.figcap}</figcaption>
        </figure>
      ))}
    </section>
    </>
  );
}

export default ProjectPage;
