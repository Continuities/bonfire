create extension if not exists "uuid-ossp";

create table if not exists tool_type (
    id text default extensions.uuid_generate_v4() primary key,
    icon text,
    name json not null,
    description json not null default '{}',
    created_at timestamp with time zone default current_timestamp
);

create table if not exists tool (
    id text default extensions.uuid_generate_v4() primary key,
    name text not null,
    url text,
    description json not null default '{}',
    created_at timestamp with time zone default current_timestamp
);

create table if not exists tool_types_for_tool (
    tool_id text references tool(id),
    tool_type_id text references tool_type(id),
    primary key (tool_id, tool_type_id)
);

create table if not exists valor (
    id text default extensions.uuid_generate_v4() primary key,
    icon text,
    name json not null,
    description json not null default '{}',
    created_at timestamp with time zone default current_timestamp
);

create table if not exists community (
    id text default extensions.uuid_generate_v4() primary key,
    name text not null,
    city text not null,
    state text not null,
    country text not null,
    url text,
    description  json not null default '{}',
    created_at timestamp with time zone default current_timestamp
);

create table if not exists valors_for_community (
    community_id text references community(id),
    valor_id text references valor(id),
    primary key (community_id, valor_id)
);

create table if not exists tools_for_community (
    community_id text references community(id),
    tool_id text references tool(id),
    primary key (community_id, tool_id)
);
