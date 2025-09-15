create extension if not exists "uuid-ossp";

create table if not exists localisation (
    id varchar(100) not null,
    locale_key varchar(10) not null,
    text varchar(1000) not null,
    primary key (id, locale_key)
);

create table if not exists tool_type (
    id varchar(36) default extensions.uuid_generate_v4() primary key,
    icon varchar(1),
    created_at timestamp with time zone default current_timestamp
);

create table if not exists tool (
    id varchar(36) default extensions.uuid_generate_v4() primary key,
    url varchar(500),
    tool_types varchar(36)[],
    created_at timestamp with time zone default current_timestamp
);

create table if not exists tool_types_for_tool (
    tool_id varchar(36) references tool(id),
    tool_type_id varchar(36) references tool_type(id),
    primary key (tool_id, tool_type_id)
);

create table if not exists valor (
    id varchar(36) default extensions.uuid_generate_v4() primary key,
    icon varchar(1),
    created_at timestamp with time zone default current_timestamp
);

create table if not exists community (
    id varchar(36) default extensions.uuid_generate_v4() primary key,
    url varchar(500),
    created_at timestamp with time zone default current_timestamp
);

create table if not exists valors_for_community (
    community_id varchar(36) references community(id),
    valor_id varchar(36) references valor(id),
    primary key (community_id, valor_id)
);

create table if not exists tools_for_community (
    community_id varchar(36) references community(id),
    tool_id varchar(36) references tool(id),
    primary key (community_id, tool_id)
);
