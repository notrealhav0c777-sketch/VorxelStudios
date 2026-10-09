import Reveal from "./Reveal";

const services = [
  ["Sites institucionais", "Para empresas que querem apresentar serviços, história, diferenciais e contatos."],
  ["Landing pages", "Páginas criadas para apresentar uma oferta e incentivar uma ação específica."],
  ["Sites para negócios locais", "Presença digital para restaurantes, clínicas, lojas e prestadores de serviços."],
  ["Redesign de sites", "Modernização de sites existentes, com melhorias visuais e de navegação."],
  ["Design autoral", "Identidades visuais digitais construídas para o posicionamento de cada negócio."],
];

export default function Services() {
  return (
    <section id="servicos" className="section light alt">
      <div className="wrap">
        <Reveal className="head"><h2>O que a Vorxel Studios faz.</h2></Reveal>
        <ul className="services">
          {services.map(([t, d]) => (<li key={t}><h3>{t}</h3><p>{d}</p></li>))}
        </ul>
      </div>
    </section>
  );
}
