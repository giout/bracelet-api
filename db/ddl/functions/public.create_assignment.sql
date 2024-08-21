CREATE OR REPLACE FUNCTION create_assignment (
    prm_user uuid,
    prm_bracelet integer,
    prm_time integer
)
RETURNS TABLE (
    assignment uuid,
    "user" uuid,
    bracelet integer,
    "time" integer,
    "assignment_date" timestamp without time zone
)
AS 
$$
DECLARE
    user_count integer;
    bracelet_count integer;
BEGIN
    -- verify if user exists
    SELECT 
        count(*) INTO user_count
    FROM
        "user" u
    WHERE 
        u.user = prm_user;
    IF user_count = 0 THEN
        RAISE EXCEPTION 'U002';
    END IF;

    -- verify if bracelet exists
    SELECT 
        count(*) INTO bracelet_count
    FROM
        bracelet b
    WHERE 
        b.bracelet = prm_bracelet;
    IF bracelet_count = 0 THEN
        RAISE EXCEPTION 'B000';
    END IF;

    RETURN QUERY
    INSERT INTO assignment (
        "user",
        bracelet,
        "time"
    ) VALUES (
        prm_user,
        prm_bracelet,
        prm_time
    ) RETURNING
        assignment.assignment,
        assignment."user",
        assignment.bracelet,
        assignment."time",
        assignment."date";
END;
$$
LANGUAGE PLPGSQL;