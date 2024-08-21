SELECT * FROM create_assignment(
    $(user)::uuid,
    $(bracelet)::integer,
    $(time)::integer
);