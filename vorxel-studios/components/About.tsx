import Reveal from "./Reveal";

const principles = [
  "Design pensado para cada negócio", "Experiência simples e intuitiva",
  "Comunicação clara e profissional", "Atenção aos detalhes", "Projetos adaptados a dispositivos móveis",
];

export default function About() {
  return (
    <section id="sobre" className="section light">
      <div className="wrap split">
        <Reveal>
          <h2>Seu negócio tem uma história. Seu site deve contar ela.</h2>
          <p>A Vorxel Studios nasceu com uma ideia simples: ajudar empresas a terem uma presença digital que realmente represente o valor do seu trabalho.</p>
          <p>Criamos sites autorais, com design pensado para cada negócio, navegação intuitiva e atenção aos detalhes. Nosso objetivo é tornar a criação de um site mais simples e acessível para empresas que querem dar o próximo passo.</p>
          <p>Não acreditamos em soluções visuais feitas sem propósito. Acreditamos em entender o negócio, organizar suas informações e construir uma experiência digital que transmita confiança.</p>
        </Reveal>
        <Reveal>
          <ul className="principles">{principles.map((p) => (<li key={p}>{p}</li>))}</ul>
        </Reveal>
      </div>
    </section>
  );
}
