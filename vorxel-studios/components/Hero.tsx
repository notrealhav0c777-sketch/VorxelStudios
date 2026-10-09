import Image from "next/image";
import WaButton from "./WaButton";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-in">
        <div className="hero-copy">
          <p className="kicker">Vorxel Studios · Design &amp; desenvolvimento web</p>
          <h1>Quantos clientes você está perdendo por ainda não ter um site profissional?</h1>
          <p className="lead">Seu negócio merece mais do que um perfil nas redes sociais. Criamos sites autorais, modernos e profissionais para sua empresa transmitir confiança e conquistar novas oportunidades.</p>
          <div className="actions">
            <WaButton className="btn btn-gold">Quero meu site</WaButton>
            <a href="#portfolio" className="btn btn-line">Explorar projetos</a>
          </div>
        </div>
        <div className="browser" aria-hidden="true">
          <div className="browser-bar"><i /><i /><i /><span>vorxelstudios</span></div>
          <div className="browser-body">
            <Image src={siteConfig.logo} alt="" width={240} height={240} />
            <div className="skeleton"><b /><b /><b /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
