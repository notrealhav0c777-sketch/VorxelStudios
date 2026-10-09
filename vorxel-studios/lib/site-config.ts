/**
 * CONFIGURAÇÃO CENTRAL — edite apenas aqui.
 */
export const siteConfig = {
  name: "Vorxel Studios",
  title: "Vorxel Studios | Sites Profissionais para Empresas",
  description:
    "Criamos sites autorais, modernos e profissionais para pequenas empresas, comércios e prestadores de serviços.",
  tagline: "Sites autorais para negócios que querem ir além.",
  // Domínio definitivo (ex.: "https://vorxel.com.br"). Vazio = sem canonical/sitemap.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  // PLACEHOLDER: troque pelo número real, só dígitos, com 55 + DDD (ex.: "5547912345678").
  whatsappNumber: "5511999999999",
  whatsappMessage:
    "Olá! Conheci a Vorxel Studios pelo site e gostaria de conversar sobre a criação de um site para minha empresa.",
  // PROVISÓRIO: deixe vazio até existir o perfil oficial (ícone aparece desativado).
  instagramUrl: "",
  email: "", // opcional; aparece no rodapé somente se preenchido
  logo: "/logo/vorxel-logo.png",
};

export const whatsappIsPlaceholder = siteConfig.whatsappNumber === "5511999999999";
export const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage
)}`;
