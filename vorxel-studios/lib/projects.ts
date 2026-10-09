export type Project = {
  slug: string; name: string; segment: string; description: string;
  headline: string; sub: string; items: [string, string][];
  bg: string; fg: string; accent: string; font: string;
};

const serif = "Georgia, 'Times New Roman', serif";
const sans = "system-ui, -apple-system, 'Segoe UI', sans-serif";

export const projects: Project[] = [
  { slug: "mare-alta", name: "Maré Alta", segment: "Restaurante contemporâneo",
    description: "Cardápio, reservas e atmosfera em um site de ritmo calmo e tipografia clássica.",
    headline: "Cozinha de mar, mesa de casa.", sub: "Conceito de site para um restaurante de frutos do mar autoral.",
    items: [["Cardápio", "Pratos organizados por momento do dia, com leitura fácil no celular."], ["Reservas", "Botão direto para reservar por mensagem."], ["Ambiente", "Galeria ampla para mostrar o espaço antes da visita."]],
    bg: "#10231F", fg: "#EFE9DC", accent: "#D9A441", font: serif },
  { slug: "lume-clinica", name: "Lume Clínica", segment: "Clínica de estética",
    description: "Visual leve e acolhedor, com tratamentos explicados de forma simples e agendamento direto.",
    headline: "Cuidado que respeita o seu tempo.", sub: "Conceito de site para uma clínica de estética e bem-estar.",
    items: [["Tratamentos", "Cada procedimento com descrição clara e para quem é indicado."], ["Equipe", "Apresentação das profissionais com foco em confiança."], ["Agendamento", "Contato rápido pelo WhatsApp, sem formulários longos."]],
    bg: "#F4EFEA", fg: "#3A2B2B", accent: "#B76E79", font: serif },
  { slug: "atelier-norte", name: "Atelier Norte", segment: "Escritório de arquitetura",
    description: "Portfólio de obras em grandes imagens, grade assimétrica e texto mínimo.",
    headline: "Espaços pensados para durar.", sub: "Conceito de site para um escritório de arquitetura e interiores.",
    items: [["Obras", "Projetos apresentados em grandes formatos, com ficha técnica enxuta."], ["Processo", "Do briefing à entrega, explicado em etapas."], ["Contato", "Um caminho claro para solicitar uma conversa."]],
    bg: "#E9E9E6", fg: "#151515", accent: "#2F4B3A", font: sans },
  { slug: "casa-alveolo", name: "Casa Alvéolo", segment: "Marca de produtos",
    description: "Vitrine para uma marca de cerâmica artesanal, com cor forte e produtos em destaque.",
    headline: "Feito à mão, pensado para a rotina.", sub: "Conceito de site para uma marca de cerâmica artesanal.",
    items: [["Coleções", "Produtos organizados por linha, com fotos grandes."], ["História", "Um espaço para contar como as peças são feitas."], ["Pedidos", "Encomendas e dúvidas direto pelo WhatsApp."]],
    bg: "#1E2A78", fg: "#F7F1E3", accent: "#F2B632", font: sans },
];
