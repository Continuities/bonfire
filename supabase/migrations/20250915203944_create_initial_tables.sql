create extension if not exists "uuid-ossp";

create table if not exists localisation (
    id text not null,
    locale_key text not null,
    text text not null,
    primary key (id, locale_key)
);

create table if not exists tool_type (
    id text default extensions.uuid_generate_v4() primary key,
    icon varchar(1),
    created_at timestamp with time zone default current_timestamp
);

create table if not exists tool (
    id text default extensions.uuid_generate_v4() primary key,
    name text,
    url text,
    created_at timestamp with time zone default current_timestamp
);

create table if not exists tool_types_for_tool (
    tool_id text references tool(id),
    tool_type_id text references tool_type(id),
    primary key (tool_id, tool_type_id)
);

create table if not exists valor (
    id text default extensions.uuid_generate_v4() primary key,
    icon varchar(1),
    created_at timestamp with time zone default current_timestamp
);

create table if not exists community (
    id text default extensions.uuid_generate_v4() primary key,
    name varchar(100) not null,
    url varchar(500),
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
