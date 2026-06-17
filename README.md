# Navalha Barbearia — Site de producao

Site completo da Navalha Barbearia, construido com Next.js 15 (App Router), TypeScript e Tailwind CSS.

## Rodando local

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Variaveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

| Variavel | Descricao |
|---|---|
| `BOOKING_MODE` | `whatsapp` (padrao) ou `supabase` |
| `NEXT_PUBLIC_SUPABASE_URL` | URL do projeto Supabase (so para modo supabase) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Chave anonima do Supabase (so para modo supabase) |

## Como trocar dados

Todos os textos, servicos, barbeiros e horarios estao em **`lib/data.ts`**. Edite o arquivo e o site atualiza automaticamente. Para mudar telefone, redes sociais e URL, edite **`lib/config.ts`**.

## Ligar o modo Supabase

1. Crie um projeto no [Supabase](https://supabase.com).
2. Execute o SQL abaixo no SQL Editor:

```sql
create table barbers (
  id text primary key,
  name text not null,
  role text,
  active boolean default true
);

create table services (
  id text primary key,
  name text not null,
  price_cents integer not null,
  duration_min integer not null,
  active boolean default true
);

create table bookings (
  id uuid primary key default gen_random_uuid(),
  barber_id text references barbers(id),
  service_id text references services(id),
  customer_name text,
  customer_phone text,
  date date not null,
  time time not null,
  status text default 'confirmed',
  created_at timestamptz default now(),
  unique(barber_id, date, time)
);
```

3. Preencha `.env.local` com a URL e a chave anonima.
4. Mude `BOOKING_MODE=supabase`.

## Deploy na Vercel

```bash
vercel deploy
```

Ou conecte o repositorio no painel da Vercel. Adicione as variaveis de ambiente no painel antes de fazer deploy.

Para apontar dominio proprio, va em **Settings > Domains** no painel da Vercel.

## Suposicoes de projeto

- As imagens usam placeholders do Unsplash; substitua por fotos reais em `lib/data.ts`.
- O mapa na pagina de Contato usa embed generico do Google Maps; substitua pela URL do embed real do endereco.
- Os depoimentos sao ilustrativos; substitua pelas avaliacoes reais do Google.
- O og-image usa uma foto do Unsplash; para producao, gere uma imagem 1200x630 propria e coloque em `public/og-image.jpg`, atualizando o campo em `app/layout.tsx`.
