CREATE OR REPLACE FUNCTION update_user (
    prm_user uuid,
    prm_username text,
    prm_id_card integer
)
RETURNS void
AS 
$$
DECLARE
    user_count integer;
BEGIN
    -- verify if user exists
    SELECT 
        count(*) INTO user_count
    FROM 
        "user" u
    WHERE
        u."user" = prm_user;
    IF user_count = 0 THEN
        RAISE EXCEPTION 'U002';
    END IF;

    -- verify if username already exists
    SELECT 
        count(*) INTO user_count
    FROM
        "user" u
    WHERE 
        u.username = prm_username
    AND 
        u."user" <> prm_user;
    IF user_count > 0 THEN
        RAISE EXCEPTION 'U000';
    END IF;

    -- verify if id card already exists
    SELECT 
        count(*) INTO user_count
    FROM
        "user" u
    WHERE 
        u.id_card = prm_id_card
    AND 
        u."user" <> prm_user;
    IF user_count > 0 THEN
        RAISE EXCEPTION 'U001';
    END IF;

    UPDATE 
        public."user"
    SET 
        username = prm_username,
        id_card = prm_id_card
    WHERE
        public."user"."user" = prm_user;
END;
$$
LANGUAGE PLPGSQL;