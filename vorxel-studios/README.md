# Vorxel Studios — site oficial

Next.js 14 (App Router) + TypeScript + React 18. CSS próprio (sem Tailwind), ícones Lucide + SVG inline.

## Rodar localmente
```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck && npm run lint && npm run build
npm start
```

## Publicar na Vercel
1. `git init && git add . && git commit -m "Vorxel Studios"` e envie para um repositório no GitHub.
2. Na Vercel: **Add New → Project**, importe o repositório (preset Next.js detectado, sem configurar nada).
3. **Deploy**.
4. Domínio: **Settings → Domains → Add**, siga os registros DNS indicados.
   Depois defina `NEXT_PUBLIC_SITE_URL=https://seudominio.com.br` em **Settings → Environment Variables** e faça novo deploy (ativa canonical e sitemap).

## Onde editar
| O quê | Onde |
|---|---|
| WhatsApp (número e mensagem) | `lib/site-config.ts` → `whatsappNumber` (somente dígitos, 55 + DDD). Enquanto for `5511999999999`, os botões mostram aviso e não abrem conversa. |
| Instagram | `lib/site-config.ts` → `instagramUrl` (vazio = ícone desativado) |
| E-mail | `lib/site-config.ts` → `email` (aparece no rodapé se preenchido) |
| Logo | substitua `public/logo/vorxel-logo.png` (e `app/icon.png` para o favicon) |
| Projetos conceituais | `lib/projects.ts` (cores, textos). Os mockups são feitos em CSS; para usar imagens reais, coloque em `public/images/` e adapte `components/ProjectMock.tsx` com `next/image`. |

## Pendências suas
Número real do WhatsApp · perfil do Instagram · domínio · e-mail (opcional) · imagens reais dos projetos, quando existirem · condições de garantia/suporte na proposta comercial.
