create table public."media leads" (
  id uuid primary key default gen_random_uuid(),
  email text not null unique check (
    char_length(email) <= 254 and email = lower(btrim(email))
    and email ~ '^[^[:space:]@]+@[^[:space:]@]+[.][^[:space:]@]+$'
  ),
  source text not null default 'portfolio',
  created_at timestamptz not null default now()
);
alter table public."media leads" enable row level security;
revoke all on table public."media leads" from anon, authenticated;
grant insert on table public."media leads" to service_role;
