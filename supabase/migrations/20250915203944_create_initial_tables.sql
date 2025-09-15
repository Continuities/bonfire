create table if not exists localisation (
    id serial primary key,
    locale_key varchar(10) not null,
    text varchar(1000) not null
);

create table if not exists tool_type (
    id serial primary key,
    icon varchar(1),
    name integer not null references localisation(id),
    description integer not null references localisation(id),
    created_at timestamp with time zone default current_timestamp
);

create table if not exists tool (
    id serial primary key,
    name integer not null references localisation(id),
    description integer not null references localisation(id),
    url varchar(500),
    tool_types int[],
    created_at timestamp with time zone default current_timestamp
);

create table if not exists tool_types_for_tool (
    tool_id int references tool(id),
    tool_type_id int references tool_type(id),
    primary key (tool_id, tool_type_id)
);

create table if not exists valor (
    id serial primary key,
    icon varchar(1),
    name integer not null references localisation(id),
    description integer not null references localisation(id),
    created_at timestamp with time zone default current_timestamp
);

create table if not exists community (
    id serial primary key,
    name integer not null references localisation(id),
    description integer not null references localisation(id),
    url varchar(500),
    valors int[],
    tools int[],
    created_at timestamp with time zone default current_timestamp
);

create table if not exists valors_for_community (
    community_id int references community(id),
    valor_id int references valor(id),
    primary key (community_id, valor_id)
);

create table if not exists tools_for_community (
    community_id int references community(id),
    tool_id int references tool(id),
    primary key (community_id, tool_id)
);
