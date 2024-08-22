SELECT * FROM create_assignment(
    $(id_card)::integer,
    $(bracelet)::integer,
    $(time)::integer
);