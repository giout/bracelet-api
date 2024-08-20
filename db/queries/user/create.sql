SELECT * FROM create_user(
    $(username)::text,
    $(id_card)::integer
);