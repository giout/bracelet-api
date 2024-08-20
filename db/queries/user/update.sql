SELECT update_user(
    $(user)::uuid,
    $(username)::text,
    $(id_card)::integer
);