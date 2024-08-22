CREATE OR REPLACE FUNCTION create_assignment (
    prm_id_card integer,
    prm_bracelet integer,
    prm_time integer
)
RETURNS TABLE (
    assignment uuid,
    "user" uuid,
    bracelet integer,
    "time" integer,
    assignment_date timestamp without time zone
)
AS 
$$
DECLARE
    user_row "user"%ROWTYPE;
    bracelet_count integer;
BEGIN
    -- verify if user exists
    SELECT 
        * INTO user_row
    FROM
        "user" u
    WHERE 
        u.id_card = prm_id_card;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'U004';
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
        user_row."user",
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