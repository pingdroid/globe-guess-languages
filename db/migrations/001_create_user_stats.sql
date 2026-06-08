-- 001_create_user_stats.sql
-- Create tables to store per-user aggregated stats and simple key-value pairs

create extension if not exists "pgcrypto";

create table if not exists public.user_stats (
  user_id uuid primary key references auth.users(id),
  stats jsonb not null,
  updated_at timestamptz default now()
);

create table if not exists public.user_kv (
  user_id uuid references auth.users(id),
  key text not null,
  value text,
  primary key (user_id, key)
);

alter table public.user_stats enable row level security;

create policy "user_stats_select_insert_update" on public.user_stats
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
