import { useParams } from "react-router-dom";
import Spinoza from "../img/banner.jpeg";
import AICS from "../img/AICS.jpeg"
import { useState } from "react";

interface Project {
  title: string;
  content: string;
  link: string;
  img: string;
}

const projects: Record<string, Project> = {
  Spinoza20first: {
    title: "Nieuwbouw Spinoza20first",
    content:
      "Waar ooit de parkeergarage van de voormalige Bijlmerbajes stond, zorgde een team van BMV voor de realisatie van nieuwbouw van de Spinoza20First-school en Sporthal Bajeskwartier, met daaraan gekoppeld een jongerencentrum. Deze middelbare school biedt plek aan 1.000 tot 1.200 leerlingen. De sporthal bestaat uit drie zalen. Deze worden op doordeweekse dagen overdag gebruikt door Spinoza20First en in de avonden en weekenden door verenigingen. Bij de ontwikkeling van de school en de sporthal besteedde BMV veel aandacht aan duurzaamheid. Zo is het gebouw flexibel indeelbaar, heeft het een lichte constructie en is bij de bouw gebruik gemaakt van duurzame materialen. Verder is het gebouw aangesloten op de warmte/koude-opslaginstallatie (voor verwarming in de winter en verkoeling in de zomer) van het gebied Bajeskwartier. Het dak van de school – met daarop het schoolplein – bevat veel groen, dat bijdraagt aan het vasthouden van regenwater. Op het dak van de sporthal bevinden zich hiernaast zonnepanelen.",
    link: "www.spinoza20first.nl",
    img: Spinoza,
  },
  AICS: {
    title: "Nieuwbouw AICS",
    content:
      "Amsterdam International Community School (AICS): wereldschool in wereldstad Vlak achter het VU-universiteitscomplex op de Zuidas is eind 2021 de Amsterdam International Community School (AICS) opgeleverd. BMV was vanaf het prille begin betrokken bij de bouw van de school: van het locatieonderzoek tot aan de oplevering. Het schoolgebouw van 16.000 vierkante meter biedt plek aan 1.400 basis- en middelbare schoolleerlingen. In het kader van duurzaamheid zijn diverse maatregelen getroffen. Zo is er een groen dak aangelegd en zijn er zonnepanelen geplaatst. De gevel is natuurinclusief,  over enkele jaren is deze verticale tuin begroeid met planten. Ook zijn er kasten voor huismussen en vleermuizen geplaatst. In het gebouw is een wandelement in de centrale hal over de gehele lengte, gemaakt van de gekapte bomen die plaats moesten maken voor het gebouw, een belangrijke sfeermaker. BMV stuurde het ontwerptraject aan, gaf vorm aan alle inkoopprocessen en vergunningtrajecten, organiseerde bewonersparticipatie en -communicatie, stemde af met de vele stakeholders in het gebied en verzorgde het contractmanagement met de aannemer. En zo groeide de AICS uit tot wat het nu is: een school die met succes is gebouwd, op tijd, binnen budget en met de gewenste kwaliteit.",
    link: "www.aics.espritscholen.nl",
    img: AICS,
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
    <section className="projectPage">
      <figure className="projectPage__imgBox">
        <img className="projectPage__img" src={currentProject.img} alt="Project Image" />
      </figure>
      <article className="projectPage__info">
        <h3 className="projectPage__title">{currentProject.title}</h3>
        <p className={`projectPage__content ${closed ? "closed":"opened"}`}>{currentProject.content}</p>
        <button className="projectPage__button" onClick={()=>{
            if(closed==true){
                setClosed(false)
                console.log("yes")
                return
            }
            setClosed(true);
        }}>Read More...</button>
        <a href={currentProject.link}>{currentProject.link}</a>
      </article>
    </section>
  );
}

export default ProjectPage;
