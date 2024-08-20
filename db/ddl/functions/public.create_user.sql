CREATE OR REPLACE FUNCTION create_user (
    prm_username text,
    prm_id_card integer
)
RETURNS TABLE (
    "user" uuid,
    id_card integer,
    username text
)
AS 
$$
DECLARE
    user_count integer;
BEGIN
    -- verify if username already exists
    SELECT 
        count(*) INTO user_count
    FROM
        "user" u
    WHERE 
        u.username = prm_username;
    IF user_count > 0 THEN
        RAISE EXCEPTION 'U000';
    END IF;

    -- verify if id card already exists
    SELECT 
        count(*) INTO user_count
    FROM
        "user" u
    WHERE 
        u.id_card = prm_id_card;
    IF user_count > 0 THEN
        RAISE EXCEPTION 'U001';
    END IF;

    RETURN QUERY
    INSERT INTO "user" (
        username, 
        "id_card"
    ) VALUES (
        prm_username, 
        prm_id_card
    ) RETURNING
        "user"."user",
        "user".id_card,
        "user".username;
END;
$$
LANGUAGE PLPGSQL;