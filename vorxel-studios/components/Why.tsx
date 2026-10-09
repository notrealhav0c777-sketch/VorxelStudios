import Reveal from "./Reveal";

const reasons = [
  "Apresentar seus serviços com mais clareza.", "Transmitir uma imagem mais profissional.",
  "Facilitar o contato com potenciais clientes.", "Reunir informações importantes em um único lugar.",
  "Construir uma presença digital própria.",
  "Ser encontrada por quem pesquisa seus serviços online, especialmente com uma estratégia adequada de SEO.",
];
const commitments = [
  "Comunicação clara durante o projeto", "Escopo e entregáveis definidos antes do início",
  "Alinhamento de expectativas", "Atenção à qualidade e ao funcionamento do site",
  "Transparência sobre prazos, custos e alterações", "Entrega conforme as condições acordadas",
];

export default function Why() {
  return (
    <section className="section light">
      <div className="wrap split">
        <Reveal>
          <h2>Seu negócio merece ser levado a sério em todos os lugares.</h2>
          <p>Um site profissional ajuda sua empresa a:</p>
          <ul className="ticks">{reasons.map((r) => (<li key={r}>{r}</li>))}</ul>
        </Reveal>
        <Reveal>
          <h3 className="sub">Como trabalhamos</h3>
          <ul className="ticks">{commitments.map((r) => (<li key={r}>{r}</li>))}</ul>
          <p className="small">Garantias de correção, manutenção, revisões e suporte, quando houver, são definidas na proposta comercial de cada projeto.</p>
        </Reveal>
      </div>
    </section>
  );
}
