create table if not exists blueprint_section (
    blueprint text not null,
    section text not null,
    index int not null,
    primary key (blueprint, section)
);

create table if not exists blueprint_tool (
  blueprint text not null,
  section text not null,
  tool text references tool(id),
  primary key (blueprint, section, tool)
);
