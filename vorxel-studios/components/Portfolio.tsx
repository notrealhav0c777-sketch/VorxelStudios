import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectMock from "./ProjectMock";
import Reveal from "./Reveal";

export default function Portfolio() {
  return (
    <section id="portfolio" className="section dark">
      <div className="wrap">
        <Reveal className="head">
          <h2>Quatro negócios, quatro identidades.</h2>
          <p className="muted">Projetos conceituais criados pela Vorxel Studios para mostrar como cada segmento pode ter um site com personalidade própria. Não são clientes reais.</p>
        </Reveal>
        <div className="projects">
          {projects.map((p, i) => (
            <Link key={p.slug} href={`/projetos/${p.slug}`} className={"project" + (i % 3 === 0 ? " wide" : "")} aria-label={`Ver conceito ${p.name}`}>
              <ProjectMock p={p} />
              <div className="project-info">
                <div><h3>{p.name}</h3><span>{p.segment}</span></div>
                <p>{p.description}</p>
                <span className="more">Ver conceito</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
