CREATE OR REPLACE FUNCTION sign_up (
    prm_username text,
    prm_password text
)
RETURNS TABLE (
    "admin" uuid,
    username text
)
AS 
$$
DECLARE
    admin_count integer;
BEGIN
    -- verify if username already exists
    SELECT 
        count(*) INTO admin_count
    FROM
        "admin" a
    WHERE 
        a.username = prm_username;
    IF admin_count > 0 THEN
        RAISE EXCEPTION 'A000';
    END IF;

    RETURN QUERY
    INSERT INTO "admin" (
        username, 
        "password"
    ) VALUES (
        prm_username, 
        prm_password
    ) RETURNING
        "admin"."admin",
        "admin".username;
END;
$$
LANGUAGE PLPGSQL;