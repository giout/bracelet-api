CREATE OR REPLACE FUNCTION delete_user (
    prm_user uuid
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

    DELETE FROM
        "user"
    WHERE 
        "user"."user" = prm_user;
END;
$$
LANGUAGE PLPGSQL;