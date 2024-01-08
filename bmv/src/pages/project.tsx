import test from "../img/afc.jpeg"
function ProjectPage(){
 return(
    <section className="projectPage">
        <figure className="projectPage__imgBox">
            <img  className="projectPage__img" src={test}></img>
        </figure>
        <article className="projectPage__info">
            <h3 className="projectPage__title">Lorem</h3>
            <p className="projectPage__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid iste ullam iure culpa alias rem eius, iusto nam cumque porro neque illum. Corporis provident mollitia reprehenderit natus ratione adipisci dignissimos.</p>
        </article>
    </section>
 )   
}

export default ProjectPage;