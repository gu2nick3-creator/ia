# IA Vendedora — versão Vercel/SPA

Esta versão foi convertida para rodar como site estático Vite na Vercel, sem depender do Lovable Cloud, TanStack Start Server ou Cloudflare.

## Configuração na Vercel

Use estas configurações:

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Root Directory: vazio, se o `package.json` estiver na raiz do repositório

O arquivo `vercel.json` já inclui rewrite para SPA, então rotas como `/login`, `/dashboard` e `/boas-vindas` não devem dar 404.

## Variáveis de ambiente na Vercel

Configure em Settings > Environment Variables:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

A geração de IA usa Supabase Edge Function `generate-ai-response`. Configure o secret `OPENROUTER_API_KEY` dentro do Supabase, não no frontend.

## Supabase

As tabelas esperadas são:

- `profiles`
- `ai_generations`
- `subscriptions`
- `favorites`

Para liberar um usuário manualmente em teste, crie/edite em `profiles`:

- `id`: UID do usuário em Authentication > Users
- `email`: email do usuário
- `plano`: `pro`
- `status`: `active`
- `access_expires_at`: data futura, exemplo `2026-12-31T23:59:59+00:00`

## Deploy

1. Suba este projeto no GitHub.
2. Importe na Vercel.
3. Configure as variáveis.
4. Faça deploy.
