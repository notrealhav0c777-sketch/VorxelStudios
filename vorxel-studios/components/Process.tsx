import Reveal from "./Reveal";

const steps = [
  ["01", "Conversa", "Entendemos seu negócio, seus objetivos e o tipo de site que você precisa."],
  ["02", "Planejamento", "Organizamos as informações, a estrutura e a direção visual do projeto."],
  ["03", "Criação", "Desenvolvemos o site com atenção ao design, à usabilidade e à adaptação para diferentes telas."],
  ["04", "Entrega", "Apresentamos o projeto final e orientamos sobre a publicação e os próximos passos acordados."],
];

export default function Process() {
  return (
    <section id="processo" className="section dark">
      <div className="wrap">
        <Reveal className="head"><h2>Do primeiro contato ao site no ar.</h2></Reveal>
        <ol className="steps">
          {steps.map(([n, t, d]) => (<li key={n}><span className="num">{n}</span><h3>{t}</h3><p>{d}</p></li>))}
        </ol>
      </div>
    </section>
  );
}
