import WaButton from "./WaButton";

export default function Contact() {
  return (
    <section id="contato" className="cta">
      <div className="wrap">
        <span className="rule" aria-hidden="true" />
        <h2>Seu próximo cliente pode estar procurando por você agora.</h2>
        <p>Vamos criar um site que apresente seu negócio com a qualidade que ele merece.</p>
        <WaButton className="btn btn-gold">Vamos conversar sobre seu projeto</WaButton>
      </div>
    </section>
  );
}
