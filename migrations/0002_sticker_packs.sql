create table if not exists sticker_packs (
  id text primary key,
  user_id text not null,
  name text not null,
  artist text not null,
  tray_image text,
  share_id text not null,
  status text not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists sticker_packs_share_id_idx on sticker_packs (share_id);
create index if not exists sticker_packs_user_id_idx on sticker_packs (user_id);
create index if not exists sticker_packs_user_status_idx on sticker_packs (user_id, status);

create table if not exists stickers (
  id text primary key,
  pack_id text not null references sticker_packs (id) on delete cascade,
  user_id text not null,
  image_webp text not null,
  emojis text not null default '😀',
  sort_order integer not null default 0,
  byte_size integer not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists stickers_pack_id_idx on stickers (pack_id);
create index if not exists stickers_user_id_idx on stickers (user_id);
